import { ThemeToggle } from "./theme-toggle";
import { Instagram, Linkedin, Github } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="container relative z-[60] flex items-center justify-between p-4 w-full max-w-7xl mx-auto">
        <h1 className="text-xl font-mono">
          John<span>.</span>
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/johnrodrigues._/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/johnrodrigues-/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/johnrodriguesdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
