import { motion } from 'framer-motion';
import { Clock, Github, BookOpen, Award, FileText, Briefcase, GraduationCap, Users, ExternalLink } from 'lucide-react';

const timeline = [
  {
    period: '2025.12 - 2026.01',
    company: '텐핑거스',
    role: '프론트엔드 인턴',
    description: '데이트팝 어플 및 사이트 개발, 관리',
    details: ['환불 계좌 입력 폼 페이지 개발', '이미지 프리로드 커스텀 컴포넌트 교체', ''],
    type: 'work',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    period: '2025.05 - 2025.11',
    company: '초격자 프론트엔드 개발 부트캠프',
    role: '오즈코딩스쿨',
    description: 'React, JavaScript, Node.js, Next.js, HTML, CSS 프로그래밍 학습',
    details: ['가계부 만들기 Study 참여', '프로젝트 4회 진행'],
    type: 'education',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    period: '2024.07 - 2024.12',
    company: '뉴질랜드 대한민국 영사관',
    role: '인턴',
    description: '공공외교 지원업무, 웹 콘텐츠 업무, 행사 영상 제작 및 유튜브 영상 제작',
    type: 'work',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    period: '2021.02 - 2023.05',
    company: '트랜디협동조합',
    role: '콘텐츠 디자이너',
    description: '포토샵, 일러스트로 웹디자인 제작, 프리미어프로로 영상 편집',
    details: ['로고제작, 제품 브로슈어 제작', '와디즈 펀딩 제작참여', '매년 4회씩 국가 지원프로그램 참여'],
    type: 'work',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    period: '2019.02 - 2021.02',
    company: '삼성증권',
    role: '비서',
    description: '비서 업무, 경영지원팀 지원 업무, 회계 및 전산 업무 지원',
    type: 'work',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    period: '2013.03 - 2015.02',
    company: '수원여자대학교',
    role: '비서경영학과 졸업',
    description: '컴퓨터 활용능력 2급 취득, 회계 전산 프로그램 ERP',
    type: 'education',
    color: 'from-indigo-500 to-purple-500'
  }
];

const certificates = [
  { name: '운전면허 2종 보통', org: '경기남부지방경찰청', date: '2024.02', icon: '🚗' },
  { name: 'JLPT 2급', org: '일본국제교류기금', date: '2023.12', icon: '🇯🇵' },
  { name: 'GTQ인디자인 1급', org: '한국생산성본부(KPC)', date: '2023.10', icon: '📄' },
  { name: 'GTQ일러스트 1급', org: '한국생산성본부(KPC)', date: '2023.09', icon: '✏️' },
  { name: '컴퓨터그래픽스 운용기능사', org: '한국생산성본부(KPC)', date: '2023.09', icon: '🎨' },
  { name: 'GTQ포토샵 1급', org: '한국생산성본부(KPC)', date: '2021.01', icon: '🖼️' },
  { name: '컴퓨터활용능력 2급', org: '대한상공회의소', date: '2013.11', icon: '💻' }
];

const activities = [
  {
    title: '가계부만들기 스터디 모임',
    period: '2025.07 - 2025.08',
    description: '월, 화, 수, 목, 금 09:00~09:50 스터디',
    icon: Users,
    color: 'from-pink-500 to-rose-500'
  }
];

const sections = [
  { id: 'timeline', label: '커리어 타임라인', icon: Clock },
  { id: 'github', label: 'GitHub 활동', icon: Github },
  { id: 'devlog', label: 'Dev Log / TIL', icon: BookOpen },
  { id: 'certificates', label: '자격증 / 수상', icon: Award },
  { id: 'resume', label: '이력서', icon: FileText }
];

export default function LibraryPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">보관함</h1>
            <p className="text-white/60 text-lg">
              커리어부터 자격증까지, 모든 기록을 한눈에
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-6 px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all whitespace-nowrap"
              >
                <section.icon size={16} />
                <span className="text-sm font-medium">{section.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 커리어 타임라인 */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-purple-400" />
              <h2 className="text-3xl font-bold">커리어 타임라인</h2>
            </div>
          </motion.div>

          <div className="space-y-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-lg rounded-xl hover:bg-white/10 transition-all border border-white/10 hover:border-white/30"
              >
                <div className="flex items-start gap-4 p-6">
                  {/* 아이콘 */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {item.type === 'work' ? (
                      <Briefcase className="w-6 h-6 text-white" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-white" />
                    )}
                  </div>

                  {/* 내용 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{item.company}</h3>
                        <p className="text-purple-400 text-sm font-medium">{item.role}</p>
                      </div>
                      <span className="text-sm text-white/50 whitespace-nowrap">{item.period}</span>
                    </div>

                    <p className="text-white/70 text-sm mb-3">{item.description}</p>

                    {item.details && (
                      <ul className="space-y-1">
                        {item.details.map((detail, i) => (
                          <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 스터디 활동 */}
      <section className="py-12 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-pink-400" />
              <h2 className="text-3xl font-bold">스터디 활동</h2>
            </div>
            <p className="text-white/60">함께 성장한 스터디 기록</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <activity.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{activity.title}</h3>
                <p className="text-purple-400 text-sm mb-3">{activity.period}</p>
                <p className="text-white/70 text-sm">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 자격증 */}
      <section className="py-12 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-6 h-6 text-yellow-400" />
              <h2 className="text-3xl font-bold">자격증 및 수상</h2>
            </div>
            <p className="text-white/60">취득한 자격증 목록</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 group-hover:text-white transition-colors">{cert.name}</h3>
                    <p className="text-white/50 text-xs mb-1">{cert.org}</p>
                    <p className="text-white/40 text-xs">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub & Dev Log */}
      <section className="py-12 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GitHub */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer"
            >
              <Github className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">GitHub 활동</h3>
              <p className="text-white/60 mb-6">개인 프로젝트 및 협업 프로젝트 </p>
              <a
                href="https://github.com/danbi-seo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <span>GitHub 방문하기</span>
                  <ExternalLink size={16} />
                </button>
              </a>
            </motion.div>

            {/* Dev Log */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer"
            >
              <BookOpen className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">Dev Log / TIL</h3>
              <p className="text-white/60 mb-6">개발 일지 및 학습 기록</p>
              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <span>노션 방문하기</span>
                <ExternalLink size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PDF 이력서 */}
      <section className="py-20 px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FileText className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              이력서
            </h2>
            <p className="text-white/60 mb-8 text-lg">
              자세한 이력서를 확인해보세요!
            </p>
            <a
              href="https://www.notion.so/29fa78e465db81899dcecc0bad002288#29fa78e465db81e79aa2e319cd8ce4d3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-3 mx-auto">
                <FileText size={24} />
                <span>이력서 보러가기</span>
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}