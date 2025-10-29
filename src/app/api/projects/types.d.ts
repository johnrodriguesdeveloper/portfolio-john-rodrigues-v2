export interface NotionPage {
  id: string;
  properties: Record<string, NotionProperty>;
}

export interface NotionProperty {
  id: string;
  type: string;
  title?: NotionRichText[];
  rich_text?: NotionRichText[];
  status?: { name: string };
}

interface NotionRichText {
  plain_text: string;
}
