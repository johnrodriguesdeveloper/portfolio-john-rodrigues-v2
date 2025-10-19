import { notion } from "./notion";

export async function getData() {
  const db = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID as string,
  });

  const dataSourceId = (db as any).data_sources?.[0]?.id;

  if (!dataSourceId) {
    throw new Error("Data source ID não encontrado no banco do Notion.");
  }

  const response = await notion.request({
    method: "post",
    path: `data_sources/${dataSourceId}/query`,
  });

  return response;
}
