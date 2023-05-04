import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Primeiro Post</title>
      </Head>
      <h1>Primeiro Post</h1>
      <h2>
        <Link href="/">voltar para home</Link>
      </h2>
    </Layout>
  );
}
