"use client";

import { useContext } from "react";

import styles from "../styles/Home.module.css";
import { TodosContext } from "@/app/todos-provider";

export function TodoList() {
  const { todos } = useContext(TodosContext);

  // if loading, just show basic message
  if (todos === null) {
    return <div className={styles.label}>Loading...</div>;
  }

  // display all the todos
  return (
    <>
      {todos.length > 0 ? (
        <div className={styles.todoList}>
          <ol>
            {todos.map((todo) => (
              <li key={todo.id.toString()}>{todo.task}</li>
            ))}
          </ol>
        </div>
      ) : (
        <div className={styles.label}>You don&apos;t have any todos!</div>
      )}
    </>
  );
}
