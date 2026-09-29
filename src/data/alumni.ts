export interface Alumni {
  id: string;
  name: string;
  nameKo?: string;
  degree: "Ph.D." | "M.S." | "B.S.";
  graduationYear: number;
  currentAffiliation: string;
  researchArea: string;
}

export const alumniData: Alumni[] = [
  {
    id: "alumni-1",
    name: "[Alumni Name Placeholder]",
    nameKo: "졸업생",
    degree: "Ph.D.",
    graduationYear: 2023,
    currentAffiliation: "National Research Institute",
    researchArea: "Electrocatalysts for Water Splitting"
  },
  {
    id: "alumni-2",
    name: "[Alumni Name Placeholder]",
    nameKo: "졸업생",
    degree: "M.S.",
    graduationYear: 2022,
    currentAffiliation: "Clean Energy Industry",
    researchArea: "Electrodeposition of Functional Nanofilms"
  },
  {
    id: "alumni-3",
    name: "[Alumni Name Placeholder]",
    nameKo: "졸업생",
    degree: "M.S.",
    graduationYear: 2021,
    currentAffiliation: "Battery / Energy Materials Corporation",
    researchArea: "Porous Metallic Electrodes"
  }
];
