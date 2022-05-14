import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export const SignInButton = () => {
  const session = false;

  if (session) {
    return (
      <button type="button" className={styles.signInButton}>
        <FaGithub color="#04d361" />
        Paulo Vicente
        <FiX className={styles.closeIcon} color="#CCC" />
      </button>
    );
  }

  return (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign in With GitHub
    </button>
  );
};
