export interface Student {
  id: string;
  name: string;
  nameKo?: string;
  degreeCategory: "phd" | "ms" | "undergraduate";
  position: string;
  researchInterest: string;
  email: string;
  photo?: string;
}

// Update this file with current lab members.
// Categories with 0 members will be automatically hidden.
export const studentsData: Student[] = [
   {
    id: "phd-1",
    name: "[Charlie Moon]",
    degreeCategory: "phd",
    position: "Integrated Ph.D. course",
    researchInterest: "TBD",
    email: "charliehmoon@cau.ac.kr",
    photo: "/-----/images/2.%20문창환%20박사%20프로필%20사진.jpg"
  },
  {
    id: "phd-2",
    name: "[Suyeon Lee]",
    degreeCategory: "phd",
    position: "Ph.D. Candidate (2025.03~)",
    researchInterest: "TBD",
    email: "sylee6276@cau.ac.kr",
    photo: "/-----/images/2.%20이수연%20박사%20프로필%20사진.jpg"
  },
  {
    id: "ms-1",
    name: "[Tae-Won Kim]",
    degreeCategory: "ms",
    position: "M.S. Candidate (2025.03~)",
    researchInterest: "TBD",
    email: "taewonkim1017@naver.com",
    photo: ""
  },
  {
    id: "ms-2",
    name: "[Seon-Yeong Park]",
    degreeCategory: "ms",
    position: "M.S. Candidate (2025.09~)",
    researchInterest: "TBD",
    email: "iris3481@naver.com",
    photo: ""
  },
 {
    id: "ms-3",
    name: "[Dan-Bi Kang]",
    degreeCategory: "ms",
    position: "M.S. Candidate (2026.03~)",
    researchInterest: "TBD",
    email: "eksql6545@naver.com",
    photo: ""
  },
  {
    id: "ms-4",
    name: "[Ga-Yeong Nam]",
    degreeCategory: "ms",
    position: "M.S. Candidate (2026.03~)",
    researchInterest: "TBD",
    email: "ngy6412@naver.com",
    photo: "/-----/images/2.%20남가영%20석사%20프로필%20사진.png"
  },
  {
    id: "ms-5",
    name: "[Seong-Jae Bang]",
    degreeCategory: "ms",
    position: "M.S. Candidate (2026.03~)",
    researchInterest: "TBD",
    email: "jcynns@naver.com",
    photo: "/-----/images/2.%20방성재%20석사%20프로필%20사진.jpg"
  },
  {
    id: "intern-1",
    name: "[Researcher / Intern Name]",
    nameKo: "학부연구생",
    degreeCategory: "undergraduate",
    position: "Undergraduate Researcher",
    researchInterest: "Electrochemical Characterization & Cell Testing",
    email: "enpl_intern@cau.ac.kr",
    photo: ""
  }
];

export const getStudentsByCategory = () => {
  const phd = studentsData.filter(s => s.degreeCategory === "phd");
  const ms = studentsData.filter(s => s.degreeCategory === "ms");
  const undergraduate = studentsData.filter(s => s.degreeCategory === "undergraduate");
  return { phd, ms, undergraduate };
};
