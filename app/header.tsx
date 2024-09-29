"use client";

import { useStytch, useStytchUser } from "@stytch/nextjs";

import styles from "../styles/Home.module.css";

export function Header() {
  const { user } = useStytchUser();
  const stytch = useStytch();

  return (
    <header className={styles.header}>
      <div>My Todo App</div>
      {user ? (
        <>
          <button onClick={() => stytch.session.revoke()}>Sign Out</button>
        </>
      ) : null}
    </header>
  );
}
