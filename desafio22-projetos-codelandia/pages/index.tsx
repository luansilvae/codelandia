import Head from "next/head";
import Image from "next/image";
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

      <footer className={styles.Footer}>
        <Image
          src="/favicon.svg"
          alt="Codelândia"
          objectFit="fill"
          width={37}
          height={30}
        />

        <div className={styles.FooterLinks}>
          <span>© 2022 - Luan Silva</span>
          <span>Codelândia</span>
        </div>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.SERVER_URL}/api/projects`);
  const projects: ProjectData[] = await res.json();

  return {
    props: {
      projects,
    },
  };
}
