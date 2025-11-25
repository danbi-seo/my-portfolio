import { Code2, Zap, Target, Users } from 'lucide-react';
import type { ImplementationItem } from '../components/projects/Implementation';
import type { TroubleshootingItem } from '../components/projects/Troubleshooting';

export const PcheduleData = {
  info: {
    title: 'Pchedule',
    subtitle: 'P형을 위한 일정 관리 앱',
    type: '팀프로젝트',
    period: '2025.09 ~ 2025.10 (4주)',
    description: '계획 세우기 어려운 mbti P유형의 사람도 쉽게 쓸 수 있는 일정 관리 서비스를 목표로 만든 사이트로 P + Schedule의 복합어를 사용했습니다. 달력 기반 일정 관리, 반복 루틴 등록, 직관적인 인터랙션 중심 UI로 복잡하지 않은 미니 플래너를 구현했습니다.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=600&fit=crop',
    github: 'https://github.com/oz-main-fe-12-team4/oz_pchedule_fe',
    demo: ''
  },

  features: [
  '달력 기반 일정 관리 (등록 / 수정 / 삭제)',
  '반복 루틴 등록',
  '일정 색상으로 우선순위 시각화',
  '개인 계정별 일정 저장 (로그인 기반)',
  '직관적인 인터랙션 중심 UI',
  '습관 형성 지원 서비스'
  ],

  techStack: {
    Frontend: ['React.js', 'JavaScript', 'Tailwind CSS', 'Axios', 'Zustand', 'React Router'],
    Backend: ['Python', 'Django', 'Docker', 'Nginx', 'Gunicorn', 'JWT', 'Postgres'],
    Infrastructure: ['AWS EC2', 'S3', 'CloudFront'],
    Tools: ['Figma', 'Notion', 'Google Sheets', 'ERD Cloud']
  },

  implementations: [
    {
      title: 'Figma로 와이어프레임 및 로고 제작',
      icon: Target,
      color: 'from-pink-500 to-rose-500',
      details: [
        'Figma로 직접 와이어프레임 및 로고를 제작하며 디자인 의도를 프론트엔드 구조에 정확히 반영',
        '비로그인/로그인 상태별 화면 구성 로직을 설계하여 사용자 흐름 명확히 구분'
      ]
    },
    {
      title: '일정추가 모달창 구현',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      details: [
        '일정관리에서 제일 중요한 일정추가 모달창 구현',
        'React 기반으로 메인 일정과 세부 일정이 자연스럽게 연결되도록 구조화',
        'UX 관점에서 불필요한 입력 단계를 최소화하고 사용자의 시선을 고려한 인터랙션 설계',
        '입력 효율성 35% 향상 달성'
      ]
    },
    {
      title: '공통 컴포넌트 개발',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      details: [
        'Button 및 FilterButton을 공통 컴포넌트화하여 중복 코드 제거',
        '팀 내 UI 일관성 확보 및 재사용성 극대화',
        'Props 기반 스타일 커스터마이징으로 유연한 컴포넌트 설계',
        '개발 속도 20% 단축 효과 달성'
      ]
    },
    {
      title: '백엔드 협업 및 API 연동 완수',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      details: [
        'API 개발 지연 상황에서도 데모데이 당일 새벽까지 백엔드팀과 함께 남아 API 연동 완료',
        'Swagger API 문서를 함께 보며 실시간으로 엔드포인트 테스트',
        '백엔드 개발 프로세스(DB 마이그레이션, 인증 로직, CORS)에 대한 이해도 향상',
        '위기 상황에서의 문제 해결 능력 및 끈기 입증'
      ]
    }
  ] as ImplementationItem[],

  troubleshooting: [
    {
      title: '모달창 데이터 비동기 처리 문제',
      problem: '메인 일정과 세부 일정 데이터가 비동기 타이밍 불일치로 인해 사용자가 저장 버튼을 눌렀을 때 세부 일정이 누락되거나 메인 일정만 저장되는 문제 발생',
      cause: 'useState의 상태 업데이트가 비동기적으로 처리되면서 메인 일정과 세부 일정의 상태가 서로 다른 렌더링 사이클에서 업데이트',
      solution: 'useEffect와 zustand 상태 관리 로직을 재구성하여 데이터 싱크를 맞추고 실시간 렌더링 안정화'
    },
    {
      title: 'CORS 에러로 인한 API 요청 실패',
      problem: '로그인 API는 성공하는데 일정 조회/등록 API만 실패하는 등 일관성 없는 에러 발생. GET 요청은 성공하지만 POST/PUT 요청은 실패',
      cause: '백엔드 서버의 CORS 설정에서 프론트엔드 도메인이 허용되지 않음. 개발 환경과 배포 환경의 도메인이 다르게 설정되고 Preflight 요청에 대한 응답 헤더 누락',
      solution: '백엔드 CORS 설정, Nginx 설정 수정 및 프론트엔드 개발 환경 Proxy 설정. CORS 에러 완전히 해결하여 모든 HTTP 메서드 정상 작동'
    },
    {
      title: '공통 버튼 스타일 중복',
      problem: '각 페이지별로 버튼 스타일이 상이하게 적용되어 UI 일관성이 떨어지고, 같은 스타일의 버튼 코드가 여러 곳에 중복되어 유지보수 어려움',
      cause: '컴포넌트 재사용성을 고려하지 않은 초기 설계. 각 개발자가 독립적으로 버튼을 구현하여 스타일 통일되지 않음',
      solution: 'Tailwind CSS 기반으로 버튼 컴포넌트를 분리하고 props 기반 스타일 변경 구조로 개선'
    }
  ] as TroubleshootingItem[],

  achievements: [
  'React, Axios, Zustand, Tailwind를 활용한 모듈형 프론트엔드 아키텍처 구축',
  '사용자 경험 중심의 화면 설계로 직관적인 일정관리 UI 구현',
  '트러블슈팅을 통해 배포환경, 인증, 네트워크 등 실무 수준의 오류 해결 경험 확보',
  '공통 컴포넌트화 및 문서화를 통해 협업 효율성 및 코드 품질 향상',
  '데모데이 당일 새벽 3시까지 작업하여 모든 API 연동 완료',
  '백엔드 개발 프로세스에 대한 이해도 향상으로 향후 협업 시 더 원활한 소통 가능'
  ]
};