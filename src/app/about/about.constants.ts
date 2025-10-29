import { calculateExperience } from "@/helpers/calculateExperience.";

export const experienceTime = calculateExperience("2022-11-01");
export const about = {
  title: "Sobre mim",
  description: `Sou desenvolvedor desde novembro de 2022, com cerca de ${experienceTime.pt} de experiência. Tenho como principal foco o ecossistema Typescript — atuando tanto no front-end, com Next.js, React e React Native, quanto no back-end, com Node.js. Busco constantemente aprimorar minhas habilidades e enfrentar novos desafios que impulsionem meu crescimento profissional.`,
  info: [
    {
      fieldName: "Nome",
      fieldValue: "John Rodrigues",
    },
    {
      fieldName: "Telefone",
      fieldValue: "(79) 9 88667249",
    },
    {
      fieldName: "Instagram",
      fieldValue: "johnrodrigues._",
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro",
    },
    {
      fieldName: "Email",
      fieldValue: "johnrodriguesdeveloper@gmail.com",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Português, Inglês",
    },
  ],
};
export const experiencie = {
  title: "Minhas experiências",
  description:
    "Sou grato por cada etapa da minha jornada como desenvolvedor — cada projeto, desafio e aprendizado contribuíram para minha evolução profissional e pessoal.\n\n Abaixo, algumas das experiências que fizeram parte dessa trajetória. 👇",
  items: [
    {
      href: "https://www.linkedin.com/company/zenvia-inc/posts/?feedView=all",
      company: "ZENVIA",
      position: "Engenheiro de software FullStack",
      duration: "2025-presente",
    },
    {
      href: "https://www.linkedin.com/company/topazevolution/posts/?feedView=all",
      company: "Topaz",
      position: "Engenheiro de software FullStack",
      duration: "2024-2025",
    },
    {
      href: "https://www.linkedin.com/company/newmtopaz/posts/?feedView=all",
      company: "NewM",
      position: "Engenheiro de software FullStack",
      duration: "2024-2025",
    },
    {
      href: "https://www.linkedin.com/company/just-a-little-data/posts/?feedView=all",
      company: "Just a Little Data / Unlock Knowledge",
      position: "Engenheiro de software Front end",
      duration: "2023-2024",
    },
  ],
};
