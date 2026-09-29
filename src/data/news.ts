export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: "PUBLICATION" | "AWARD" | "CONFERENCE" | "NOTICE";
  description: string;
}

export const newsData: NewsItem[] = [
  {
    id: "news-1",
    date: "2024.08",
    title: "Paper published in ACS Applied Energy Materials",
    category: "PUBLICATION",
    description: "New research on promoting hydrogen evolution reaction in acidic/neutral conditions has been accepted."
  },
  {
    id: "news-2",
    date: "2024.03",
    title: "Welcome New Graduate & Undergraduate Researchers",
    category: "NOTICE",
    description: "New researchers have joined the Energy Nano-material Process Laboratory for the spring semester."
  },
  {
    id: "news-3",
    date: "2023.11",
    title: "Presentation at The Korean Electrochemical Society",
    category: "CONFERENCE",
    description: "Lab members presented multiple oral and poster papers on water electrolysis electrocatalysts."
  }
];
