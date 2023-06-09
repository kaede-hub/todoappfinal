import Head from "next/head";
import Detail from "components/Detail";
import Header from "components/organisms/layout/Header";

export default function Todo() {
  return (
    <>
      <Head>
        <title>-Detail- Todo Team Dev No.3</title>
        <meta name="description" content="Generated by create nextapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Detail />
    </>
  );
}