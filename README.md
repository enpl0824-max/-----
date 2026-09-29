# Sookil Kim Lab (ENPL) Website

Chung-Ang University (중앙대학교 융합공학부 에너지나노소재공정 연구실) 공식 홈페이지 프로젝트입니다.

## 1. 사이트 실행 및 빌드 방법
- **로컬 개발 서버 실행**: 바탕화면의 `dev.bat`을 더블 클릭하면 `http://localhost:4321/`에서 실시간 미리보기가 열립니다.
- **정적 웹사이트 빌드**: `build.bat`을 더블 클릭하면 `dist/` 폴더에 배포용 HTML/CSS 파일이 자동 생성됩니다 (GitHub Pages 배포 시 그대로 업로드 가능).

## 2. 손쉬운 데이터 관리 (`src/data/`)
HTML이나 컴포넌트 코드를 수정하지 않고, `src/data/` 폴더 내의 파일만 수정하면 사이트 전체에 자동 반영됩니다.

- `src/data/research.ts`: 현재 3대 연구 분야(PEMWE, AEMWE, Electrodeposition) 및 과거 연구 아카이브
- `src/data/publications.ts`: 학술 논문 목록 (새 논문 추가 시 연도별로 자동 정렬)
- `src/data/patents.ts`: 특허 목록
- `src/data/students.ts`: 재학생 명단 (Ph.D., M.S., 학부연구생)
- `src/data/alumni.ts`: 졸업생 명단
- `src/data/gallery.ts`: 갤러리 행사 및 사진
- `src/data/labInfo.ts`: 연구실/교수님 연락처 및 위치 정보

## 3. 핵심 디자인 규격
- **Primary Accent**: `#EE9A1A` (Orange)
- **Light Gray**: `#E0E0E0`
- **White**: `#FFFFFF`
- **Text**: `#222222` (Primary), `#666666` (Secondary)
- **디자인 컨셉**: KAIST NTL 레퍼런스 기반 미니멀 사이언티픽 아카데믹 스타일
