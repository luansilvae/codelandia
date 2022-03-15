import Image from "next/image";
import React from "react";
import { ProjectData } from "../../types/ProjectData";

import styles from "./ProjectList.module.scss";

export const ProjectList = ({ projects }: { projects: ProjectData[] }) => {
  return (
    <ul className={styles.ListGrid}>
      {projects.map((project) => (
        <li key={project.name} className={styles.ListItem}>
          <div className={styles.Thumb}>
            <Image
              src={project.image}
              alt={project.name}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              priority={true}
            />
          </div>

          <div className={styles.ListContent}>
            <header className={styles.ListHeader}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </header>

            <div className={styles.ListLinks}>
              <a href={project.preview_url} target="_blank" rel="noreferrer">
                Demo
              </a>
              <a href={project.repo_url} target="_blank" rel="noreferrer">
                Github
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
