export interface ProfessorProfile {
  name: string;
  nameKo: string;
  position: string;
  positionKo: string;
  photo?: string;
  department: string;
  departmentKo: string;
  university: string;
  universityKo: string;
  email: string;
  phone: string;
  office: string;
  officeKo: string;
  researchInterests: string[];
  education: {
    degree: string;
    field: string;
    institution: string;
    year?: string;
  }[];
  experience: {
    role: string;
    institution: string;
    period: string;
  }[];
  academicActivities?: string[];
}

export const professorData: ProfessorProfile = {
  name: "Soo-Kil Kim",
  nameKo: "김수길",
  position: "Professor",
  positionKo: "교수",
  photo: "", // 사진 추가 시: "/images/people/professor.jpg" (public/images/people/에 파일 저장)
  department: "School of Integrative Engineering",
  departmentKo: "융합공학부",
  university: "Chung-Ang University",
  universityKo: "중앙대학교",
  email: "sookilkim@cau.ac.kr",
  phone: "02-820-5770",
  office: "Building 310 (100th Anniversary Hall), Room 833",
  officeKo: "310관(100주년기념관 및 경영경제관) 833호",
  researchInterests: [
    "PEM & AEM Water Electrolysis (HER / OER)",
    "Electrodeposition of 3D Nanostructured Electrodes",
    "Non-Precious Transition Metal Electrocatalysts",
    "Membrane Electrode Assembly (MEA) & Interfacial Engineering"
  ],
  education: [
    {
      degree: "Ph.D.",
      field: "Materials Science / Chemical Engineering",
      institution: "Official verification required [Placeholder]",
      year: ""
    },
    {
      degree: "M.S.",
      field: "Materials Science / Chemical Engineering",
      institution: "Official verification required [Placeholder]",
      year: ""
    },
    {
      degree: "B.S.",
      field: "Materials Science / Chemical Engineering",
      institution: "Official verification required [Placeholder]",
      year: ""
    }
  ],
  experience: [
    {
      role: "Professor",
      institution: "School of Integrative Engineering, Chung-Ang University",
      period: "Present"
    },
    {
      role: "Editor",
      institution: "Korean Chemical Engineering Research",
      period: "Current"
    },
    {
      role: "Principal Investigator",
      institution: "Energy Nano-material Process Laboratory (ENPL)",
      period: "Present"
    }
  ],
  academicActivities: [
    "Korean Institute of Chemical Engineers (KIChE) Member & Journal Editor",
    "The Korean Electrochemical Society (KECS) Active Member",
    "Electrochemical Society (ECS) Active Member"
  ]
};
