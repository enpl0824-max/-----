export interface GalleryItem {
  id: string;
  title: string;
  category: "CONFERENCES" | "LAB LIFE" | "AWARDS" | "GRADUATION";
  date: string;
  description: string;
  images: string[];
}

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Dinner",
    category: "LAB LIFE",
    date: "2026.08.14",
    description: "Dinner w/ prof. Haesun Park's lab members",
    images: [
      "/-----/images/260814%20박해선교수님%20연구실%20저녁.jpg",
    ]
  },

  {
    id: "gal-2",
    title: "2026 ENPL Summer MT",
    category: "LAB LIFE",
    date: "2026.07.10-11",
    description: "2026 ENPL Summer MT in Yongin",
    images: [
      "/-----/images/2607%20MT%203.jpg",
      "/-----/images/2607%20MT%202.jpg",
      "/-----/images/2607%20MT%201.jpg"
    ]
  },

  {
    id: "gal-3",
    title: "Lab Dinner",
    category: "LAB LIFE",
    date: "2026.02.23",
    description: "Lab dinner",
    images: [
      "/-----/images/260223.jpg"
    ]
  },

  {
    id: "gal-4",
    title: "ECS 249th Meeting",
    category: "CONFERENCE",
    date: "2026.05.24-28",
    description: "Attending ECS conference ",
    images: [
      "/-----/images/260525%20ECS.jpg",
      "/-----/images/260525%20ECS%20태원.jpg",
      "/-----/images/260525%20ECS%20태원포스터.jpg",
      "/-----/images/260525%20ECS%20수연포스터.jpg"
    ]
  },

  {
    id: "gal-5",
    title: "Teacher's day",
    category: "LAB LIFE",
    date: "2026.05.18",
    description: "Celebrating Teacher's day together with a calendar and a folding fan",
    images: [
      "/-----/images/260518%20스승의날.jpg"
    ]
  },

  {
    id: "gal-6",
    title: "Joon-Young & Taeyoung graduation",
    category: "GRADUATION",
    date: "2026.02.13",
    description: "Congratulations to Joon-Young and Taeyoung on their Master's graduation!",
    images: [
      "/-----/images/졸업김태영.jpg",
      "/-----/images/졸업김태영2.jpg",
      "/-----/images/졸업박준영.jpg",
      "/-----/images/졸업박준영2.jpg"
    ]
  }
];
