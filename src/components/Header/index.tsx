/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          <a href="">Home</a>
          <a href="">Posts</a>
        </nav>
      </div>
    </header>
  );
};
