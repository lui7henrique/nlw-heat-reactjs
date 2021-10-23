import { useState } from "react";
import styles from "./App.module.scss";
import { LoginBox } from "./components/LoginBox";
import { MessageList } from "./components/MessageList";
import { SendMessageForm } from "./components/SendMessageForm";

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
      <SendMessageForm />
    </main>
  );
}
