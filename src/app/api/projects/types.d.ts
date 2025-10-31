export interface NotionPage {
  id: string;
  properties: Record<string, NotionProperty>;
}

export interface NotionProperty {
  id: string;
  type: string;
  title?: NotionRichText[];
  rich_text?: NotionRichText[];
  status?: {
    id?: string;
    name: string;
    color?: string;
  };
  files?: NotionFile[];
}

export interface NotionRichText {
  plain_text: string;
}

export interface NotionFile {
  name: string;
  file?: {
    url: string;
    expiry_time?: string;
  };
  external?: {
    url: string;
  };
}
