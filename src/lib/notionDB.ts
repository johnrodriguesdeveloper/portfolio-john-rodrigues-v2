import { notion } from "./notion";

export interface NotionRichText {
  plain_text: string;
}

export interface NotionProperty {
  id: string;
  type: string;
  title?: NotionRichText[];
  rich_text?: NotionRichText[];
  status?: { name: string };
}

export interface NotionPage {
  id: string;
  properties: Record<string, NotionProperty>;
}

interface NotionResponse {
  results: NotionPage[];
}

export async function getData(): Promise<NotionPage[]> {
  const db = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID as string,
  });

  const dbWithSources = db as { data_sources?: { id: string }[] };

  const dataSourceId = dbWithSources.data_sources?.[0]?.id;

  if (!dataSourceId) {
    throw new Error("Data source ID não encontrado no banco do Notion.");
  }

  const response = (await notion.request({
    method: "post",
    path: `data_sources/${dataSourceId}/query`,
  })) as NotionResponse;

  return response.results;
}
