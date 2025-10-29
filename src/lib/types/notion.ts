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

export interface NotionResponse {
  results: NotionPage[];
}
