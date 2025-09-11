"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Briefcase, GraduationCap, Code } from "lucide-react";

export default function About() {
  const about = {
    title: "Sobre mim",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem praesentium odit voluptatibus eos veniam iste possimus quo nostrum dicta corrupti. Veniam aspernatur magnam a est dolore quam maxime optio animi!",
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

  const experiencie = {
    title: "Minhas experiências",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dicta adipisci! Et, repellat veritatis doloribus esse deserunt est perspiciatis magnam fugit, dicta facere id, optio accusamus dolores culpa praesentium nisi.",
    items: [
      {
        company: "Tech Company A",
        position: "Desenvolvedor Full Stack",
        duration: "2022-presente",
      },
      {
        company: "Tech Company B",
        position: "Desenvolvedor Frontend",
        duration: "2021-2022",
      },
      {
        company: "Startup C",
        position: "Desenvolvedor Junior",
        duration: "2020-2021",
      },
    ],
  };

  const education = {
    title: "Minhas formações",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dicta adipisci! Et, repellat veritatis doloribus esse deserunt est perspiciatis magnam fugit, dicta facere id, optio accusamus dolores culpa praesentium nisi.",
    items: [
      {
        institution: "Universidade Federal de Sergipe",
        degree: "Bacharelado em Ciência da Computação",
        duration: "2018-2022",
      },
      {
        institution: "Rocketseat",
        degree: "Ignite React",
        duration: "2022",
      },
      {
        institution: "Alura",
        degree: "Full Stack JavaScript",
        duration: "2021-2022",
      },
    ],
  };

  const skills = {
    title: "Competências Técnicas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dicta adipisci! Et, repellat veritatis doloribus esse deserunt est perspiciatis magnam fugit, dicta facere id, optio accusamus dolores culpa praesentium nisi.",
    skillList: [
      {
        icon: "Html5",
        name: "HTML5",
      },
      {
        icon: "Css3",
        name: "CSS3",
      },
      {
        icon: "Javascript",
        name: "JavaScript",
      },
      {
        icon: "TypeScript",
        name: "TypeScript",
      },
      {
        icon: "React",
        name: "React",
      },
      {
        icon: "NextJs",
        name: "Next.js",
      },
      {
        icon: "NodeJs",
        name: "Node.js",
      },
      {
        icon: "TailwindCss",
        name: "Tailwind CSS",
      },
      {
        icon: "Git",
        name: "Git",
      },
    ],
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Sobre mim</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Conheça mais sobre minha trajetória profissional, formação e
          competências técnicas.
        </p>
      </div>

      <Tabs defaultValue="about" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4 h-12 p-1">
          <TabsTrigger
            value="about"
            className="flex items-center gap-2 px-4 py-2 text-sm"
          >
            <User className="w-4 h-4" />
            Pessoal
          </TabsTrigger>
          <TabsTrigger
            value="experience"
            className="flex items-center gap-2 px-4 py-2 text-sm"
          >
            <Briefcase className="w-4 h-4" />
            Experiência
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="flex items-center gap-2 px-4 py-2 text-sm"
          >
            <GraduationCap className="w-4 h-4" />
            Formação
          </TabsTrigger>
          <TabsTrigger
            value="skills"
            className="flex items-center gap-2 px-4 py-2 text-sm"
          >
            <Code className="w-4 h-4" />
            Competências
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-6">
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-semibold mb-4">{about.title}</h2>
            <p className="text-foreground/80 mb-6">{about.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {about.info.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 bg-background rounded-md"
                >
                  <span className="font-medium text-foreground">
                    {item.fieldName}:
                  </span>
                  <span className="text-foreground/80 font-medium">
                    {item.fieldValue}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="experience" className="mt-6">
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-semibold mb-4">{experiencie.title}</h2>
            <p className="text-foreground/80 mb-6">{experiencie.description}</p>

            <div className="space-y-4">
              {experiencie.items.map((item, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary pl-4 pb-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">
                        {item.position}
                      </h3>
                      <p className="text-primary font-medium">{item.company}</p>
                    </div>
                    <span className="text-sm text-foreground/70 bg-background px-2 py-1 rounded">
                      {item.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="education" className="mt-6">
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-semibold mb-4">{education.title}</h2>
            <p className="text-foreground/80 mb-6">{education.description}</p>

            <div className="space-y-4">
              {education.items.map((item, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary pl-4 pb-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">
                        {item.degree}
                      </h3>
                      <p className="text-primary font-medium">
                        {item.institution}
                      </p>
                    </div>
                    <span className="text-sm text-foreground/70 bg-background px-2 py-1 rounded">
                      {item.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="mt-6">
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-semibold mb-4">{skills.title}</h2>
            <p className="text-foreground/80 mb-6">{skills.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.skillList.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-background rounded-lg border hover:border-primary transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-center text-foreground">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
