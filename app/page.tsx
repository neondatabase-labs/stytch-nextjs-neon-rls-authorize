"use client";

import { AddTodoForm } from "@/app/add-todo";
import { Header } from "@/app/header";
import { TodoList } from "@/app/todo-list";
import { useStytchUser } from "@stytch/nextjs";
import { StytchLogin } from "@/app/components/stytch-login";
import { TodosProvider } from "@/app/todos-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import styles from "../styles/Home.module.css";

export default function Home() {
  const { user, isInitialized } = useStytchUser();
  const router = useRouter();

  // If the Stytch SDK detects a User then redirect to profile; for example if a
  // logged in User navigated directly to this URL.
  useEffect(() => {
    if (isInitialized && user) {
      router.replace("/");
    }
  }, [user, isInitialized, router]);

  let content = null;
  if (user) {
    content = (
      <main className={styles.main}>
        <div className={styles.container}>
          <TodosProvider>
            <AddTodoForm />
            <TodoList />
          </TodosProvider>
        </div>
      </main>
    );
  } else {
    content = (
      <center style={{ marginTop: 20 }}>
        <StytchLogin />
      </center>
    );
  }

  return (
    <>
      <Header />
      {content}
    </>
  );
}
