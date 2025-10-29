import { NextResponse } from "next/server";
import type { Project } from "@/app/work/types";
import { getData } from "@/lib/notionDB";
import type { NotionPage, NotionProperty } from "./types";

export async function GET() {
  const data: NotionPage[] = await getData();
  const projects: Project[] = data.map((page) => {
    const props = page.properties;

    const getRichText = (field?: NotionProperty) =>
      field?.rich_text?.map((t) => t.plain_text).join(" ") || "";

    const getTitle = (field?: NotionProperty) =>
      field?.title?.map((t) => t.plain_text).join(" ") || "";
    const categories = getRichText(props.categories)
      .split(",")
      .map((c) => c.trim().toLowerCase())
      .filter(Boolean);

    return {
      id: page.id,
      title: getTitle(props.title),
      description: getRichText(props.description),
      technologies: getRichText(props.technologies)
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      categories,
      href: getRichText(props.href),
      status: props.Status?.status?.name || "Desconhecido",
    };
  });

  return NextResponse.json(projects);
}
