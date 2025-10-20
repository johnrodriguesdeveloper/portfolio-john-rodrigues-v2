import { NextResponse } from "next/server";
import type { Project } from "@/app/work/types";
import { getData } from "@/lib/notionDB";

interface NotionRichText {
  plain_text: string;
}

interface NotionProperty {
  id: string;
  type: string;
  title?: NotionRichText[];
  rich_text?: NotionRichText[];
  status?: { name: string };
}

interface NotionPage {
  id: string;
  properties: Record<string, NotionProperty>;
}

interface NotionResponse {
  results: NotionPage[];
}
const allowedCategories = ["html", "css", "node", "react", "next"] as const;

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
      .filter((c): c is (typeof allowedCategories)[number] =>
        allowedCategories.includes(c as any)
      );

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
