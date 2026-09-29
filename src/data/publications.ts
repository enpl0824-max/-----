export interface Publication {
  id: string;
  year: number;
  title: string;
  authors: string;
  journal: string;
  volume?: string;
  pages?: string;
  doi?: string;
  link?: string;
  selected?: boolean;
}

// Papers data sorted automatically by year descending in pages
export const publicationsData: Publication[] = [
  {
    id: "pub-2024-1",
    year: 2024,
    title: "Promoting Hydrogen Evolution Reaction in Acidic and Neutral Conditions on Co-Based Ternary Electrocatalyst",
    authors: "ENPL Researchers, Soo-Kil Kim*",
    journal: "ACS Applied Energy Materials",
    volume: "7",
    doi: "10.1021/acsaem.sample",
    link: "https://doi.org",
    selected: true
  },
  {
    id: "pub-2023-1",
    year: 2023,
    title: "Tailoring Nanostructured Transition Metal Catalysts via Electrodeposition for Anion Exchange Membrane Water Electrolysis",
    authors: "ENPL Researchers, Soo-Kil Kim*",
    journal: "Journal of Materials Chemistry A",
    volume: "11",
    doi: "10.1039/sample",
    link: "https://doi.org",
    selected: true
  },
  {
    id: "pub-2023-2",
    year: 2023,
    title: "High-Performance Porous Transport Layer Interfacial Engineering for Proton Exchange Membrane Water Electrolysis",
    authors: "ENPL Researchers, Soo-Kil Kim*",
    journal: "Applied Surface Science",
    volume: "610",
    doi: "10.1016/sample",
    link: "https://doi.org",
    selected: true
  },
  {
    id: "pub-2022-1",
    year: 2022,
    title: "Self-Supported 3D Multi-Component Electrodes Prepared by Dynamic Hydrogen Bubble Template Electrodeposition",
    authors: "ENPL Researchers, Soo-Kil Kim*",
    journal: "Electrochimica Acta",
    volume: "425",
    doi: "10.1016/sample",
    link: "https://doi.org",
    selected: true
  },
  {
    id: "pub-2021-1",
    year: 2021,
    title: "Electrochemical Synthesis and Characterization of Nanostructured Alloys for Water Splitting",
    authors: "ENPL Researchers, Soo-Kil Kim*",
    journal: "Journal of Power Sources",
    volume: "490",
    doi: "10.1016/sample",
    link: "https://doi.org",
    selected: false
  }
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
