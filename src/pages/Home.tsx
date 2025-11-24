import { motion } from 'framer-motion';

// 스킬 데이터
const skills = [
  {
    category: 'Design Tools',
    items: [
      { name: 'Photoshop', icon: '🎨', level: 5, color: 'from-blue-500 to-blue-600' },
      { name: 'Illustrator', icon: '✏️', level: 5, color: 'from-orange-500 to-orange-600' },
      { name: 'InDesign', icon: '📄', level: 5, color: 'from-pink-500 to-pink-600' },
      { name: 'Premiere Pro', icon: '🎬', level: 4, color: 'from-purple-500 to-purple-600' },
      { name: 'After Effects', icon: '🎞️', level: 3, color: 'from-indigo-500 to-indigo-600' },
    ]
  },
  {
    category: 'Certifications',
    items: [
      { name: 'GTQ 1급', icon: '🏆', subtitle: 'Adobe' },
      { name: 'GTQi 1급', icon: '🏆', subtitle: 'Adobe' },
      { name: 'GTQid 1급', icon: '🏆', subtitle: 'Adobe' },
      { name: '컴퓨터그래픽스운용기능사', icon: '🏆', subtitle: 'Adobe' },
      { name: 'JLPT 2급', icon: '🇯🇵', subtitle: 'Japanese' },
      { name: '컴퓨터활용 2급', icon: '💻', subtitle: 'Excel' },
    ]
  }
];

const education = [
  { period: '2010.03 - 2013.02', school: '본당영덕고 문과 졸업', type: '고등학교' },
  { period: '2013.02 - 2015.02', school: '수원대비사경영학과 졸업', type: '전문대학' },
];

const traits = [
  'Collaborative',
  'Inclusive', 
  'Diverse experiences',
  'Creative thinking',
  'Compassionate',
  'Warm-hearted',
  'Open-minded'
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Profile Image */}
            <div className="relative group">
              <div className="w-[500px] h-[250px] rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl" />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-cyan-400 text-sm font-medium mb-2 tracking-wider">
                  Graphic Designer
                </p>
                <h1 className="text-5xl font-bold mb-4">
                  <span className="text-white">서단비 </span>
                  <span className="text-white/80">SEO DAN BI </span>
                  <span className="text-white/60">ソ・ダンビ</span>
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  다양한 경험을 통해 단단해진,<br />
                  그리고 더 컸고 넓어진 시선으로 디자인 합니다.
                </p>
                <div className="flex gap-4">
                  <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    1994.05.04
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm text-white/80 px-6 py-2 rounded-full text-sm border border-white/20">
                    경기도 용인시
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Traits Pills */}
      <section className="py-8 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {traits.map((trait, index) => (
              <motion.span
                key={trait}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm text-white/60 px-5 py-2 rounded-full text-sm border border-white/10 hover:bg-white/10 hover:text-white transition-all cursor-default"
              >
                {trait}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 tracking-wide"
          >
            EDUCATION
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <p className="text-white/50 text-sm mb-3">{edu.period}</p>
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {edu.school}
                </h3>
                <p className="text-white/60 text-sm mt-2">{edu.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 tracking-wide"
          >
            SKILLS
          </motion.h2>

          {/* Design Tools */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white/80 mb-6">Design Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {skills[0].items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-center text-white font-medium mb-3">{skill.name}</h4>
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < skill.level ? 'bg-white' : 'bg-white/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-white/80 mb-6">Certifications & Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills[1].items.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium text-sm mb-1 group-hover:text-cyan-400 transition-colors">
                        {cert.name}
                      </h4>
                      {cert.subtitle && (
                        <p className="text-white/50 text-xs">{cert.subtitle}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// import { Page } from "../components/Page";
// import { TOKENS } from "../components/theme/token";
// import { GoldHero } from "../components/hero/GoldHero";
// import SinceTicker from "../components/ticker/SinceTicker";
// import { Container } from "../components/layout/Container";

// export default function Home() {
//   return (
//     <div className="min-h-screen" style={{ background: TOKENS.colors.bg }}>
//       <Page>
//         <meta
//           name="description"
//           content="React · TypeScript · UI Engineering"
//         />
//         <link rel="canonical" href="https://febok.vercel.app/" />
//         <Container>
//           <GoldHero />

//           <div className="mx-auto mt-10 max-w-5xl">
//             <SinceTicker since="2025-05-22" />
//           </div>
//         </Container>
//       </Page>
//     </div>
//   );
// }
