import { NextResponse } from "next/server";
import type { Project } from "@/app/work/types";
import { getData } from "@/lib/notionDB";

export async function GET() {
  const data = await getData();

  const projects: Project[] = data.results.map((page: any) => {
    const props = page.properties;

    const getRichText = (field: any) =>
      field?.rich_text?.map((t: any) => t.plain_text).join(" ") || "";

    const getTitle = (field: any) =>
      field?.title?.map((t: any) => t.plain_text).join(" ") || "";

    return {
      id: page.id,
      title: getTitle(props.title),
      description: getRichText(props.description),
      technologies: getRichText(props.technologies)
        .split(",")
        .map((t: string) => t.trim())
        .filter(Boolean),
      categories: getRichText(props.categories)
        .split(",")
        .map((c: string) => c.trim().toLowerCase())
        .filter(Boolean),
      href: getRichText(props.href),
      status: props.Status?.status?.name || "Desconhecido",
    };
  });

  return NextResponse.json(projects);
}
