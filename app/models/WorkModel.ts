export interface WorkItem {
  slug: string;
  title: string;
  summary: string;
}

export interface WorkHeader {
  project: {
    slug?: string;
    title: string;
    summary: string;
    repository?: string;
    link?: string;
  };
}
