export interface Alumni {
  id: string;
  name: string;
  nameKo?: string;
  degree: "Ph.D." | "M.S." | "B.S.";
  currentAffiliation: string;
  researchArea: string;
}

export const alumniData: Alumni[] = [
  {
    id: "alumni-1",
    name: "[Alumni Name Placeholder]",
    nameKo: "졸업생",
    degree: "Ph.D.",
    currentAffiliation: "National Research Institute",
    researchArea: "Electrocatalysts for Water Splitting"
  },
  {
    id: "alumni-2",
    name: "[Alumni Name Placeholder]",
    nameKo: "졸업생",
    degree: "M.S.",
    currentAffiliation: "Clean Energy Industry",
    researchArea: "Electrodeposition of Functional Nanofilms"
  },
  {
    id: "alumni-3",
    name: "[Alumni Name Placeholder]",
    nameKo: "졸업생",
    degree: "M.S.",
    currentAffiliation: "Battery / Energy Materials Corporation",
    researchArea: "Porous Metallic Electrodes"
  }
];
