import { useEffect } from "react";
import { api } from "../../services/api";

import styles from "./styles.module.scss";
import logoImg from "../../assets/logo.svg";

export function MessageList() {
  useEffect(() => {
    const getMessages = async () => {
      const { data } = await api.get("/messages/last3/");
      console.log(data);
    };
    getMessages();
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            laudantium neque consectetur molestias aliquam ab reprehenderit,
            delectus quod? Modi laboriosam eum magni molestiae non beatae quam
            vel delectus ipsa suscipit?
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/lui7henrique.png"
                alt="Luiz Henrique"
              />
            </div>
            <span>Luiz Henrique</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            laudantium neque consectetur molestias aliquam ab reprehenderit,
            delectus quod? Modi laboriosam eum magni molestiae non beatae quam
            vel delectus ipsa suscipit?
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/lui7henrique.png"
                alt="Luiz Henrique"
              />
            </div>
            <span>Luiz Henrique</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            laudantium neque consectetur molestias aliquam ab reprehenderit,
            delectus quod? Modi laboriosam eum magni molestiae non beatae quam
            vel delectus ipsa suscipit?
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/lui7henrique.png"
                alt="Luiz Henrique"
              />
            </div>
            <span>Luiz Henrique</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
