"use client";

import { useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { User, Briefcase, GraduationCap, Code } from "lucide-react";
import { about, education, experiencie, skills } from "./about.constants";

export default function About() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = useMemo(() => {
    if (!searchQuery) {
      return skills.skillList;
    }
    return skills.skillList.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="container mx-auto py-8 px-2 sm:px-6 flex-1">
      <div className="text-center mb-8 max-[500px]:mb-2">
        <p className="text-base sm:text-lg  max-w-2xl mx-auto ">
          Conheça mais sobre minha trajetória profissional, formação e
          competências técnicas.
        </p>
      </div>

      <Tabs defaultValue="about" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4 h-12 p-1 overflow-x-auto">
          <TabsTrigger
            value="about"
            className="flex items-center gap-2 px-4 py-2 text-sm justify-center  transition-all duration-200 hover:border-primary cursor-pointer"
          >
            <User className="w-4 h-4" />
            <span className="max-[500px]:hidden">Pessoal</span>
          </TabsTrigger>
          <TabsTrigger
            value="experience"
            className="flex items-center gap-2 px-4 py-2 text-sm justify-center  transition-all duration-200 hover:border-primary cursor-pointer"
          >
            <Briefcase className="w-4 h-4" />
            <span className="max-[500px]:hidden">Experiência</span>
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="flex items-center gap-2 px-4 py-2 text-sm justify-center  transition-all duration-200 hover:border-primary cursor-pointer"
          >
            <GraduationCap className="w-4 h-4" />
            <span className="max-[500px]:hidden">Formação</span>
          </TabsTrigger>
          <TabsTrigger
            value="skills"
            className="flex items-center gap-2 px-4 py-2 text-sm justify-center  transition-all duration-200 hover:border-primary cursor-pointer"
          >
            <Code className="w-4 h-4" />
            <span className="max-[500px]:hidden">Competências</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-2">
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              {about.title}
            </h2>
            <p className="text-sm sm:text-base text-foreground/80 mb-6 ">
              {about.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {about.info.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between p-3 bg-secondary rounded-sm"
                >
                  <span className="font-medium text-foreground">
                    {item.fieldName}:
                  </span>
                  <span className="text-foreground/80 font-medium break-all">
                    {item.fieldValue}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="experience" className="mt-2">
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              {experiencie.title}
            </h2>
            <p className="text-sm sm:text-base text-foreground/80 mb-6 whitespace-pre-line">
              {experiencie.description}
            </p>

            <div className="space-y-4">
              {experiencie.items.map((item, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary pl-4 pb-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-foreground">
                        {item.position}
                      </h3>
                      <a
                        href={item.href ?? "#"}
                        className="text-primary font-medium text-sm sm:text-base transition-all duration-200 hover:text-accent"
                      >
                        {item.company}
                      </a>
                    </div>
                    <span className="text-xs sm:text-sm text-foreground/70 bg-background px-2 py-1 rounded">
                      {item.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="education" className="mt-2">
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              {education.title}
            </h2>
            <p className="text-sm sm:text-base text-foreground/80 mb-6">
              {education.description}
            </p>

            <div className="space-y-4">
              {education.items.map((item, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary pl-4 pb-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-foreground">
                        {item.degree}
                      </h3>
                      <p className="text-primary font-medium text-sm sm:text-base">
                        {item.institution}
                      </p>
                    </div>
                    <span className="text-xs sm:text-sm text-foreground/70 bg-background px-2 py-1 rounded">
                      {item.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="mt-2">
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              {skills.title}
            </h2>
            <p className="text-sm sm:text-base text-foreground/80 mb-6 whitespace-pre-line">
              {skills.description}
            </p>

            <Input
              type="text"
              placeholder="Pesquisar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-6"
            />
            {filteredSkills.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-background rounded-lg border hover:border-primary transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-center text-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-foreground/80 mt-4">
                Nenhuma competência encontrada.
              </p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
