"use client";

import { insertTodo } from "@/app/actions";
import { TodosContext } from "@/app/todos-provider";
import { useStytch } from "@stytch/nextjs";
import { useContext, useRef } from "react";

export function AddTodoForm() {
  const stytch = useStytch();
  const { todos, setTodos } = useContext(TodosContext);
  const formRef = useRef<HTMLFormElement>(null);

  async function insertTodoFormAction(formData: FormData) {
    const newTodo = formData.get("newTodo");

    if (!newTodo) {
      throw new Error("No newTodo");
    }

    if (typeof newTodo !== "string") {
      throw new Error("The newTodo must be a string");
    }

    const tokens = stytch.session.getTokens();

    if (!tokens) {
      throw new Error("No tokens");
    }

    if (todos === null) {
      throw new Error("No todos");
    }

    const todo = (
      await insertTodo({
        newTodo: newTodo.toString(),
        authToken: tokens.session_jwt,
      })
    )[0];

    setTodos([...todos, todo]);
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={insertTodoFormAction}>
      <input required name="newTodo"></input>
      &nbsp;<button type="submit">Add Todo</button>
    </form>
  );
}
