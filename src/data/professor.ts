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
  photo: "/-----/images/0.%20교수님 사진.png", // 사진 추가 시: "/images/people/professor.jpg" (public/images/people/에 파일 저장)
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
      field: "School of Chemical Engineering",
      institution: "Seoul National University",
      year: "2004"
    },
    {
      degree: "M.S.",
      field: "School of Chemical Engineering",
      institution: "Seoul National University",
      year: "2001"
    },
    {
      degree: "B.S.",
      field: "School of Chemical Engineering",
      institution: "Seoul National University",
      year: "1999"
    }
  ],
  experience: [
    {
      role: "Post-Doc",
      institution: "SNU ERC",
      period: "2004–2005"
    },
    {
      role: "Post-Doc",
      institution: "National Institute of Standards and Technology (NIST), USA",
      period: "2005–2006"
    },
    {
      role: "Senior Research Scientist",
      institution: "Korea Institute of Science and Technology (KIST)",
      period: "2006–2011"
    },
    {
      role: "Editor",
      institution: "J. Kor. Electrochem. Soc., KECS",
      period: "2008–2009"
    },
    {
      role: "Editor",
      institution: "E-Chem Magazine, KECS",
      period: "2010–2011"
    },
    {
      role: "General Secretary, Fuel Cell Division",
      institution: "KECS",
      period: "2010–2011"
    },
    {
      role: "Planning Secretary, Materials Division",
      institution: "KIChE",
      period: "2010–2011"
    },
    {
      role: "Secretary/Treasurer, Korea Section",
      institution: "The Electrochemical Society (ECS), USA",
      period: "2012–2017"
    },
    {
      role: "Public Relations Director",
      institution: "KIChE",
      period: "2013, 2022"
    },
    {
      role: "Chairman of Human Resources Development",
      institution: "KECS",
      period: "2014–2015"
    },
    {
      role: "Business Director",
      institution: "KIChE",
      period: "2014"
    },
    {
      role: "Academic Director",
      institution: "KIChE",
      period: "2015"
    },
    {
      role: "Editor",
      institution: "J. Kor. Chem. Engineering, KIChE",
      period: "2015–Present"
    },
    {
      role: "Business Director",
      institution: "KISE",
      period: "2016–2017"
    },
    {
      role: "RB, National Strategic R&D Programs",
      institution: "National Research Foundation of Korea (NRF)",
      period: "2020–2023"
    },
    {
      role: "Planning Director",
      institution: "KIChE",
      period: "2021"
    }
  ],
};
