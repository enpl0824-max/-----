export interface Patent {
  id: string;
  title: string;
  inventors: string;
  patentNumber: string;
  year: number;
  country: string;
  status: "등록" | "출원";
  link?: string;
}

export const patentsData: Patent[] = [
  {
    id: "pat-1",
    title: "수전해용 비백금계 삼원계 합금 촉매, 이의 제조방법, 이를 포함하는 수전해 전극 및 상기 수전해용 전극을 포함하는 수전해용 막전극 접합체",
    inventors: "이찬희, 여경림, 조성기, 장종현, 김수길",
    patentNumber: "KR 10-2025-0037156",
    year: 2025,
    country: "대한민국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-2",
    title: "수전해 촉매, 이의 제조방법 및 이를 포함하는 수전해 장치",
    inventors: "여경림, 김호영, 김성빈, 이진우, 박해선, 김수길",
    patentNumber: "KR 10-2024-0047182",
    year: 2024,
    country: "대한민국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-3",
    title: "다공성 레이어 촉매화 방법, 이에 의해 제조된 촉매화된 다공성 레이어, 이를 포함하는 수전해 셀 및 이를 포함하는 전기 화학적 반응장치",
    inventors: "김수길, 여경림, 이진우, 김호영",
    patentNumber: "KR 10-2022-0127382",
    year: 2022,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-4",
    title: "수전해 촉매 및 이의 제조방법",
    inventors: "김수길, 방호태, 여경림, 최경지",
    patentNumber: "KR 10-2750001",
    year: 2022,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-5",
    title: "연료전지용 전극 및 이의 제조방법",
    inventors: "",
    patentNumber: "KR 1022037530000",
    year: 2021,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-6",
    title: "수전해용 환원극 및 이의 제조방법",
    inventors: "",
    patentNumber: "KR 1021324140000",
    year: 2020,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-7",
    title: "이산화탄소 환원용 전극의 제조방법, 이를 이용하여 제조된 이산화탄소 환원용 전극 및 이를 포함하는 이산화탄소 환원 장치",
    inventors: "",
    patentNumber: "KR 1020662690000",
    year: 2020,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-8",
    title: "극소량의 백금이 도포된 니켈 전극촉매, 이의 제조방법 및 이를 이용한 음이온 교환막 수전해 장치",
    inventors: "장종현, 김수길, 안상현, 김형준, 김진영, 유성종, 디르크 헹겐스마이어, 한종희, 류재윤",
    patentNumber: "US 10,669,640",
    year: 2020,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-9",
    title: "Pt-Cu 합금촉매를 포함하는 고온 고분자 전해질 막 연료전지용 전극, 이의 제조방법 및 이를 포함하는 고온 고분자 전해질 막 연료전지",
    inventors: "",
    patentNumber: "KR 1019635000000",
    year: 2019,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-10",
    title: "이산화탄소 환원 촉매의 제조방법 및 이산화탄소 환원 촉매",
    inventors: "",
    patentNumber: "KR 1019286410000",
    year: 2018,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-11",
    title: "이산화탄소 환원 및 포름산 산화용 촉매의 제조방법 및 이에 의해 제조된 이산화탄소 환원 및 포름산 산화용 촉매",
    inventors: "",
    patentNumber: "KR 1018696460000",
    year: 2018,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-12",
    title: "이산화탄소 환원 및 포름산 산화용 촉매 및 그 제조방법",
    inventors: "",
    patentNumber: "KR 1018320490000",
    year: 2018,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-13",
    title: "극소량의 백금이 도포된 니켈 전극촉매, 이의 제조방법 및 이를 이용한 음이온 교환막 물 전기분해 장치",
    inventors: "",
    patentNumber: "KR 10-1726575",
    year: 2017,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-14",
    title: "이산화탄소 환원용 촉매 제조방법 및 이에 의해 제조된 이산화탄소 환원용 촉매",
    inventors: "",
    patentNumber: "KR 10-1714304",
    year: 2017,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-15",
    title: "비귀금속계 전기화학 촉매, 이를 이용한 프로톤 교환 막 물 전해 장치 및 그 제조 방법",
    inventors: "",
    patentNumber: "KR 1020180028289",
    year: 2016,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-16",
    title: "니켈이 전기 도금된 친수성을 가지는 다공성 탄소 재료를 이용한 알칼리 음이온 교환막 물 전기 분해 장치 및 그 제조 방법",
    inventors: "",
    patentNumber: "KR 1015847250000",
    year: 2016,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-17",
    title: "인산 내피독성 백금 및 금 합금 촉매, 이를 포함하는 막전극접합체, 고온 고분자 연료전지 및 그 제조 방법",
    inventors: "",
    patentNumber: "KR 1016340770000",
    year: 2016,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-18",
    title: "연료전지 스택의 단위전지를 비파괴 방식으로 평가하는 방법 및 이를 이용한 장치",
    inventors: "장종현, 이국승, 김형준, 조은애, 김수길, 디르크 헹겐스마이어, 남석우, 임태훈",
    patentNumber: "US 9,496,573",
    year: 2016,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-19",
    title: "팔라듐-이트륨 합금 촉매, 그 제조방법 및 이를 포함하는 연료전지",
    inventors: "유성종, 김수길, 황승준, 남석우, 임태훈, 홍성안",
    patentNumber: "US 9,269,965",
    year: 2016,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-20",
    title: "연료전지용 코어-쉘 구조 전극촉매 및 그 제조방법",
    inventors: "황승준, 김수길, 유성종, 장홍현, 조은애, 김형준, 남석우, 임태훈",
    patentNumber: "US 14/812,289",
    year: 2016,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-21",
    title: "산소 발생 반응 활성 향상 방법 및 이에 사용되는 니켈 촉매",
    inventors: "",
    patentNumber: "KR 1015664580000",
    year: 2015,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-22",
    title: "백금-니켈 합금을 포함하는 중공형 나노입자, 이를 포함하는 연료전지용 전극촉매 및 이의 제조방법",
    inventors: "",
    patentNumber: "KR 1014580680000",
    year: 2014,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-23",
    title: "수소 발생 반응용 니켈 촉매 및 그 제조 방법",
    inventors: "",
    patentNumber: "KR 1013899250000",
    year: 2014,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-24",
    title: "수소 발생 반응용 니켈 촉매 및 그 제조 방법",
    inventors: "",
    patentNumber: "KR 1389925",
    year: 2014,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-25",
    title: "코어-쉘 구조의 연료전지용 전극촉매 제조방법 및 전극촉매",
    inventors: "황승준, 유성종, 김수길, 조은애, 장종현, 김형준, 남석우, 임태훈",
    patentNumber: "US 8,859,458",
    year: 2014,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-26",
    title: "벌집형 고체산화물 연료전지의 단전지, 이를 이용한 스택 및 이들의 제조방법",
    inventors: "윤성필, 임태훈, 홍성안, 오인환, 남석우, 한종희, 정종필, 이광수, 김영천, 김형준, 조은애, 김수길, 이상엽",
    patentNumber: "US 8,778,564",
    year: 2014,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-27",
    title: "술폰화도가 상이한 고분자 블렌드를 포함하는 연료전지용 전해질막, 이를 포함하는 막-전극 접합체 및 연료전지",
    inventors: "김형준, 김수길, 조은애, 장종현, 윤성필, 오인환, 한종희, 홍성안, 남석우, 임태훈",
    patentNumber: "US 8,771,897",
    year: 2014,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-28",
    title: "안정제를 사용한 산소 환원 반응용 전극 촉매 제조방법",
    inventors: "",
    patentNumber: "KR 1013275370000",
    year: 2013,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-29",
    title: "연료전지의 MEA 열화의 실시간 측정 방법 및 측정 장치",
    inventors: "",
    patentNumber: "KR 1013035960000",
    year: 2013,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-30",
    title: "연료전지용 코어-쉘 구조의 전극촉매 및 그 제조방법",
    inventors: "",
    patentNumber: "KR 1013042190000",
    year: 2013,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-31",
    title: "술폰화도가 상이한 고분자의 블렌드를 포함하는 연료전지 전해질막 및 이를 포함하는 막-전극 접합체 및 연료전지",
    inventors: "",
    patentNumber: "KR 1013446860000",
    year: 2013,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-32",
    title: "폴리벤즈이미다졸리움 및 폴리벤즈이미다졸리움 기반 고체 전해질",
    inventors: "",
    patentNumber: "KR 1012931960000",
    year: 2013,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-33",
    title: "팔라듐 및 이트륨 합금 촉매 및 그 제조 방법, 상기 촉매를 포함하는 연료전지",
    inventors: "",
    patentNumber: "KR 10-1220916",
    year: 2013,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-34",
    title: "촉매 슬러리 조성물, 이를 사용한 연료전지용 막-전극 접합체의 제조방법 및 이로부터 제조된 연료전지용 막-전극 접합체",
    inventors: "",
    patentNumber: "KR 10-1228545",
    year: 2013,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-35",
    title: "연료전지용 코어쉘 구조의 전극 촉매 제조방법 및 그 전극 촉매",
    inventors: "",
    patentNumber: "KR 10-1230527",
    year: 2013,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-36",
    title: "저온 전사법을 이용한 막전극접합체 제조방법, 이에 따라 제조된 막전극접합체 및 이를 이용한 연료전지",
    inventors: "김수길, 조재형, 하흥용, 오인환, 임태훈, 남석우, 홍성안",
    patentNumber: "US 8,518,607",
    year: 2013,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-37",
    title: "탄소 재료 제조방법, 이에 따라 제조된 탄소 재료, 이를 이용하는 전지 재료 및 장치",
    inventors: "하흥용, 조한익, 조성무, 김수길, 남석우, 오인환, 임태훈, 홍성안, 장성연",
    patentNumber: "US 8,486,584",
    year: 2013,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-38",
    title: "연료전지용 코어-쉘 구조 전극촉매 및 그 제조방법",
    inventors: "황승준, 김수길, 유성종, 장홍현, 조은애, 김형준, 남석우, 임태훈",
    patentNumber: "US 13/403,130",
    year: 2013,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-39",
    title: "폴리벤지이미다졸이 함유된 전극, 이를 포함하는 막전극접합체와 연료전지 및 이들의 제조 방법",
    inventors: "",
    patentNumber: "KR 10-1172356",
    year: 2012,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-40",
    title: "금속 나노 입자 제조 방법, 이를 이용한 탄소 담지 백금 촉매 합성 방법 및 이에 따라 합성된 탄소 담지 백금 촉매, 이를 이용하는 연료전지",
    inventors: "",
    patentNumber: "KR 10-1172357",
    year: 2012,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-41",
    title: "탄소 담지 백금 및 이리듐 합금 촉매 및 그 합성 방법, 상기 합금 촉매를 포함하는 연료전지",
    inventors: "",
    patentNumber: "KR 10-1171847",
    year: 2012,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-42",
    title: "막-전극 접합체의 제조방법, 이로부터 제조된 막-전극 접합체 및 이를 포함한 연료전지",
    inventors: "",
    patentNumber: "KR 10-1155947",
    year: 2012,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-43",
    title: "연료전지용 고분자 전해질막 및 이의 제조방법",
    inventors: "",
    patentNumber: "KR 10-1118202",
    year: 2012,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-44",
    title: "인시츄 핵자기 공명 분석용 연료전지 구성 부품, 이를 이용한 연료전지 및 연료전지 성능 평가 방법",
    inventors: "",
    patentNumber: "KR 10-1123877",
    year: 2012,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-45",
    title: "저온 전사법을 이용한 막전극접합체 제조방법, 이에 따라 제조된 막전극접합체 및 이를 이용한 연료전지",
    inventors: "",
    patentNumber: "KR 10-1164874",
    year: 2012,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-46",
    title: "연료전지용 기체 확산층 및 이를 이용한 연료전지",
    inventors: "",
    patentNumber: "KR 10-1142908",
    year: 2012,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-47",
    title: "백금 및 이트륨의 균일한 합금 촉매, 백금 합금 촉매의 안정성 향상 방법 및 상기 촉매를 포함하는 연료전지",
    inventors: "",
    patentNumber: "KR 10-1163060",
    year: 2012,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-48",
    title: "연료전지 전극의 전기화학적 특성 검출 방법 및 장치",
    inventors: "",
    patentNumber: "KR 1103707",
    year: 2012,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-49",
    title: "연료 농도 센서 및 센싱 방법, 이를 이용한 연료전지의 연료 재순환 시스템 장치 및 방법, 이를 이용한 연료전지 이용 장치",
    inventors: "",
    patentNumber: "KR 1105364",
    year: 2012,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-50",
    title: "하이브리드형 전력공급장치",
    inventors: "하흥용, 조한익, 하태정, 김수길, 김형준, 임태훈, 남석우, 오인환, 홍성안",
    patentNumber: "US 8,236,459",
    year: 2012,
    country: "미국",
    status: "등록",
    link: ""
  },
  {
    id: "pat-51",
    title: "막-전극 접합체 제조방법, 이에 따라 제조된 막-전극 접합체 및 이를 포함하는 연료전지",
    inventors: "조은애, 임석희, 임태훈, 오인환, 남석우, 윤성필, 이상엽, 김형준, 장종현, 김수길",
    patentNumber: "US 13/319,371",
    year: 2012,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-52",
    title: "유체의 회전 흐름 유도로가 구비된 연료전지용 분리판, 그 제조 방법 및 이를 이용한 연료전지",
    inventors: "",
    patentNumber: "KR 10-1051726",
    year: 2011,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-53",
    title: "유로 구조가 개선된 연료전지용 분리판 및 이를 이용한 연료전지",
    inventors: "",
    patentNumber: "KR 1025306",
    year: 2011,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-54",
    title: "탄소 재료 제조 방법, 이에 따라 제조된 탄소 재료, 이를 이용하는 전지 재료 및 장치",
    inventors: "",
    patentNumber: "KR 1009281",
    year: 2011,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-55",
    title: "연료전지용 막-전극 접합체 제조방법",
    inventors: "조은애, 장현숙, 임태훈, 오인환, 남석우, 김형준, 장종현, 김수길",
    patentNumber: "US 13/154,214",
    year: 2011,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-56",
    title: "연료전지용 분리판 및 이를 이용한 연료전지",
    inventors: "",
    patentNumber: "KR 0987096",
    year: 2010,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-57",
    title: "하이브리드 전력공급장치",
    inventors: "",
    patentNumber: "KR 097989",
    year: 2010,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-58",
    title: "벌집형 고체산화물연료전지의 단전지, 이를 이용한 스택 및 이들의 제조방법",
    inventors: "",
    patentNumber: "KR 0960870",
    year: 2010,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-59",
    title: "농도 센서를 사용하지 않는 액체형 연료 전지의 연료 농도제어 방법 및 장치, 이를 이용한 액체형 연료 전지 장치",
    inventors: "",
    patentNumber: "KR 0906204",
    year: 2009,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-60",
    title: "평탄화제를 이용한 금속 전해 도금 방법",
    inventors: "",
    patentNumber: "KR 0880521",
    year: 2009,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-61",
    title: "니켈-철 및 코발트 자성 합금의 초등각 전해도금",
    inventors: "토머스 P. 모팻, 이창화, 대니얼 조셀, 김수길",
    patentNumber: "US 12/358,628",
    year: 2009,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-62",
    title: "저저항 구리 배선 형성 방법",
    inventors: "",
    patentNumber: "KR 0870697",
    year: 2008,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-63",
    title: "용융탄산염 연료전지 냉각용 분리판, 이를 포함하는 용융탄산염 연료전지 및 상기 분리판을 이용한 냉각 방법",
    inventors: "함형철, 홍성안, 오인환, 임태훈, 남석우, 하흥용, 한종희, 윤성필, 이재영, 김형준, 조은애, 김영천, 이상엽",
    patentNumber: "US 11/967,521",
    year: 2008,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-64",
    title: "첨가제를 이용한 초등각 구리 전해 도금 방법",
    inventors: "",
    patentNumber: "KR 0727213",
    year: 2007,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-65",
    title: "구리 무전해 도금막의 비저항 저감 방법",
    inventors: "",
    patentNumber: "KR 0434670",
    year: 2004,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-66",
    title: "반도체 배선용 구리막 형성방법",
    inventors: "",
    patentNumber: "KR 0426209",
    year: 2004,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-67",
    title: "구리 전해 도금액",
    inventors: "",
    patentNumber: "KR 0422455",
    year: 2004,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-68",
    title: "박막 형성 방법 및 이를 적용한 액정표시장치의 제조 방법",
    inventors: "김수길, 배종욱, 김재정",
    patentNumber: "US 10/771,292",
    year: 2004,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-69",
    title: "반도체 금속막 형성 방법",
    inventors: "",
    patentNumber: "KR 0406592",
    year: 2003,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-70",
    title: "박막 형성 방법 및 이를 적용한 액정표시소자의 제조 방법",
    inventors: "",
    patentNumber: "KR 0400765",
    year: 2003,
    country: "대한민국",
    status: "",
    link: ""
  },
  {
    id: "pat-71",
    title: "저저항 구리 배선, 이를 포함하는 액정표시장치 및 그 형성 방법",
    inventors: "김재정, 김수길, 김용식",
    patentNumber: "US 10/323,946",
    year: 2003,
    country: "미국",
    status: "출원",
    link: ""
  },
  {
    id: "pat-72",
    title: "박막 형성 방법 및 이를 적용한 액정표시장치의 제조 방법",
    inventors: "김수길, 배종욱, 김재정",
    patentNumber: "US 09/985,342",
    year: 2002,
    country: "미국",
    status: "출원",
    link: ""
  }
];
