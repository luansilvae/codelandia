import type { NextApiRequest, NextApiResponse } from "next";

import { ProjectData } from "../../types/ProjectData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectData[]>
) {
  res.status(200).json([
    {
      name: "Blog",
      image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3hm8nz1ehevajy7en2r1.png",
      description: "Desafio 01 - Desenvolvido com ReactJS e SASS",
      preview_url: "https://codelandia-desafio01-blog.vercel.app/",
      repo_url:
        "https://github.com/luansilvae/codelandia/tree/main/desafio01-blog",
    },
    {
      name: "Jordan Shoes",
      image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5hnjtwoy8cmbv28c61hg.png",
      description: "Desafio 02 - Desenvolvido com ReactJS e SASS",
      preview_url: "https://desafio02-jordanshoes.vercel.app/",
      repo_url:
        "https://github.com/luansilvae/codelandia/tree/main/desafio02-jordanshoes",
    },
    {
      name: "One Page",
      image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ctlpzoh08xhqj74sf6mz.png",
      description: "Desafio 03 - Desenvolvido com ReactJS e SASS",
      preview_url: "https://desafio03-onepage.vercel.app/",
      repo_url:
        "https://github.com/luansilvae/codelandia/tree/main/desafio03-onepage",
    },
    {
      name: "Login page",
      image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oa8ss44cu6owe5ogquep.png",
      description: "Desafio 04 - Desenvolvido com ReactJS e Styled-Components",
      preview_url: "https://desafio04-login.vercel.app/",
      repo_url:
        "https://github.com/luansilvae/codelandia/tree/main/desafio04-login",
    },
    {
      name: "Studio Ghibli",
      image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2gu1pu3e9d564vsnixx0.png",
      description: "Desafio 05 - Desenvolvido com ReactJS e SASS",
      preview_url: "https://desafio05-studio-ghibli.vercel.app/",
      repo_url:
        "https://github.com/luansilvae/codelandia/tree/main/desafio05-studio-ghibli",
    },
    {
      name: "Loki",
      image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/721b5mqsmv9n7czxzrch.png",
      description: "Desafio 06 - Desenvolvido com ReactJS e SASS",
      preview_url: "https://desafio06-loki.vercel.app/",
      repo_url:
        "https://github.com/luansilvae/codelandia/tree/main/desafio06-loki",
    },
    {
      name: "Valorant",
      image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c0atsnu1c7rk9tsc0low.png",
      description:
        "Desafio 07 - Desenvolvido com ReactJS e Styled-Components e data fetching da API do Valorant com axios",
      preview_url: "https://valorant-home.vercel.app/",
      repo_url:
        "https://github.com/luansilvae/codelandia/tree/main/desafio07-valorant",
    },
    {
      name: "Rachi",
      image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/owiof3aulx6wrkr2mcig.png",
      description: "Desafio 19 - Desenvolvido com ReactJS e Styled-Components",
      preview_url: "https://desafio19-rachi.vercel.app/",
      repo_url:
        "https://github.com/luansilvae/codelandia/tree/main/desafio19-rachi",
    },
  ]);
}
