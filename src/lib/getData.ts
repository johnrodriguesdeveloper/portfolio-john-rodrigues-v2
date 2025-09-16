import { notion } from "./notion";

export async function getData() {
  const response = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID as string,
  });

  return response;
}
