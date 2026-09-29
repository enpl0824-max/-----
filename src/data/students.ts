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
    name: "[Ph.D. Student Name]",
    nameKo: "박사과정 학생",
    degreeCategory: "phd",
    position: "Ph.D. Candidate",
    researchInterest: "PEM Water Electrolysis, Low-Ir Electrocatalysts",
    email: "enpl_student@cau.ac.kr",
    photo: ""
  },
  {
    id: "ms-1",
    name: "[M.S. Student Name]",
    nameKo: "석사과정 학생",
    degreeCategory: "ms",
    position: "M.S. Candidate",
    researchInterest: "AEM Water Electrolysis, Non-precious Catalysts",
    email: "enpl_student@cau.ac.kr",
    photo: ""
  },
  {
    id: "ms-2",
    name: "[M.S. Student Name]",
    nameKo: "석사과정 학생",
    degreeCategory: "ms",
    position: "M.S. Candidate",
    researchInterest: "Electrodeposition, 3D Porous Electrodes",
    email: "enpl_student@cau.ac.kr",
    photo: ""
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
