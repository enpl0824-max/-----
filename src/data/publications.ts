export interface Publication {
  id: string;
  number: number;
  year: number;
  title: string;
  authors: string;
  journal: string;
  volume?: string;
  pages?: string;
  impactFactor?: number;
  doi?: string;
  link?: string;
  selected?: boolean;
}

// Papers data sorted automatically by year descending in pages
export const publicationsData: Publication[] = [
  {
    id: "pub-184",
    number: 184,
    year: 2026,
    title: "High Entropy Materials for Durable Oxygen Evolution in Acidic Water Electrolysis",
    authors: "Hoyoung Kim, Soo-Kil Kim",
    journal: "ChemCatChem",
    volume: "18",
    pages: "e70909",
    impactFactor: 4.1,
    doi: "10.1002/cctc.70909",
    link: "https://doi.org/10.1002/cctc.70909",
    selected: true
  },
  {
    id: "pub-183",
    number: 183,
    year: 2026,
    title: "Recent advances in ion exchange membrane-based electrochemical hydrogenation of liquid organic hydrogen carrier",
    authors: "Seokjin Hong, Gyeong Ho Han, Inho Nam, Don-Hyung Ha, Soo-Kil Kim, Sung Ki Cho, Hyunseo Park, Jong Hyun Jang, Myoung Hwan Oh, Sang Hyun Ahn",
    journal: "Fuel",
    volume: "415",
    pages: "138427",
    impactFactor: 7.8,
    doi: "10.1016/j.fuel.2026.138427",
    link: "https://doi.org/10.1016/j.fuel.2026.138427",
    selected: true
  },
  {
    id: "pub-182",
    number: 182,
    year: 2026,
    title: "High-performance, acid-durable nonprecious ternary alloy cathode via Zn dealloying for proton exchange membrane water electrolysis",
    authors: "Chan Hee Lee, Kyeong-Rim Yeo, Soo-Kil Kim",
    journal: "Chemical Communications",
    volume: "62",
    pages: "8723-8727",
    impactFactor: 4.3,
    doi: "10.1039/d6cc00986g",
    link: "https://doi.org/10.1039/d6cc00986g",
    selected: true
  },
  {
    id: "pub-181",
    number: 181,
    year: 2026,
    title: "Surface-engineered Ni–Pt alloys as robust and cost-effective electrocatalysts for high-performance proton exchange membrane water electrolysis",
    authors: "Kyeong-Rim Yeo, Daehyun Kim, Hoyoung Kim, Sung Jong Yoo, Jong Hyun Jang, Haesun Park, Soo-Kil Kim",
    journal: "Journal of Materials Chemistry A",
    volume: "14",
    pages: "24506-24516",
    impactFactor: 9.2,
    doi: "10.1039/d6ta01806h",
    link: "https://doi.org/10.1039/d6ta01806h",
    selected: true
  },
  {
    id: "pub-180",
    number: 180,
    year: 2026,
    title: "Tailored Electrodeposition for Scalable Fabrication of Uniform and High-Efficiency Large Area Electrodes for PEM Water Electrolysis",
    authors: "Joon-Young Park, Kyeong-Rim Yeo, Soo-Kil Kim",
    journal: "International Journal of Energy Research",
    year: 2026,
    pages: "5468552",
    impactFactor: 4.2,
    doi: "10.1155/er/5468552",
    link: "https://doi.org/10.1155/er/5468552",
    selected: true
  },
];

export const getSelectedPublications = (): Publication[] => {
  return publicationsData.filter(p => p.selected).sort((a, b) => b.year - a.year);
};

export const getAllPublicationsByYear = (): Record<number, Publication[]> => {
  const sorted = [...publicationsData].sort((a, b) => b.year - a.year);
  return sorted.reduce((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, Publication[]>);
};
