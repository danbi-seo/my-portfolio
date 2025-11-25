import { Code2, Zap, Target, Users } from 'lucide-react';
import type { ImplementationItem } from '../components/projects/Implementation';
import type { TroubleshootingItem } from '../components/projects/Troubleshooting';


export const studyhubData = {
  info: {
    title: 'StudyHub',
    subtitle: '스터디 관리 백오피스',
    type: '팀프로젝트',
    period: '2025.10.13 ~ 2025.11.17 (4주)',
    description: '개발자, 디자이너, 데이터 분석가 등 다양한 분야의 학습자들이 함께 성장할 수 있도록 돕는 스터디 관리 플랫폼의 백오피스 기능을 구현하였습니다. TypeScript와 React Query를 활용한 타입 안전성과 서버 상태 관리에 중점을 두었습니다.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
    github: 'https://github.com/OZ-Coding-School/oz_externship_fe_03_team4',
    demo: 'https://admin.ozcoding.site/',
    portfolio: 'https://ozex3-fe4.vercel.app/'
  },

  features: [
  'AccessToken, RefreshToken 기반 인증 구조',
  '유저 정보 관리 (수정, 권한 변경, 상태 변경)',
  '서비스 현황 실시간 확인 대시보드',
  '강의 데이터 조회 및 관리',
  '스터디 그룹 관리',
  '리뷰 및 지원 내역 관리',
  '구인 공고 관리'
  ],

  techStack: {
    Frontend: ['React 18', 'TypeScript', 'Vite', 'React Router', 'React Query', 'Zustand'],
    Styling: ['Tailwind CSS'],
    API: ['Axios', 'REST API'],
    Tools: ['ESLint', 'Prettier', 'Git', 'GitHub', 'Figma'],
    Deployment: ['Vercel']
  },

  implementations: [
    {
      title: '프로젝트 기본 구조 설정',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      details: [
        'Vite + React + TypeScript 기반 프로젝트 초기 설정',
        '폴더 구조 및 컴포넌트 아키텍처 설계',
        'Git 브랜치 전략 수립 (main, develop, feature 브랜치)',
        'ESLint, Prettier 규칙 설정으로 코드 일관성 확보'
      ]
    },
    {
      title: 'React Query를 활용한 데이터 페칭 최적화',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      details: [
        'React Query를 사용한 서버 상태 관리',
        '캐싱, 리페칭, 페이지네이션 구현',
        '로딩 및 에러 상태 처리',
        'Optimistic Update로 사용자 경험 개선'
      ]
    },
    {
      title: '사용자 인증 및 권한 관리 시스템',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      details: [
        'JWT 기반 사용자 인증 구현',
        '로그인, 회원가입, 로그아웃 기능',
        'Protected Route로 권한별 페이지 접근 제어',
        'Zustand를 활용한 사용자 상태 전역 관리'
      ]
    },
    {
      title: '검색 및 필터링 기능 구현',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      details: [
        '실시간 검색 기능 구현',
        '다중 필터링 (카테고리, 가격, 날짜 등)',
        'URL 쿼리 파라미터를 활용한 상태 관리',
        'Debounce 처리로 검색 최적화'
      ]
    }
  ] as ImplementationItem[],

  troubleshooting: [
    {
      title: '토스트 알림창 중복 오류',
      problem: '동일한 내용의 토스트가 연속으로 여러 번 발생시킬 때 이전 토스트가 사라지지 않고 중복으로 쌓이는 문제 발생',
      cause: 'React는 key가 같으면 같은 컴포넌트로 인식하여 리렌더링만 수행. 여러 개의 동일한 토스트가 있을 때 어떤 것을 삭제해야 할지 명확하지 않음',
      solution: 'title, message, variant 조합으로 충분히 고유한 key 생성. 특정 토스트 객체를 정확히 제거하기 위한 토스트 삭제 함수 구현'
    },
    {
      title: '페이지네이션이 1페이지로 고정되는 오류',
      problem: '검색어 입력 시 기존 페이지 상태가 유지되어 검색 후에도 페이지네이션이 첫 페이지로 리셋되지 않는 문제. resetToFirstPage() 함수 추가 후 페이지네이션이 작동하지 않음',
      cause: '검색 핸들러에서 페이지 초기화 로직이 누락. resetToFirstPage와 handleSearch의 호출 타이밍이 분리되어 페이지 상태가 지속적으로 1로 고정',
      solution: '검색 이벤트가 발생할 때만 페이지를 초기화하도록 handleSearch 내부에 resetToFirstPage()를 넣어 검색을 감지할 때만 페이지 변경'
    },
    {
      title: '필터링 상태값 미적용 오류',
      problem: '스터디 그룹 관리 페이지에서 상태 필터(대기중/진행중/완료)를 적용한 후 검색하면 필터가 제대로 적용되지 않아 의도하지 않은 결과 표시',
      cause: '초기 버전에서는 필터와 검색이 독립적으로 동작. 필터 상태는 UI에서만 관리되고 API 요청 시 필터 값이 포함되지 않음',
      solution: 'UI와 API 간의 상태 값을 명확히 매핑하는 상수 정의. 필터 로직을 useStudyGroupFilter로 분리하고 useStudyGroupManagement에서 검색, 필터, 페이지네이션을 통합 관리'
    }
  ] as TroubleshootingItem[],

  achievements: [
    '영어와 일본어로도 번역된 사이드 프로젝트를 진행',
    '사이트 프로젝트를 영국 agGrid 회사에 피드백 요청',
    'React Hooks (useState, useEffect, useParams)를 활용한 실전 경험',
    'Custom Hook 설계 및 구현 능력 향상',
    'Axios를 활용한 RESTful API 통신 경험',
    'React Router를 사용한 SPA 라우팅 구조 이해',
    'TypeScript를 활용한 타입 안전성 확보'
  ]
};