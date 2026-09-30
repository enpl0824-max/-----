export interface Patent {
  id: string;
  title: string;
  inventors: string;
  patentNumber: string;
  year: number;
  country: string;
  status: "Registered" | "Pending";
  link?: string;
}

export const patentsData: Patent[] = [
export const patents = [
  {
    id: "pat-1",
    title: "초저함량 Pt 장식 Ni 전기촉매, 그 제조방법 및 이를 이용한 음이온교환막 수전해 장치",
    inventors: "Jong Hyun Jang, Soo-Kil Kim, Sang Hyun Ahn, Hyoung-Juhn Kim, Jin Young Kim, Sung Jong Yoo, Dirk Hengensmeier, Jonghee Han, Jaeyune Ryu",
    patentNumber: "US 10,669,640",
    year: 2020,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-2",
    title: "연료전지 스택의 단위전지를 그대로 평가하는 방법 및 이를 이용한 장치",
    inventors: "Jon Hyun Jang, Kug-Seung Lee, Hyoung-Juhn Kim, Eun Ae Cho, Soo-Kil Kim, Dirk Henkensmeier, Suk-Woo Nam, Tae Hoon Lim",
    patentNumber: "US 9,496,573",
    year: 2016,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-3",
    title: "Pd-Y 합금 촉매, 그 제조방법 및 이를 포함하는 연료전지",
    inventors: "Sung Jong Yoo, Soo-Kil Kim, Seung Jun Hwang, Suk-Woo Nam, Tae Hoon Lim, Seong Ahn Hong",
    patentNumber: "US 9,269,965",
    year: 2016,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-4",
    title: "연료전지용 코어-셸 구조 전기촉매 및 그 제조방법",
    inventors: "Seung Jun Hwang, Soo-Kil Kim, Sung Jong Yoo, Hong Hyun Jang, Eun Ae Cho, Hyoung-Juhn Kim, Suk-Woo Nam, Tae Hoon Lim",
    patentNumber: "US 14/812,289",
    year: 2016,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-5",
    title: "코어-셸 구조의 연료전지용 전기촉매 제조방법 및 전기촉매",
    inventors: "Seung Jun Hwang, Sung Jong Yoo, Soo-Kil Kim, Eun Ae Cho, Jong Hyun Jang, Hyoung Juhn Kim, Suk-Woo Nam, Tae Hoon Lim",
    patentNumber: "US 8,859,458",
    year: 2014,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-6",
    title: "허니컴형 고체산화물 연료전지의 단위전지, 이를 이용한 스택 및 단위전지와 스택의 제조방법",
    inventors: "Sung Pil Yoon, Tae Hoon Lim, Seong Ahn Hong, In Hwan Oh, Suk-Woo Nam, Jonghee Han, Jong Pil Jeong, Kwang Soo Lee, Yeong Cheon Kim, Hyoung-Juhn Kim, Eun Ae Cho, Soo-Kil Kim, Sang Yeop Lee",
    patentNumber: "US 8,778,564",
    year: 2014,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-7",
    title: "서로 다른 술폰화도를 갖는 고분자 블렌드를 포함하는 연료전지용 전해질막, 및 이를 포함하는 막-전극 접합체와 연료전지",
    inventors: "Hyoung-Juhn Kim, Soo-Kil Kim, Eun Ae Cho, Jong Hyun Jang, Sung Pil Yoon, In Hwan Oh, Jonghee Han, Seong Ahn Hong, Suk-Woo Nam, Tae Hoon Lim",
    patentNumber: "US 8,771,897",
    year: 2014,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-8",
    title: "저온 전사법을 이용한 막-전극 접합체 제조방법, 이에 의해 제조된 막-전극 접합체 및 이를 이용한 연료전지",
    inventors: "Soo-Kil Kim, Jae Hyung Cho, Heung Yong Ha, In Hwan Oh, Tae Hoon Lim, Suk-Woo Nam, Seong Ahn Hong",
    patentNumber: "US 8,518,607",
    year: 2013,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-9",
    title: "탄소 소재의 제조방법, 이에 의해 제조된 탄소 소재, 이를 이용한 전지 소재 및 장치",
    inventors: "Heung Yong Ha, Han-ik Joh, Seong Mu Jo, Soo-Kil Kim, Suk-Woo Nam, In Hwan Oh, Tae Hoon Lim, Seong Ahn Hong, Sung-Yeon Jang",
    patentNumber: "US 8,486,584",
    year: 2013,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-10",
    title: "연료전지용 코어-셸 구조 전기촉매 및 그 제조방법",
    inventors: "Seung Jun Hwang, Soo-Kil Kim, Sung Jong Yoo, Hong Hyun Jang, Eun Ae Cho, Hyoung-Juhn Kim, Suk-Woo Nam, Tae Hoon Lim",
    patentNumber: "US 13/403,130",
    year: 2013,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-11",
    title: "하이브리드형 전원 공급 장치",
    inventors: "Heung Yong Ha, Han-ik Joh, Tae Jung Ha, Soo-Kil Kim, Hyoung-Juhn Kim, Tae Hoon Lim, Suk-Woo Nam, In-Hwan Oh, Seong-Ahn Hong",
    patentNumber: "US 8,236,459",
    year: 2012,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-12",
    title: "막-전극 접합체 제조방법, 이에 의해 제조된 막-전극 접합체 및 이를 포함하는 연료전지",
    inventors: "Eun Ae Cho, Seok Hui Im, Tae Hoon Lim, In Hwan Oh, Suk-Woo Nam, Sung Pil Yoon, Sang Yeop Lee, Hyoung-Juhn Kim, Jong Hyun Jang, Soo-Kil Kim",
    patentNumber: "US 13/319,371",
    year: 2012,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-13",
    title: "연료전지용 막-전극 접합체 제조방법",
    inventors: "Eun Ae Cho, Hyun-Sook Jang, Tae Hoon Lim, In Hwan Oh, Suk-Woo Nam, Hyoung-Juhn Kim, Jong Hyun Jang, Soo-Kil Kim",
    patentNumber: "US 13/154,214",
    year: 2011,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-14",
    title: "니켈-철 및 코발트 자성 합금의 슈퍼컨포멀 전해도금",
    inventors: "Thomas P. Moffat, Chang Hwa Lee, Daniel Josell, Soo-Kil Kim",
    patentNumber: "US 12/358,628",
    year: 2009,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-15",
    title: "MCFC 냉각용 분리판, 이를 포함하는 MCFC 및 분리판을 이용한 MCFC 냉각방법",
    inventors: "Hyng Chul Ham, Seng-Ahn Hong, In-Hwan Oh, Tae-Hoon Lim, Suk Woo Nam, Heung Yong Ha, Jonghee Han, Sung Pil Yoon, Jaeyoung Lee, Hyong-Juhn Kim, Eun Ae Cho, Yeong Cheon Kim, Sang-Yeop Lee",
    patentNumber: "US 11/967,521",
    year: 2008,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-16",
    title: "박막 형성방법 및 이를 이용한 액정표시장치 제조방법",
    inventors: "Soo-Kil Kim, Jong-Uk Bae, Jae Jeong Kim",
    patentNumber: "US 10/771,292",
    year: 2004,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-17",
    title: "저저항 구리 배선, 이를 구비한 액정표시장치 및 그 형성방법",
    inventors: "Jae Jeong Kim, Soo-Kil Kim, Yong Shik Kim",
    patentNumber: "US 10/323,946",
    year: 2003,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-18",
    title: "박막 형성방법 및 이를 이용한 액정표시장치 제조방법",
    inventors: "Soo-Kil Kim, Jong-Uk Bae, Jae Jeong Kim",
    patentNumber: "US 09/985,342",
    year: 2002,
    country: "미국",
    status: "출원",
    link: ""
  }
];
];
