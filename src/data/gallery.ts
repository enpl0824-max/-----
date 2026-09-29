export interface GalleryItem {
  id: string;
  title: string;
  category: "CONFERENCES" | "LAB LIFE" | "AWARDS" | "GRADUATION";
  date: string;
  description: string;
  image?: string;
  placeholderLabel?: string;
}

export const galleryCategories = ["ALL", "CONFERENCES", "LAB LIFE", "AWARDS", "GRADUATION"] as const;

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "International Electrochemical Society Presentation",
    category: "CONFERENCES",
    date: "2024",
    description: "Oral presentation on recent advances in low-Ir PEM water electrolysis electrocatalysts.",
    placeholderLabel: "Conference Presentation"
  },
  {
    id: "gal-2",
    title: "Annual Lab Workshop & Dinner",
    category: "LAB LIFE",
    date: "2024",
    description: "ENPL group members discussing semester research outcomes and celebrating milestones.",
    placeholderLabel: "Lab Workshop"
  },
  {
    id: "gal-3",
    title: "KECS Conference Academic Award",
    category: "AWARDS",
    date: "2023",
    description: "Recognition for outstanding graduate research poster presentation.",
    placeholderLabel: "Academic Award"
  },
  {
    id: "gal-4",
    title: "M.S. & Ph.D. Commencement Ceremony",
    category: "GRADUATION",
    date: "2023",
    description: "Celebrating the graduation of lab researchers moving on to institute and industry careers.",
    placeholderLabel: "Graduation Celebration"
  },
  {
    id: "gal-5",
    title: "Electrochemical Workstation & Test Station Setup",
    category: "LAB LIFE",
    date: "2023",
    description: "Advanced PEMWE / AEMWE test station operating in CAU Building 202.",
    placeholderLabel: "Lab Facilities"
  },
  {
    id: "gal-6",
    title: "Clean Energy Materials Symposium",
    category: "CONFERENCES",
    date: "2022",
    description: "Invited lecture on 3D structured electrodeposited electrodes.",
    placeholderLabel: "Symposium"
  }
];
