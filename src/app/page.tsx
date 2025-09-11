import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <section className="h-screen 375px:mb-18">
      <div className="container mx-auto p-4 h-screen">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1 mb-6">
              Olá, Sou <br />{" "}
              <span className="text-indigo-500">John Rodrigues</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-primary">
              Me destaco na criação de experiências digitais elegantes e sou
              proficiente em várias linguagens de programação e tecnologias.
            </p>
            <div className="">
              <Button variant="outline" asChild>
                <a href="/johnrodriguesdev.pdf" download>
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-4 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
