import { useState } from "react";
import type { Project } from "@/app/work/types";
import Image from "next/image";
import { Code2, Loader2 } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  const [isLoading, setIsLoading] = useState(true);

  const hasImage = !!project.imageUrl;

  return (
    <a
      href={project.href ?? "#"}
      target="_blank"
      className="group block overflow-hidden rounded-lg border bg-card p-6 transition-all duration-200 hover:shadow-lg hover:border-accent/20"
    >
      <div className="space-y-2">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-accent/10 border relative overflow-hidden">
            {hasImage && isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-card/50">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
              </div>
            )}

            {hasImage ? (
              <Image
                src={project.imageUrl!}
                priority
                quality={100}
                fill
                alt={project.title}
                sizes="64px"
                className={`object-cover transition-opacity duration-300 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoadingComplete={() => setIsLoading(false)}
              />
            ) : (
              <Code2 className="text-accent" />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold leading-tight transition-colors mb-2">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-accent/10 text-foreground border border-accent/20 inline-flex items-center rounded-sm px-2.5 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>
    </a>
  );
}
