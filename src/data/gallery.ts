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
      "/-----/images/260223_edited.jpg"
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
      "/-----/images/26.02졸업.jpg",
      "/-----/images/졸업김태영.jpg",
      "/-----/images/졸업김태영2.jpg",
      "/-----/images/졸업박준영.jpg",
      "/-----/images/졸업박준영2.jpg"
    ]
  },

{
    id: "gal-7",
    title: "ICAE 2025",
    category: "CONFERENCE",
    date: "2025.11.26-28",
    description: "Attending the ICAE 2025 conference at jeju ICC",
    images: [
      "/-----/images/20251126ICAE2025%20김태영포스터.jpg",
      "/-----/images/20251126ICAE2025%20박준영포스터.jpg",
      "/-----/images/20251126ICAE2025%20이수연포스터.jpg",
      "/-----/images/20251126ICAE2025%20김태원포스터.jpg",
      "/-----/images/20251126ICAE2025%20박선영포스터.jpg"
    ]
  },

  {
    id: "gal-8",
    title: "Lab Dinner",
    category: "LAB LIFE",
    date: "2025.11.17",
    description: "Lab dinner after Joon-Young & Taeyoung's Master's defense",
    images: [
      "/-----/images/251117labdinner_edited.jpg"
    ]
  },

  {
    id: "gal-9",
    title: "HEREM 2025",
    category: "CONFERENCE",
    date: "2025.10.08-12",
    description: "Attending the HEREM 2025 conference in singapore",
    images: [
      "/-----/images/2510HEREMJY.png",
      "/-----/images/2025.10.HEREM,%20Suyeon%20Lee%20(Poster%20presentation).jpg",
      "/-----/images/2025.10.HEREM,%20TaeyoungKim%20(Poster%20presentation).jpg",
      "/-----/images/2025.10.HEREM.jpg"
    ]
  },

 {
    id: "gal",
    title: "2025 ENPL Summer MT",
    category: "LAB LIFE",
    date: "2025.07.25-26",
    description: "2025 ENPL Summer MT in Yangpyeong",
    images: [
      "/-----/images/2026.07.25-26.%202025%20ENPL%20Summer%20MT%20(3).jpg",
      "/-----/images/2026.07.25-26.%202025%20ENPL%20Summer%20MT.jpg",
      "/-----/images/2026.07.25-26.%202025%20ENPL%20Summer%20MT%20(2).jpg",
      "/-----/images/2026.07.25-26.%202025%20ENPL%20Summer%20MT%20(4).jpg",
      "/-----/images/2026.07.25-26.%202025%20ENPL%20Summer%20MT%20(미기재%20사진).jpg",
    ]
  },

   {
    id: "gal",
    title: "Lab Dinner",
    category: "LAB LIFE",
    date: "2025.07.21",
    description: "Congratulations on your appointment as a professor, Hoyoung!",
    images: [
      "/-----/images/250721_edited.jpg"
    ]
  },

  {
    id: "gal",
    title: "Lab Dinner",
    category: "LAB LIFE",
    date: "2025.06.02",
    description: "Lab dinner",
    images: [
      "/-----/images/2025.06.02. LAB dinner_edited.png"
    ]
  },

   {
    id: "gal",
    title: "Graduate Student's Festival",
    category: "LAB LIFE",
    date: "2025.05.27",
    description: "Graduate student's festival_cheering for DOOSAN vs. KT",
    images: [
      "/-----/images/2025.05.27.%20Graduate%20Students'%20Festival.jpg"
    ]
  },

   {
    id: "gal",
    title: "Teacher's day poster",
    category: "LAB LIFE",
    date: "2025.05.15",
    description: "Celebrating Teacher's day together with a poster",
    images: [
      "/-----/images/public/images/2025.05.15.%202025%20Teacher's%20day%20poster_edited_edited_edited.png"
      "/-----/images/2025.05.15.%202025%20Teacher's%20day%20poster_edited.png"
    ]
  },
];
