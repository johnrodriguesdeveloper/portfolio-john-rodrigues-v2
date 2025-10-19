export interface NotionDataSource {
  id: string;
  name: string;
}

export interface NotionDatabase {
  id: string;
  title: string;
  data_sources?: NotionDataSource[];
}

export interface NotionPage {
  id: string;
  title: string;
  description?: string;
  technologies?: string[];
  categories?: string[];
  href?: string;
}
