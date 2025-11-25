import { motion } from 'framer-motion';
import { Heart, Users, Target, Repeat, Palette, CirclePlus } from 'lucide-react';

const techSkills = [
  { 
    name: 'TypeScript', 
    icon: '📘', 
    level: 5,
    desc: 'Generic, Class, Interface 활용, 함수 및 컴포넌트에 타입 적용 경험',
  },
  { 
    name: 'React', 
    icon: '⚛️', 
    level: 5,
    desc: 'Virtual DOM, 컴포넌트 구조 이해, Props/State/Context 활용',
  },
  { 
    name: 'JavaScript', 
    icon: '💛', 
    level: 4,
    desc: 'ES6+ 문법 활용, 바닐라 JS DOM 조작, 비동기 처리 이해',
  },
  { 
    name: 'Figma', 
    icon: '🎨', 
    level: 5,
    desc: '와이어프레임 제작, 협업 및 프로토타입 공유 경험',
  },
  { 
    name: 'Tailwind CSS', 
    icon: '💨', 
    level: 5,
    desc: '반응형 디자인과 커스텀 유틸리티 클래스 적용 경험',
  },
  { 
    name: 'Zustand', 
    icon: '🌀', 
    level: 4,
    desc: '간단한 전역 상태 관리 경험, Context API와 차이 이해',
  },
  { 
    name: 'React Query', 
    icon: '📡', 
    level: 3,
    desc: '서버 상태 관리, API 데이터 fetching/caching/업데이트 경험',
  },
  { 
    name: 'Redux & Toolkit', 
    icon: '🗃️', 
    level: 2,
    desc: '액션, 리듀서, 스토어 구조 이해 및 Redux Toolkit 활용 경험',
  },
  { 
    name: 'Github', 
    icon: '🐙', 
    level: 4,
    desc: 'Git flow 이해, Pull Request 및 코드 리뷰 경험',
  },
  { 
    name: 'Framer Motion', 
    icon: '🎬', 
    level: 3,
    desc: '컴포넌트 기반 애니메이션 설계 및 트랜지션 구현 경험',
  },
  // { 
  //   name: 'Next.js', 
  //   icon: '🚀', 
  //   level: 1,
  //   desc: '페이지 라우팅, SSR/SSG 이해, API Routes 및 동적 라우팅 경험',
  // },
];


const philosophy = [
  {
    icon: Users,
    title: '협업 중심',
    desc: '팀과의 소통을 통해 더 나은 결과를 만들어냅니다.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: CirclePlus,
    title: '새로운 학습',
    desc: '새로운 기술을 두려워하지 않고 적극적으로 반영합니다.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Target,
    title: '사용자 중심',
    desc: '사용자 경험을 최우선으로 생각하며 개발합니다.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Heart,
    title: '열정과 끈기',
    desc: '완성도 높은 결과물을 위해 끝까지 노력합니다.',
    color: 'from-red-500 to-pink-600'
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] text-white overflow-y-auto">
      {/* 메인 인사말 */}
      <section className="relative pt-16 pb-8 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* 배경 그라데이션 블러 */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-6"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-[#121212] flex items-center justify-center">
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      DB
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                안녕하세요,{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  서단비
                </span>
                입니다
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-white/60 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                변화를 두려워하지 않고, 새로운 기술에 도전하는<br />
                <span className="text-white/80">Frontend Developer 입니다</span>
              </motion.p>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-2 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all group cursor-pointer"
            >
              <Palette className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">디자인 감각을 갖춘 개발자</h3>
              <p className="text-white/60 text-sm">디자인과 개발의 경계를 연결하며, <br></br>직관적인 화면과 효율적인 <br></br>사용자 동선을 고민합니다.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-pink-600/10 to-red-600/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all group cursor-pointer"
            >
              <Users className="w-8 h-8 text-pink-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">다양한 경험으로 넓어진 시야</h3>
              <p className="text-white/60 text-sm">비개발자 출신으로 다양한 산업과 <br></br>사람들을 경험하며 문제를 바라보는 넓은 시각을 통해 커뮤니케이션 역량을 키웠습니다.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-pink-600/10 to-purple-600/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all group cursor-pointer"
            >
              <Repeat className="w-8 h-8 text-purple-300 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">새로운 도전을 멈추지 않는<br></br> 성실한 개발자</h3>
              <p className="text-white/60 text-sm">낯선 기술을 두려워하지 않고 배움과 도전을 즐기며, 꾸준히 성장합니다.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-2">기술 스택</h2>
            <p className="text-white/60">현재 사용하고 있는 주요 기술들</p>
          </motion.div>

          {/* 개발 스킬 */}
          <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <h4 className="text-center text-white font-semibold text-lg mb-2">{skill.name}</h4>
                  <p className="text-center text-white/50 text-xs mb-3">{skill.desc}</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i < skill.level ? 'bg-white shadow-sm' : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-2">일하는 방식</h2>
            <p className="text-white/60">중요하게 생각하는 가치들</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all cursor-pointer overflow-hidden"
              >
                {/* 아이콘 배경 그라데이션 */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 blur-3xl transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}