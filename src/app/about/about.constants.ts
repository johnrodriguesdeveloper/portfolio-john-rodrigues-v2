import { calculateExperience } from "@/helpers/calculateExperience.";

export const experienceTime = calculateExperience("2022-11-01");
export const about = {
  title: "Sobre mim",
  description: `Sou desenvolvedor com cerca de ${experienceTime.pt} de experiência. Tenho como principal foco o ecossistema Typescript — atuando tanto no front-end, com Next.js, React e React Native, quanto no back-end, com Node.js. Busco constantemente aprimorar minhas habilidades e enfrentar novos desafios que impulsionem meu crescimento profissional.`,
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
    "Sou grato por cada etapa da minha jornada como desenvolvedor — cada projeto, desafio e aprendizado contribuíram para minha evolução profissional e pessoal. Abaixo, algumas das experiências que fizeram parte dessa trajetória. 👇",
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
export const education = {
  title: "Minhas formações",
  description:
    "Acredito que o aprendizado é contínuo. Estou sempre evoluindo como desenvolvedor e buscando novos desafios. Veja a seguir alguns dos cursos mais relevantes da minha formação.",
  items: [
    {
      institution: "Universidade Federal de Sergipe",
      degree: "Bacharelado em análise e desenvolvimento de sistemas",
      duration: "2022-presente",
    },
    {
      institution: "Fullstackclub",
      degree: "Full Stack JavaScript",
      duration: "2024-presente",
    },
    {
      institution: "Rocketseat",
      degree: "Ignite React",
      duration: "2023-2024",
    },
    {
      institution: "Rocketseat",
      degree: "Discorver",
      duration: "2022-2023",
    },
  ],
};
export const skills = {
  title: "Competências Técnicas",
  description:
    "Possuo experiência em desenvolvimento Frontend, Backend e Full-Stack. Abaixo estão as principais ferramentas e stacks que utilizo no meu dia a dia como desenvolvedor. 👇",
  skillList: [
    { icon: "Html5", name: "HTML5" },
    { icon: "Css3", name: "CSS3" },
    { icon: "Javascript", name: "JavaScript" },
    { icon: "TypeScript", name: "TypeScript" },
    { icon: "React", name: "React" },
    { icon: "React", name: "React Native" },
    { icon: "Zustand", name: "Zustand" },
    { icon: "Tanstack", name: "TanStack Query" },
    { icon: "Redux", name: "Redux" },
    { icon: "Context", name: "Context API" },
    { icon: "TestingLibrary", name: "Testing Library" },
    { icon: "NextJs", name: "Next.js" },
    { icon: "NodeJs", name: "Node.js" },
    { icon: "Express", name: "Express" },
    { icon: "NestJs", name: "NestJS" },
    { icon: "Php", name: "PHP" },
    { icon: "Laravel", name: "Laravel" },
    { icon: "Test", name: "Unit & Integration Testing (TDD)" },
    { icon: "CiCd", name: "CI/CD" },
    { icon: "Docker", name: "Docker" },
    { icon: "Database", name: "SQL & NoSQL" },
    { icon: "Git", name: "Git" },
  ],
};
