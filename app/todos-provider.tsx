"use client";

import { getTodos } from "@/app/actions";
import { useStytch, useStytchUser } from "@stytch/nextjs";
import { createContext, useEffect, useState } from "react";
import { Todo } from "@/app/schema";

export const TodosContext = createContext<{
  todos: Array<Todo> | null;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo> | null>>;
}>({
  todos: null,
  setTodos: () => {},
});

export function TodosProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Array<Todo> | null>(null);

  const stytch = useStytch();
  const { user } = useStytchUser();

  useEffect(() => {
    const tokens = stytch.session.getTokens();

    if (!tokens) {
      throw new Error("No tokens");
    }

    if (!user) {
      throw new Error("No user");
    }

    const { session_jwt: authToken } = tokens;

    getTodos({ authToken, userId: user.user_id }).then((todos) => {
      setTodos(todos);
    });
  }, [user, getTodos]);

  if (user === null) {
    return null;
  }

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}
