import { Code2, Zap, Target } from 'lucide-react';
import type { ImplementationItem } from '../components/projects/Implementation';
import type { TroubleshootingItem } from '../components/projects/Troubleshooting';


export const pokemonData = {
  info: {
    title: 'Pokédex',
    subtitle: '포켓몬 도감 사이트',
    type: '개인프로젝트',
    period: '2025.07.17 ~ 2025.07.24 (1주)',
    description: 'PokeAPI를 활용하여 151마리의 포켓몬 정보를 조회할 수 있는 인터랙티브 도감 웹 애플리케이션입니다. Redux Toolkit을 활용한 전역 상태 관리, React Router를 통한 SPA 구현, 그리고 React.lazy와 Suspense를 활용한 성능 최적화에 중점을 두고 개발했습니다.',
    image: 'https://images.unsplash.com/photo-1542779283-429940ce8336?w=1200&h=600&fit=crop',
    github: 'https://github.com/danbi-seo/React_stack_pokemon',
    demo: 'https://pokemon-api-site.vercel.app/',
    accentColor: 'bg-blue-600'
  },

  features: [
    '151마리 포켓몬 정보 카드 형태로 조회',
    '포켓몬 상세 정보 확인 (이름, 이미지, 설명)',
    '한글 검색 지원 (korean-regexp 활용)',
    '찜하기 기능',
    '포켓몬 이미지 FlipCard (앞면/뒷면 전환)'
  ],

  techStack: {
    Frontend: ['React', 'Vite', 'Redux Toolkit', 'React Router DOM', 'Tailwind CSS', 'Styled Components'],
    Libraries: ['korean-regexp', 'PokeAPI'],
    Deployment: ['Vercel']
  },

  implementations: [
    {
      title: 'Redux Toolkit을 활용한 비동기 데이터 관리',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      details: [
        'createAsyncThunk를 사용하여 PokeAPI에서 151마리 포켓몬 정보 비동기 로딩',
        'Array.from과 Promise.all로 1~151번 포켓몬 ID 배열 생성 및 병렬 처리',
        'createSlice로 포켓몬 데이터 및 찜 목록 상태 관리'
      ]
    },
    {
      title: '한글 검색 기능 구현',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      details: [
        'korean-regexp 라이브러리를 활용하여 한글 초성 검색 지원',
        '실시간 검색어 입력 시 navigate를 통해 Search 페이지로 이동',
        'URL 쿼리 파라미터로 검색 상태 유지'
      ]
    },
    {
      title: 'FlipCard 인터랙션 구현',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      details: [
        'styled-components로 3D 카드 뒤집기 효과 구현',
        'transform-style: preserve-3d, backface-visibility: hidden 속성 활용',
        '버튼 클릭 시 포켓몬 앞면/뒷면 이미지 전환'
      ]
    }
  ] as ImplementationItem[],

  troubleshooting: [
    {
      title: 'Redux 비동기 데이터 로딩 시 초기 렌더링 문제',
      problem: '151마리 포켓몬 데이터를 한 번에 로드하는 과정에서 초기 렌더링이 지연되고, 사용자가 빈 화면을 오래 보게 되는 문제가 발생',
      cause: 'Promise.all로 모든 API 호출이 완료될 때까지 기다리기 때문에 첫 화면 표시가 느림',
      solution: 'React.lazy와 Suspense를 활용하여 페이지 단위 코드 스플리팅 적용, 로딩 상태를 명시적으로 표시'
    },
    {
      title: '카드 컴포넌트 불필요한 리렌더링',
      problem: '포켓몬 카드 컴포넌트가 상위 컴포넌트의 상태 변경 시 모두 리렌더링되어 성능 저하 발생',
      cause: '151개의 카드 컴포넌트가 props 변경 여부와 관계없이 부모 컴포넌트 리렌더링 시 함께 리렌더링',
      solution: 'React.memo로 카드 컴포넌트를 감싸서 props가 변경되지 않으면 리렌더링을 방지'
    }
  ] as TroubleshootingItem[],

  achievements: [
    'Redux Toolkit의 createAsyncThunk를 활용한 비동기 상태 관리 경험',
    'React Router의 동적 라우팅 및 URL 파라미터 활용 능력 향상',
    'React 성능 최적화 기법(Lazy Loading, Memoization) 실전 적용',
    '한글 정규식 적용으로 검색 만족도 개선'
  ]
};