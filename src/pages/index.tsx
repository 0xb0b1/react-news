import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";

export const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home| ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>🙋 Hey, welcome</span>
          <h1>
            News About the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publication <br />
            <span>for $9.99 month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
};

export default Home;
