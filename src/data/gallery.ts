export interface GalleryItem {
  id: string;
  title: string;
  category: "CONFERENCES" | "LAB LIFE" | "AWARDS" | "GRADUATION" | "OTHERS";
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
    date: "2026.06.23",
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
    description: "Attending ECS conference in US: Suyeon (poster), Tae-Won (poster)",
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
    id: "gal",
    title: "KES 2026",
    category: "CONFERENCE",
    date: "2026.04.01-03",
    description: "Attending 2025 Spring meeting & academic of Korean Electrochemical Society in Busan: Seon-Yeong (poster), Dan-Bi (poster)",
    images: [
      "/-----/images/2026.04.01-03.%202026%20Spring%20Meeting%20&%20Exhibition%20of%20the%20Korean%20Electrochemical%20Society,%20Busan%20Park%20Seon%20Yeong%20(Poster%20presentatio.jpg",
      "/-----/images/2026.04.01-03.%202026%20Spring%20Meeting%20&%20Exhibition%20of%20the%20Korean%20Electrochemical%20Society,%20Busan%20Danbi%20Kang%20(Poster%20presentation).jpg"
    ]
  },

  {
    id: "gal-6",
    title: "Joon-Young & Taeyoung's graduation",
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
    description: "Attending the HEREM 2025 conference in singapore: Suyeon (poster), Joon-Young (poster), Taeyoung (poster)",
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
      "/-----/images/2025.05.15.%202025%20Teacher's%20day%20poster_edited_edited_edited.png",
      "/-----/images/2025.05.15.%202025%20Teacher's%20day%20poster_edited.png"
    ]
  },

   {
    id: "gal",
    title: "Lab Dinner",
    category: "LAB LIFE",
    date: "2025.04.25",
    description: "Lab dinner",
    images: [
      "/-----/images/2025.04.25.%20LAB%20dinner.jpg"
    ]
  },

  {
    id: "gal",
    title: "KES 2025",
    category: "CONFERENCE",
    date: "2025.04.04",
    description: "Attending 2025 Spring meeting & academic of Korean Electrochemical Society in jeju: Joon-Young (poster), Taeyoung (poster)",
    images: [
      "/-----/images/2025.04.04.%20​2025%20Spring%20Meeting%20&%20Academic%20of%20the%20Korean%20Electrochemical%20Society,%20Jeju,%20Joon%20Young%20Park%20(Poster%20presentation).jpg",
      "/-----/images/2025.04.04.%20​2025%20Spring%20Meeting%20&%20Academic%20of%20the%20Korean%20Electrochemical%20Society,%20Jeju,%20Tae%20Young%20Kim%20(Poster%20presentation).jpg"
    ]
  },

  {
    id: "gal",
    title: "Kyeong-Rim & Chan-Hee's graduation",
    category: "GRADUATION",
    date: "2025.02.21",
    description: "Congratulations to Kyeong-Rim on her Ph.D. graduation and Chanhee on his Master’s graduation!",
    images: [
      "/-----/images/2025.02.21.%20Kyeong-Rim%20&%20Chan-Hee's%20graduation%20(Ph.D.%20&%20Master%20course).jpg",
      "/-----/images/2025.02.21.%20Kyeong-Rim%20&%20Chan-Hee's%20graduation%20(Ph.D.%20&%20Master%20course)%20(3).jpg",
      "/-----/images/2025.02.21.%20Kyeong-Rim%20&%20Chan-Hee's%20graduation%20(Ph.D.%20&%20Master%20course)%20%20(4).jpg",
      "/-----/images/2025.02.21.%20Kyeong-Rim%20&%20Chan-Hee's%20graduation%20(Ph.D.%20&%20Master%20course)%20%20(2).jpg",
      "/-----/images/2025.02.21.%20Congraturations!%20Kyeong-Rim.jpg",
      "/-----/images/2025.02.21.%20Thank%20you%20for%20your%20hard%20work!%20Kyeong-Rim _edited.jpg"
    ]
  },

   {
    id: "gal",
    title: "2024 ENPL Year-end party",
    category: "LAB LIFE",
    date: "2024.12.20",
    description: "2024 ENPL Year-end party. Thank you to our alumni for joining us!",
    images: [
      "/-----/images/2024.12.20.%202024%20ENPL%20Year-end%20party.PNG"
    ]
  },

   {
    id: "gal",
    title: "BRL Workshop",
    category: "OTHERS",
    date: "2024.10.18-19",
    description: "BRL (Basic Research Lab) workshop in Busan",
    images: [
      "/-----/images/2024.10.18-19.%20BRL(Basic%20Research%20Lab)%20workshop,%20Busan.PNG",
      "/-----/images/2024.10.18-19.%20BRL(Basic%20Research%20Lab)%20workshop,%20Busan%20(2).PNG"
    ]
  },

   {
    id: "gal",
    title: "KIChE Fall 2024",
    category: "CONFERENCE",
    date: "2024.10.17",
    description: "Attending KIChE fall meeting and international symposium in Busan",
    images: [
      "/-----/images/2024.10.17.%202024%20Fall%20KICHE,%20Busan.PNG",
      "/-----/images/2024.10.17.%202024%20Fall%20KICHE,%20Busan%20Taeyoung%20Kim%20(Poster%20presentation).PNG",
      "/-----/images/2024.10.17. 2024%20Fall%20KICHE,%20Busan%20Joon%20Young%20Park%20(Poster%20presentation).PNG",
      "/-----/images/2024.10.17. 2024%20Fall%20KICHE,%20Busan%20Chan%20Hee%20Lee%20(Poster%20presentation).PNG"
    ]
  },

   {
    id: "gal",
    title: "PRiME 2024",
    category: "CONFERENCE",
    date: "2024.10.06-11",
    description: "Attending PRiME 2024 (Pacific Rim Meeting on Electrochemical and Solid-State Science) in Hawaii: Kyeong-Rim (poster)",
    images: [
      "/-----/images/2024.10.6-11.%20PRiME%202024(Pacific%20Rim%20Meeting%20on%20Electrochemical%20and%20Solid-State%20Science),%20Hawaii,%20Keyong%20Rim%20Yeo%20(Poster%20present.PNG",
      "/-----/images/2024.10.6-11.%20PRiME%202024(Pacific%20Rim%20Meeting%20on%20Electrochemical%20and%20Solid-State%20Science),%20Hawaii.png"
    ]
  },

  {
    id: "gal",
    title: "MCARE 2024",
    category: "CONFERENCE",
    date: "2024.08.20-23",
    description: "Attending MCARE 2024 conference: Kyeong-Rim (poster)",
    images: [
      "/-----/images/2024.08.20-23.%202024%20MCARE%20conference,%20Kyeong%20Rim%20Yeo%20(Poster%20presentation).PNG"
    ]
  },

  {
    id: "gal",
    title: "2024 ENPL Summer MT",
    category: "LAB LIFE",
    date: "2024.07.12-13",
    description: "2024 ENPL Summer MT",
    images: [
      "/-----/images/2024.07.12-13.%202024%20ENPL%20Summer%20MT%20(2).PNG",
      "/-----/images/2024.07.12-13.%202024%20ENPL%20Summer%20MT.PNG"
    ]
  },

 {
    id: "gal",
    title: "Ph.D. Proposal",
    category: "LAB LIFE",
    date: "2024.06.27",
    description: "Ph.D. proposal",
    images: [
      "/-----/images/2024.06.27.%20Ph.D.%20Proposal%20(Kyeong%20Rim%20Yeo).PNG",
      "/-----/images/2024.06.27.%20Ph.D.%20Proposal%20(Kyeong%20Rim%20Yeo)%20(2).PNG"
    ]
  },

   {
    id: "gal",
    title: "CAU WINNING DAY",
    category: "LAB LIFE",
    date: "2024.05.29",
    description: "CAU WINNING DAY!",
    images: [
      "/-----/images/2024.05.29.%20CAU%20WINNING%20DAY.PNG"
    ]
  },

  {
    id: "gal",
    title: "Teacher's day poster",
    category: "LAB LIFE",
    date: "2024.05.15",
    description: "Celebrating Teacher's day together with a poster",
    images: [
      "/-----/images/2024.05.15.%202024%20Teacher's%20day%20poster.PNG"
    ]
  },
  
  {
    id: "gal",
    title: "Lab Dinner",
    category: "LAB LIFE",
    date: "2024.04.18",
    description: "Lab dinner",
    images: [
      "/-----/images/2024.04.18.%20Lab%20dinner%20(2).PNG",
      "/-----/images/2024.04.18.%20Lab%20dinner.PNG"
    ]
  },

   {
    id: "gal",
    title: "Lab Picnic",
    category: "LAB LIFE",
    date: "2024.04.08",
    description: "Lab picnic in CAU campus (◕ᴗ◕✿)",
    images: [
      "/-----/images/2024.04.08.%20Lab%20picnic%20(2).PNG",
      "/-----/images/2024.04.08.%20Lab%20picnic.PNG"
    ]
  },

    {
    id: "gal",
    title: "KES 2024",
    category: "CONFERENCE",
    date: "2024.04.03-05",
    description: "Attending KES 2024 conference in Busan: Kyeong-Rim (poster), Chan Hee (poster)",
    images: [
      "/-----/images/2024.04.03-05.2024%20Spring%20Meeting%20of%20the%20Korean%20Electrchemical%20Society,%20Busan,%20Kyeong%20Rim%20Yeo%20(Poster%20presentation).PNG",
      "/-----/images/2024.04.03-05.2024%20Spring%20Meeting%20of%20the%20Korean%20Electrchemical%20Society,%20Busan,%20Chan%20Hee%20Lee%20(Poster%20presentation).PNG"
    ]
  },

   {
    id: "gal",
    title: "Hong-Seong's graduation",
    category: "GRADUATION",
    date: "2024.02.23",
    description: "Congratulations to Hong-Seong on his Master's graduation!",
    images: [
      "/-----/images/2024.02.23.%20Hong-Seong's%20graduation(Master%20course)%20(4).jpg",
      "/-----/images/2024.02.23.%20Hong-Seong's%20graduation(Master%20course)%20(3)_edited.jpg",
      "/-----/images/2024.02.23.%20Hong-Seong's%20graduation(Master%20course)%20(2)_edited_edited.png",
      "/-----/images/2024.02.23.%20Hong-Seong's%20graduation(Master%20course)%20_edited.jpg"
    ]
  },

    {
    id: "gal",
    title: "Kyeong-Rim's Appl.Catal, B Paper Accepted!",
    category: "LAB LIFE",
    date: "2024.01.24",
    description: "Congratulations on publishing Kyeong-Rim's Appl. Catal, B paper!",
    images: [
      "/-----/images/2024.01.24.%20Congratulations%20on%20publishing%20Kyeong-Rim's_edited.png"
    ]
  },

  {
    id: "gal",
    title: "Goodbye, Hong-seong!",
    category: "LAB LIFE",
    date: "2024.01.24",
    description: "Goodbye, Hong-Seong!",
    images: [
      "/-----/images/2024.01.17.%20GOODBYE,%20Hong-Seong!.png",
    ]
  },

  {
    id: "gal",
    title: "2023 ENPL Year-End Party",
    category: "LAB LIFE",
    date: "2023.12.15",
    description: "2023 Year-end party! Thank you for our alumnis for joining us!",
    images: [
      "/-----/images/2023.12.15.%202024%20ENPL%20Year-end%20party!.jpg"
    ]
  },

  {
    id: "gal",
    title: "2023 7th ICAE",
    category: "CONFERENCE",
    date: "2023.10.31-11.02",
    description: "Attending 7th ICAE in Jeju: Kyeong-Rim (oral), Hongs-seong (poster)",
    images: [
      "/-----/images/2023.10.31-11.2.%202023%207th%20ICAE%20conference%20in%20Jeju%20(2).jpg",
      "/-----/images/2023.10.31-11.2.%202023%207th%20ICAE%20conference%20in%20Jeju_edited_edited.jpg",
      "/-----/images/2023.10.31-11.2.%202023%207th%20ICAE%20conference,%20Kyeong-Rim%20Yeo%20(Oral%20presentation).jpg",
      "/-----/images/2023.10.31-11.2.%202023%207th%20ICAE%20conference,%20Hong%20Seong%20Park%20(Poster%20presentation).jpg",
    ]
  },

  {
    id: "gal",
    title: "74th Annual Meeting of the International Society of Electrochemistry",
    category: "CONFERENCE",
    date: "2023.09.03-08",
    description: "74th Annual Meeting of the International Society of Electrochemistry, Lyon, France: Kyeong-Rim (poster)",
    images: [
      "/-----/images/2023.09.03-08.%2074th%20Annual%20Meeting%20of%20the%20International%20Society%20of%20Electrochemistry,%20Lyon,%20France%20,%20Kyeong-Rim%20Yeo%20(Poster%20presentation).jpg",
    ]
  },

  {
    id: "gal",
    title: "2023 ENPL Summer MT",
    category: "LAB LIFE",
    date: "2023.07.21-22",
    description: "2023 ENPL Summer MT",
    images: [
      "/-----/images/2023.07.21-22.%202023%20ENPL%20Summer%20MT%20(3).jpg",
      "/-----/images/2023.07.21-22.%202023%20ENPL%20Summer%20MT.jpg",
      "/-----/images/2023.07.21-22.%202023%20ENPL%20Summer%20MT%20(2).jpg"
    ]
  },

   {
    id: "gal",
    title: "HBD Chan Hee!",
    category: "LAB LIFE",
    date: "2023.07.10",
    description: "Happy Birthday Chan Hee!",
    images: [
      "/-----/images/2023.07.10.%20Happy%20Birthday%20Chan Hee!.jpg",
    ]
  },

   {
    id: "gal",
    title: "Graduate School Alumni Association Awards",
    category: "AWARDS",
    date: "2023.05.15",
    description: "Kyeong-Rim received the Graduate School Alumni Association Award!",
    images: [
      "/-----/images/2023.05.15.%20Kyeong-rim%20Yeo%20received%20the%20Graduate%20School%20Alumni%20Association%20Award!_edited.jpg",
    ]
  },

    {
    id: "gal",
    title: "Teacher's day poster",
    category: "LAB LIFE",
    date: "2023.05.15",
    description: "Celebrating Teacher's day together with a poster",
    images: [
      "/-----/images/2023.05.15.%202023%20Teacher's%20day%20poster_edited.png",
    ]
  },

   {
    id: "gal",
    title: "KES 2023",
    category: "CONFERENCE",
    date: "2023.04.06",
    description: "Attending 2023 spring meeting of the Korean Electrochemical Society in Jeju: Kyeong-Rim (poster)",
    images: [
      "/-----/images/2023.04.06.%202023%20Spring%20Meeting%20of%20the%20Korean%20Electrochemical%20Society,%20Jeju,%20Kyeong-Rim%20Yeo%20(Poster%20presentation)edited_edited_edited.jpg",
    ]
  },

 {
    id: "gal",
    title: "Spring picnic",
    category: "LAB LIFE",
    date: "2023.03.29",
    description: "Spring picnic in Yeouido",
    images: [
      "/-----/images/2023.03.29.%20Spring%20picnic,%20Yeouido%20cherry%20blossom%20_edited_edited.jpg",
    ]
  },

   {
    id: "gal",
    title: "Kyung-Ji's graduation",
    category: "GRADUATION",
    date: "2023.02.15",
    description: "Congratulations to Kyung-Ji on his Master's graduation!",
    images: [
     "/-----/images/2023.02.15.KJ_graduation1.png",
     "/-----/images/2023.02.15.KJ_graduation2.jpg",
     "/-----/images/2023.02.15.KJ_graduation3.jpg"
    ]
  },

 {
    id: "gal",
    title: "2022 ENPL Year-end party",
    category: "LAB LIFE",
    date: "2022.12.20",
    description: "2022 ENPL Year-end party. Thank you to our alumni for joining us!",
    images: [
      "/-----/images/2022.12.26.%202022%20ENPL%20Year-end%20party!_edited.jpg"
    ]
  },

  {
    id: "gal",
    title: "MCARE 2022 Conference, Poster Award",
    category: "AWARDS",
    date: "2022.08.26",
    description: "Kyeong-Rim Yeo received a poster award at MCARE 2022!",
    images: [
      "/-----/images/2022.08.26%202022%20MCARE%20Conference,%20Poster%20award%20(Kyeong-Rim%20Yeo)_edited_edited_edited.jpg"
    ]
  },

 {
    id: "gal",
    title: "2022 ENPL Summer MT",
    category: "LAB LIFE",
    date: "2022.07.14-15",
    description: "2022 ENPL Summer MT",
    images: [
      "/-----/images/2022.07.14-15.%202022%20ENPL%20Summer%20MT%20(4).jpg",
      "/-----/images/2022.07.14-15.%202022%20ENPL%20Summer%20MT%20(3).jpg"
    ]
  },

 {
    id: "gal",
    title: "Teacher's day poster",
    category: "LAB LIFE",
    date: "2022.05",
    description: "Celebrating 2022 Teacher's day together!",
    images: [
      "/-----/images/2022.05.%202022%20Teacher's%20day!.jpg",
    ]
  },

  {
    id: "gal",
    title: "KES 2022",
    category: "CONFERENCE",
    date: "2022.04.08",
    description: "Attending 2022 spring meeting of the Korean Electrochemical Society in Jeju",
    images: [
      "/-----/images/2022.04.08.%20Spring%20Meeting%20of%20the%20Korean%20Electrochemical%20Society,%20jeju_edited.jpg",
    ]
  },

  {
    id: "gal",
    title: "Ho Tae's graduation",
    category: "GRADUATION",
    date: "2022.02.",
    description: "Congratulations to Ho Tae on his Master's graduation!",
    images: [
      "/-----/images/2022.02.%20Bang%20Ho%20Tae's%20graduation_edited_edited.jpg",
      "/-----/images/2022.02.%20Bang%20Ho%20Tae's%20graduation(Master%20course)(2).jpg"
    ]
  },

   {
    id: "gal",
    title: "Tran Dinh Son's Defense",
    category: "OTHERS",
    date: "2021.08.",
    description: "Tran Dinh Son's Defense",
    images: [
      "/-----/images/2021.08.%20Tran%20Dinh%20Son's%20Defence_edited.jpg",
      "/-----/images/2021.08.%20Tran%20Dinh%20Son's%20Defence.jpg"
    ]
  },

   {
    id: "gal",
    title: "Professor Soo-Kil Kim's 10th Anniversary",
    category: "LAB LIFE",
    date: "2021.05.14",
    description: " Congratulations to Professor Soo-Kil Kim on his 10th anniversary in Chung-Ang University!",
    images: [
      "/-----/images/2021.05.14.%20Congratulations%20to%20Professor%20Kim%20Soo-gil%20on%20his%2010th%20anniversary%20in%20Chung-Ang%20University!%20(2).jpg",
      "/-----/images/2021.05.14.%20Congratulations%20to%20Professor%20Kim%20Soo-gil%20on%20his%2010th%20anniversary%20in%20Chung-Ang%20University%20(교수님%20사진).jpg",
      "/-----/images/2021.05.14.%20Congratulations%20to%20Professor%20Kim%20Soo-gil%20on%20his%2010th%20anniversary%20in%20Chung-Ang%20University!.jpg"
    ]
  },

  {
    id: "gal",
    title: "KIChE 2021",
    category: "CONFERENCE",
    date: "2021.04.21",
    description: "Attending KIChE spring 2021 in Busan: Kyeong-Rim (poster)",
    images: [
      "/-----/images/2021.04.21.%202021%20Spring%20KICHE,%20Busan,%20Kyeong-Rim%20Yeo%20(Poster%20presentation)_edited.jpg",
    ]
  },

   {
    id: "gal",
    title: "KES 2021",
    category: "CONFERENCE",
    date: "2021.04.08",
    description: "Attending KES spring 2021 in Busan",
    images: [
      "/-----/images/2021.04.08.%202021%20Spring%20Meeting%20of%20the%20Korean%20Electrochemical%20Society,%20Busan.jpg",
    ]
  },

     {
    id: "gal",
    title: "Kyeong-Rim's graduation",
    category: "GRADUATION",
    date: "2021.02.",
    description: "Congratulations on Kyeong-Rim Yeo's graduation (undergraduation)!",
    images: [
     "/-----/images/2021.02.%20Kyeong-Rim%20Yeo's%20graduation(undergraduation)_edited.jpg",
    ]
  },
  
 {
    id: "gal",
    title: "HBD Prof. KIM!",
    category: "LAB LIFE",
    date: "2020.10.28",
    description: "Happy birthday professor Soo-Kil Kim!",
    images: [
      "/-----/images/2020.10.28.%20Happy%20Birthday%20Prof.%20KIM!.jpg",
      "/-----/images/2020.10.28.%20Happy%20Birthday%20Prof.%20KIM!%20(케이크).jpg",
      "/-----/images/2020.10.28.%20Happy%20Birthday%20Prof.%20KIM!%20(미기재%20사진)%20(2).jpg",
    ]
  },

   {
    id: "gal",
    title: "Celebrating Our Graduates: M.S. & Ph.D.",
    category: "GRADUATION",
    date: "2020.02.",
    description: "Congratulations to Seonhwa and Young Sang on their Master's graduation, and to Hoyoung and Hyanjoo on their Ph.D. graduation!",
    images: [
     "/-----/images/2020.02.grad1.jpg",
     "/-----/images/2020.02.grad2.jpg",
     "/-----/images/2020.02.grad3.jpg"
    ]
  },

   {
    id: "gal",
    title: "2020 ENPL-NEED Union Winter MT",
    category: "LAB LIFE",
    date: "2020.01.31-02.01",
    description: "2020 ENPL-NEED Union Winter MT",
    images: [
      "/-----/images/2020.1.31-2.1.%202020%20ENPL-NEED%20Union%20Winter%20MT_edited.jpg"
    ]
  },
];
