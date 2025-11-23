export type ProjectMeta = {
  id: string;
  title: string;
  subtitle?: string;
  tags: string[];
  desc?: string;
  demoHref?: string;
  codeHref?: string;
  thumbnail?: string;
  period?: string;
  team?: string;
  role?: string;
  responsibilities?: string[];
  achievements?: string[];
  techStack?: string[];
};

export const PROJECTS: ProjectMeta[] = [
  {
    id: "github-pages",
    title: "GitHub Pages (초기)",
    subtitle: "첫 개인 사이트",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "가장 볼품없던 출발점. 하지만 ‘배포 → 피드백 → 개선’ 루프를 시작하게 해준 중요한 첫 걸음.",
    demoHref: "https://kyung-bok.github.io/",
    codeHref: "https://github.com/kyung-bok/kyung-bok.github.io",
    thumbnail: "images/github.JPG",
    period: "2025.06",
    team: "개인",
    role: "초기 포트폴리오 제작 및 배포",
    responsibilities: [
      "HTML/CSS로 정적 페이지 구성 및 구조 설계",
      "GitHub Pages를 통한 첫 배포 경험",
    ],
    achievements: [
      "첫 배포 성공 및 웹 개발에 대한 흥미 확립",
      "브라우저 렌더링 구조 및 DOM 조작 이해",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
  },
  {
    id: "calculator",
    title: "계산기 프로젝트",
    subtitle: "첫 미니 프로젝트",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "부트캠프 시작 후 처음으로 완성한 프로젝트입니다.",
    demoHref:
      "https://kyung-bok.github.io/team_project/%EC%9C%A4%EA%B2%BD%EB%B3%B5_4%EB%8B%A8%EA%B3%84/calculator.html",
    codeHref:
      "https://github.com/KYUNG-BOK/KYUNG-BOk.github.io/tree/main/%EC%B0%90%EA%B3%84%EC%82%B0%EA%B8%B0",
    thumbnail: "images/calculator.JPG",
    period: "2025.06",
    team: "개인",
    role: "프론트엔드 구현 및 스타일링",
    responsibilities: [
      "DOM 조작과 이벤트 핸들링을 통한 동적 계산기 구현",
      "디자인 및 CSS 레이아웃 설계",
    ],
    achievements: [
      "순수 JS만으로 입력 처리 경험",
      "프로젝트 완성 후 첫 VERCEL 배포도 진행",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "bok-project",
    title: "Bok Project",
    subtitle: "개인 미니 프로젝트",
    tags: ["React", "UI 실험"],
    desc: "첫 React 배포 사이트로 컴포넌트화 개념을 익혔습니다.",
    demoHref: "https://bok-project.vercel.app",
    codeHref: "https://github.com/KYUNG-BOK/bok_project",
    thumbnail: "images/bokproject.JPG",
    period: "2025.07",
    team: "개인",
    role: "UI 및 구조 설계 전반",
    responsibilities: [
      "Vite + React 환경 세팅 및 라우팅 구현",
      "컴포넌트 분리 및 재사용성 개선 실험",
    ],
    achievements: ["컴포넌트 단위 개발 습관 확립"],
    techStack: ["React", "Vite", "TailwindCSS", "Vercel"],
  },
  {
    id: "ozflix",
    title: "OZFLIX",
    subtitle: "영화 검색/무한스크롤 실습",
    tags: ["React", "TMDB", "Infinite Scroll"],
    desc: "TMDB API 기반으로 무한스크롤, 디바운스 검색, 찜 목록 등 다양한 기능을 구현했습니다.",
    demoHref: "https://ozflix.vercel.app",
    codeHref: "https://github.com/KYUNG-BOK/react_mini",
    thumbnail: "images/ozflix.JPG",
    period: "2025.08",
    team: "개인",
    role: "전체 UI 및 데이터 로직 설계",
    responsibilities: [
      "TMDB API 연동 및 비동기 데이터 처리",
      "디바운스 검색 및 무한스크롤 커스텀 훅 구현",
      "반응형 레이아웃과 사용자 별 마이페이지 구성",
    ],
    achievements: ["사용자 경험 중심의 인터랙션 설계 경험"],
    techStack: ["React", "TMDB API", "TailwindCSS", "Supabase", "Vercel"],
  },
  {
    id: "ozshop",
    title: "OZ Shop",
    subtitle: "메인 프로젝트 — 커머스",
    tags: ["React", "JSX", "TailwindCSS", "Motion"],
    desc: "팀 프로젝트로 진행된 쇼핑몰 서비스. 반응형 UX와 관리자 페이지까지 통합 구현했습니다.",
    demoHref: "https://ozshop-kappa.vercel.app",
    codeHref: "https://github.com/Wizard-Of-Oz-b/Wizard-Of-Oz-FE05",
    thumbnail: "images/ozshop.JPG",
    period: "2025.09",
    team: "5인 팀 (FE 3명, BE 2명)",
    role: "프론트엔드 리드 / UI 구조 설계",
    responsibilities: [
      "관리자페이지 / 상품 상세페이지 / 위시리스트 / 로그인 등 핵심 페이지 설계",
      "반응형 컴포넌트 시스템 구축",
      "Git 브랜치 전략 및 코드 리뷰 리딩",
    ],
    achievements: [
      "관리자/사용자 흐름 통합 설계 성공",
      "Vercel + GitHub Actions CI 파이프라인 완성",
    ],
    techStack: [
      "React",
      "JSX",
      "TailwindCSS",
      "Framer Motion",
      "TanStackQuery",
    ],
  },
  {
    id: "wizardofoz",
    title: "Wizards of Oz",
    subtitle: "메인 프로젝트 소개 사이트",
    tags: ["Vercel", "팀 소개", "디자인 시스템"],
    desc: "팀 브랜드 및 프로젝트 정체성을 표현하기 위한 소개 랜딩 제작.",
    demoHref: "https://wizardofoz-seven.vercel.app",
    codeHref: "#",
    thumbnail: "images/wizardofoz.JPG",
    period: "2025.10",
    team: "5인 팀 (FE 3명, BE 2명)",
    role: "기획 및 퍼블리싱",
    responsibilities: [
      "디자인 시스템 확립 및 팀 브랜딩 컬러 구성",
      "메인 랜딩 페이지 및 멤버 소개 영역 개발",
    ],
    achievements: ["공식 랜딩 페이지로 데모데이 공개 운영"],
    techStack: ["TypeScript", "TailwindCSS", "Vercel"],
  },
  {
    id: "studyhub-admin",
    title: "StudyHub Admin",
    subtitle: "익스턴십 관리자 페이지",
    tags: ["React 19", "TypeScript", "TanStack Query"],
    desc: "리드로 참여한 실무형 관리자 프로젝트. 실제 서비스 운영 맥락에서 데이터 관리 UI를 직접 구현했습니다.",
    demoHref: "https://admin.ozcoding.site",
    codeHref: "https://github.com/OZ-Coding-School/oz_externship_fe_03_team4",
    thumbnail: "images/studyhub.JPG",
    period: "2025.10 ~ 2025.11",
    team: "5인 팀 (FE 5)",
    role: "프론트엔드 팀장 / 전반 설계",
    responsibilities: [
      "로그인/리뷰/지원내역 등 주요 페이지 설계 및 개발",
      "TanStack Query 기반 데이터 캐싱 및 페이지네이션 로직 구현",
      "Git 브랜치 전략 및 PR 리뷰 프로세스 정립",
    ],
    achievements: [
      "프로젝트 구조 표준화 및 컴포넌트 재사용률 80% 이상 달성",
      "팀 협업 문화 개선",
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "TanStack Query",
      "TailwindCSS",
      "Vite",
    ],
  },
  {
    id: "studyhub-landing",
    title: "StudyHub (소개)",
    subtitle: "프로젝트 소개/랜딩",
    tags: ["Vercel", "TypeScript", "GSAP"],
    desc: "익스턴십 팀의 프로젝트 홍보용 랜딩 사이트로 GSAP 기반 인터랙션 구현.",
    demoHref: "https://ozex3-fe4.vercel.app",
    codeHref:
      "https://github.com/oz-externship3-fe-4/oz-externship-fe4-showcase/",
    thumbnail: "images/ex3.JPG",
    period: "2025.11",
    team: "5인 팀 (FE 5)",
    role: "프로젝트 리드, 애니메이션 및 인터랙션 담당",
    responsibilities: [
      "GSAP 애니메이션 및 스크롤 인터랙션 연출",
      "페이지 구조/색상/타이포그래피 조율",
    ],
    achievements: ["Demo Day 홍보 페이지로 활용"],
    techStack: ["React", "TypeScript", "GSAP", "Vercel"],
  },
];
