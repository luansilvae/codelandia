import type { GetStaticProps } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { HeroBanner } from "../components/HeroBanner";
import { ProjectList } from "../components/ProjectList";
import styles from "../styles/Home.module.scss";
import { ProjectData } from "../types/ProjectData";

export default function Home({ projects }: { projects: ProjectData[] }) {
  return (
    <div className={styles.Container}>
      <Head>
        <title>Projetos Codelândia</title>
        <meta name="description" content="Projetos da comunidade codelândia" />
        <link rel="icon" type="image/svg" href="/favicon.svg" />
      </Head>
      <Header />
      <main className={styles.Main}>
        <HeroBanner />
        <ProjectList projects={projects} />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/projects`);
  const projects: ProjectData[] = await res.json();

  return {
    props: {
      projects,
    },
    revalidate: false,
  };
};
