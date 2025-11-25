import { Code2, Zap, Target } from 'lucide-react';
import type { ImplementationItem } from '../components/projects/Implementation';
import type { TroubleshootingItem } from '../components/projects/Troubleshooting';

export const movieBoxData = {
  info: {
    title: 'DB Movie Box',
    subtitle: '영화 검색 사이트',
    type: '개인프로젝트',
    period: '2025.07.24 ~ 2025.08.12 (1주)',
    description: 'TMDB API를 활용하여 영화 정보를 검색하고 상세 정보를 확인할 수 있는 SPA 웹 사이트입니다. React의 핵심 개념인 컴포넌트 기반 설계, 상태 관리, API 통신을 실전에 적용하며 사용자 친화적인 영화 검색 서비스를 구현했습니다.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=600&fit=crop',
    github: 'https://github.com/danbi-seo/react_mini_movie_stie',
    demo: 'https://react-mini-movie-stie.vercel.app/#/',
    accentColor: 'bg-purple-600'
  },

  features: [
    '영화 제목 기반 실시간 검색',
    '인기 영화 / 최신 개봉작 리스트 조회',
    '영화 상세 정보 페이지 표시',
    '반응형 UI 디자인 (모바일/데스크톱 지원)',
    '무한 스크롤 기능'
  ],

  techStack: {
    Frontend: ['React', 'Vite', 'React Router DOM', 'Axios', 'Styled Components'],
    API: ['TMDB API'],
    Deployment: ['Vercel']
  },

  implementations: [
    {
      title: '프로젝트 기본 구조 설정',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      details: [
        'Vite를 사용한 React 프로젝트 초기 설정',
        '폴더 구조 설계 (components, pages, hooks, utils)',
        'API 키 환경 변수 설정 (.env 파일 활용)',
        '기본 라우팅 구조 구현 (Home, Detail, Search 페이지)'
      ]
    },
    {
      title: '영화 상세 정보 페이지 구현',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      details: [
        'React Router의 동적 라우팅을 활용한 Detail 페이지 구현',
        'useParams 훅으로 영화 ID 추출',
        '영화 상세 정보 API 호출 및 렌더링',
        '로딩 상태 및 에러 처리'
      ]
    },
    {
      title: 'UI/UX 개선 및 반응형 디자인',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      details: [
        'CSS Grid와 Flexbox를 활용한 반응형 레이아웃',
        '로딩 스피너 및 Skeleton UI 추가',
        '영화 포스터 hover 효과 및 애니메이션',
        '모바일/태블릿/데스크톱 브레이크포인트 설정'
      ]
    }
  ] as ImplementationItem[],

  troubleshooting: [
    {
      title: 'API 호출 시 과도한 리렌더링 문제',
      problem: '검색어를 입력할 때마다 API가 즉시 호출되어 불필요한 네트워크 요청이 발생하고, 타이핑이 느려지는 문제 발생',
      cause: 'input의 onChange 이벤트에서 상태가 변경될 때마다 즉시 API를 호출',
      solution: 'Custom Hook useDebounce를 구현하여 사용자가 타이핑을 멈춘 후 500ms 후에 API를 호출하도록 개선'
    },
    {
      title: '컴포넌트 리렌더링 최적화',
      problem: '부모 컴포넌트의 상태가 변경될 때마다 모든 MovieCard 컴포넌트가 리렌더링되어 성능 저하 발생',
      cause: 'MovieCard 컴포넌트가 props 변경 여부와 관계없이 부모의 리렌더링에 따라 함께 리렌더링',
      solution: 'React.memo를 사용하여 props가 변경되지 않으면 리렌더링을 방지'
    }
  ] as TroubleshootingItem[],

  achievements: [
    'React Hooks (useState, useEffect, useParams)를 활용한 실전 경험',
    'Custom Hook 설계 및 구현 능력 향상',
    'Axios를 활용한 RESTful API 통신 경험',
    'React Router를 사용한 SPA 라우팅 구조 이해',
    'CSS를 활용한 반응형 디자인 및 애니메이션 구현'
  ]
};