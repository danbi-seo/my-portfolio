import { motion } from 'framer-motion';
import { Code2, Zap, Search, Calendar, Users, ArrowRight, Compass } from 'lucide-react';

const categories = [
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
        highlight: 'Redux Toolkit 비동기 처리'
      },
      {
        title: 'DB Movie Box',
        subtitle: '영화 검색 사이트',
        tech: 'React · TMDB API',
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop',
        tags: ['API 통신', 'Debounce', '반응형 디자인'],
        highlight: 'Custom Hook 설계'
      }
    ]
  },
  // {
  //   id: 'experiments',
  //   title: '실험/미니프로젝트',
  //   icon: Zap,
  //   color: 'from-purple-500 to-pink-500',
  //   description: '새로운 기술과 아이디어를 빠르게 테스트',
  //   projects: [
  //     {
  //       title: '기술 실험실',
  //       subtitle: '새로운 라이브러리 테스트',
  //       tech: 'Framer Motion · Zustand',
  //       image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
  //       tags: ['애니메이션', '상태 관리', '프로토타입'],
  //       highlight: '빠른 프로토타이핑'
  //     }
  //   ]
  // },
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
        highlight: '일정 관리 사이트'
      },
      {
        title: 'StudyHub',
        subtitle: '스터디 관리 백오피스',
        tech: 'TypeScript · React Query',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
        tags: ['TypeScript', '서버 상태 관리', 'JWT'],
        highlight: '강의 & 스터디 관리 시스템'
      }
    ]
  },
  // {
  //   id: 'interaction',
  //   title: '인터랙션/애니메이션',
  //   icon: Palette,
  //   color: 'from-orange-500 to-red-500',
  //   description: '사용자 경험을 높이는 인터랙티브 요소',
  //   projects: [
  //     {
  //       title: 'FlipCard 효과',
  //       subtitle: '3D 카드 인터랙션',
  //       tech: 'Styled Components',
  //       image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
  //       tags: ['3D Transform', 'CSS Animation'],
  //       highlight: '포켓몬 카드 뒤집기'
  //     },
  //     {
  //       title: '모달 시스템',
  //       subtitle: '일정 추가 모달',
  //       tech: 'React · Zustand',
  //       image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
  //       tags: ['UX 최적화', '비동기 처리'],
  //       highlight: '입력 효율성 35% 향상'
  //     }
  //   ]
  // }
];

const highlights = [
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

export default function Explore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] text-white overflow-y-auto">
      {/* Header */}
      <section className="pt-20 pb-12 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Compass className="w-10 h-10 text-purple-400" />
              <h1 className="text-3xl md:text-4xl font-bold mb-4">둘러보기</h1>
            </div>
            <p className="text-white/60 text-lg max-w-2xl">
              다양한 프로젝트를 통해 성장해온 저의 과정을 확인해보세요!
            </p>
          </motion.div>
        </div>
      </section>

      {/* 주요 성과 */}
      <section className="py-8 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 1}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6"
          >
            주요 성과
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10 hover:border-white/30 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-white/50 text-xs mb-2">{item.desc}</p>
                    <span className="text-xs text-purple-400">{item.project}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 카테고리별 프로젝트 */}
      {categories.map((category) => (
        <section key={category.id} className="py-12 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                  <p className="text-white/60">{category.description}</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all cursor-pointer"
                >
                  {/* 이미지 */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Highlight Badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${category.color} text-white text-xs font-semibold backdrop-blur-sm`}>
                        {project.highlight}
                      </div>
                    </div>
                  </div>

                  {/* 내용 */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-3">{project.subtitle}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Code2 className="w-4 h-4 text-purple-400" />
                      <span className="text-xs text-white/70">{project.tech}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 rounded-md bg-white/5 text-white/70 text-xs border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 더보기 */}
                    <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors group/btn">
                      <span>자세히 보기</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}