import { Code2, Zap, Search, Calendar, Users } from 'lucide-react';
import type { Category } from '../types/explore.types';

export const exploreData: Category[] = [
  {
    id: 'skill-based',
    title: '스킬 기반 프로젝트',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    description: '특정 기술 스택을 중심으로 구현한 프로젝트',
    projects: [
      {
        title: 'Pokédex',
        subtitle: '포켓몬 도감 사이트',
        tech: 'Redux Toolkit · React Router',
        image: 'https://images.unsplash.com/photo-1542779283-429940ce8336?w=400&h=300&fit=crop',
        tags: ['전역 상태 관리', '성능 최적화', '한글 검색'],
        highlight: 'Redux Toolkit 비동기 처리',
        path: '/projects/pokemon'
      },
      {
        title: 'DB Movie Box',
        subtitle: '영화 검색 사이트',
        tech: 'React · TMDB API',
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop',
        tags: ['API 통신', 'Debounce', '반응형 디자인'],
        highlight: 'Custom Hook 설계',
        path: '/projects/moviebox'
      }
    ]
  },
  {
    id: 'team-projects',
    title: '팀 협업 프로젝트',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    description: '실무 수준의 협업 경험',
    projects: [
      {
        title: 'Pchedule',
        subtitle: 'P형을 위한 일정 관리',
        tech: 'React · Django · AWS',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
        tags: ['풀스택', 'API 연동', 'CORS 해결'],
        highlight: '일정 관리 사이트',
        path: '/projects/pchedule'
      },
      {
        title: 'StudyHub',
        subtitle: '스터디 관리 백오피스',
        tech: 'TypeScript · React Query',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
        tags: ['TypeScript', '서버 상태 관리', 'JWT'],
        highlight: '강의 & 스터디 관리 시스템',
        path: '/projects/studyhub'
      }
    ]
  }
];

export const highlights: Highlight[] = [
  {
    icon: Search,
    title: '한글 검색 최적화',
    desc: 'korean-regexp로 초성 검색 구현',
    project: 'Pokédex'
  },
  {
    icon: Zap,
    title: 'Custom Hook 설계',
    desc: 'useDebounce로 API 호출 최적화',
    project: 'DB Movie Box'
  },
  {
    icon: Calendar,
    title: 'API 연동 완수',
    desc: '데모데이 새벽까지 백엔드 협업',
    project: 'Pchedule'
  },
  {
    icon: Code2,
    title: 'TypeScript 도입',
    desc: '타입 안정성 확보 & 오류 사전 방지',
    project: 'StudyHub'
  }
];