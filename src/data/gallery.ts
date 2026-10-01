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
      "/-----/public/images/260223",
    ]
  },

  {
    id: "gal-4",
    title: "M.S. & Ph.D. Commencement Ceremony",
    category: "GRADUATION",
    date: "2023",
    description: "Celebrating the graduation of lab researchers moving on to institute and industry careers.",
    images: [
      "/-----/images/gallery/graduation-01.jpg",
      "/-----/images/gallery/graduation-02.jpg",
      "/-----/images/gallery/graduation-03.jpg"
    ]
  },

  {
    id: "gal-5",
    title: "Electrochemical Workstation & Test Station Setup",
    category: "LAB LIFE",
    date: "2023",
    description: "Advanced PEMWE / AEMWE test station operating in CAU Building 202.",
    images: [
      "/-----/images/gallery/lab-facility-01.jpg",
      "/-----/images/gallery/lab-facility-02.jpg"
    ]
  },

  {
    id: "gal-6",
    title: "Clean Energy Materials Symposium",
    category: "CONFERENCES",
    date: "2022",
    description: "Invited lecture on 3D structured electrodeposited electrodes.",
    images: [
      "/-----/images/gallery/symposium-01.jpg"
    ]
  }
];
