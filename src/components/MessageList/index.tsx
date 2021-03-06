import { useEffect, useState } from "react";
import { api } from "../../services/api";
import io from "socket.io-client";

import styles from "./styles.module.scss";
import logoImg from "../../assets/logo.svg";

type Message = {
  created_at: string;
  id: string;
  text: string;
  user_id: string;
  user: {
    avatar_url: string;
    bio: string;
    github_id: string;
    id: string;
    location: string;
    login: string;
    name: string;
    url: string;
  };
};

const messagesQueue: Message[] = [];

const socket = io("http://localhost:4000");

socket.on("new_message", (newMessage: Message) => {
  messagesQueue.push(newMessage);
});

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prevState) =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean)
        );

        messagesQueue.shift();
      }
    }, 3000);
  }, []);

  useEffect(() => {
    api.get<Message[]>("messages/last3").then((response) => {
      setMessages(response.data);
    });
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        {messages.map((message) => {
          console.log(message);
          return (
            <li key={message.id} className={styles.message}>
              <p className={styles.messageContent}>{message.text}</p>

              <a
                href={`https://github.com/${message.user.login}`}
                target="_blank"
              >
                <div className={styles.messageUser}>
                  <div className={styles.userImage}>
                    <img
                      src={message.user.avatar_url}
                      alt={message.user.name}
                    />
                  </div>
                  <div className={styles.userInformations}>
                    <span>{message.user.name}</span>
                    <sub>{message.user.location}</sub>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
