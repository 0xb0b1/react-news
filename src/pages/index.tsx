import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ignews | Home</title>
      </Head>

      <Header />

      <h1>Hello World</h1>
    </>
  );
};

export default Home;
