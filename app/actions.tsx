"use server";

import * as schema from "@/app/schema";
import { Todo } from "@/app/schema";
import { neon } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";

function getDb(authToken: string) {
  return drizzle(neon(process.env.DATABASE_AUTHENTICATED_URL!, { authToken }), {
    schema,
  });
}

export async function insertTodo({
  newTodo,
  authToken,
}: {
  newTodo: string;
  authToken: string;
}) {
  const db = await getDb(authToken);
  const insertedTodo = await db
    .insert(schema.todos)
    .values({
      task: newTodo,
      isComplete: false,
    })
    .returning();

  return insertedTodo;
}

export async function getTodos({
  userId,
  authToken,
}: {
  userId: string;
  authToken: string;
}): Promise<Array<Todo>> {
  // WHERE filter is optional because of RLS. But we send it anyway for
  // performance reasons.
  return getDb(authToken)
    .select()
    .from(schema.todos)
    .where(eq(schema.todos.userId, userId));
}
