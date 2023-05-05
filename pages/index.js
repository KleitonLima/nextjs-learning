import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Olá! Seja bem-vinda(o) ao meu perfil! Sou cristão, tenho uma linda
          filha de 5 anos e sou casado com uma mulher incrível. Sou
          Desenvolvedor Full Stack formado pela BlueEdtech. Atualmente estou em
          busca de uma oportunidade de emprego enquanto desenvolvo alguns
          projetos.. Tenho muita vontade de aprender, sou um cara proativo,
          gosto de novos desafios, aceito facilmente sugestões e críticas para
          evolução e me dedico muito no que faço buscando sempre dar o meu
          melhor.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
