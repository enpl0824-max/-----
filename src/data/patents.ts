export interface Patent {
  id: string;
  title: string;
  inventors: string;
  patentNumber: string;
  year: number;
  country: string;
  status: "Registered" | "Pending";
  link?: string;
}

export const patentsData: Patent[] = [
  {
    id: "pat-1",
    title: "[Patent Entry Placeholder] Method for fabricating self-supported porous nanostructured electrode via electrodeposition",
    inventors: "Soo-Kil Kim et al.",
    patentNumber: "KR 10-XXXXXXX",
    year: 2024,
    country: "Korea",
    status: "Registered",
    link: "https://www.kipris.or.kr"
  },
  {
    id: "pat-2",
    title: "[Patent Entry Placeholder] Non-noble transition metal composite catalyst for alkaline water electrolysis and manufacturing method thereof",
    inventors: "Soo-Kil Kim et al.",
    patentNumber: "KR 10-2023-XXXXXXX",
    year: 2023,
    country: "Korea",
    status: "Pending",
    link: "https://www.kipris.or.kr"
  }
];
