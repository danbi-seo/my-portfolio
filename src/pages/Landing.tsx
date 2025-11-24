import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, ChevronDown } from 'lucide-react';

// Project 타입 정의
export interface Project {
  id: string;
  title: string;
  artist: string;
  description: string;
  thumbnail: string;
  duration: string;
  tags: string[];
}

// 샘플 프로젝트 데이터
const sampleProject: Project = {
  id: '1',
  title: 'Frontend Developer',
  artist: 'React · TypeScript · Tailwind',
  description: '프론트엔드 개발자 포트폴리오',
thumbnail: '/images/LandingImg.png',
  duration: '3:24',
  tags: ['React', 'TypeScript', 'Tailwind']
};

interface LandingContentProps {
  currentTime: string;
  onClick: () => void;
  currentProject: Project;
  isPlaying: boolean;
  onPlayPause: () => void;
}

const LandingContent: React.FC<LandingContentProps> = ({ 
  currentTime, 
  onClick, 
  currentProject,
  isPlaying,
  onPlayPause
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="relative h-screen w-full cursor-pointer"
      onClick={onClick}
    >
      {/* 배경 이미지 */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/LandingBg.png)',
          // filter: 'brightness(0.6)'
        }}
      />
      
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      
      {/* 콘텐츠 */}
      <div className="relative h-full flex flex-col items-center justify-center px-8">
        {/* 시간 */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white text-8xl font-light mb-4 tracking-tight"
        >
          {currentTime}
        </motion.div>
        
        {/* 환영 메시지 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/80 text-xl mb-12"
        >
          Welcome to my
        </motion.div>
        
        {/* 포트폴리오 카드 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 max-w-3xl w-full border border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-6 mb-6">
            <img 
              src={currentProject.thumbnail}
              alt={currentProject.title}
              className="w-32 h-32 rounded-lg object-cover shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-white text-5xl font-serif italic mb-2">
                Port<span className="font-normal not-italic">folio</span>
              </h1>
              <p className="text-white/70 text-lg tracking-wider uppercase">
                SEO DAN BI
              </p>
            </div>
          </div>
          
          {/* 재생 컨트롤 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-white/60 text-sm">0:50</span>
              <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-white rounded-full" />
              </div>
              <span className="text-white/60 text-sm">-4:10</span>
            </div>
            
            <div className="flex items-center justify-center gap-8">
              <button className="text-white/70 hover:text-white transition">
                <SkipBack size={28} />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onPlayPause();
                }}
                className="bg-white text-black rounded-full p-4 hover:scale-105 transition"
              >
                {isPlaying ? <Pause size={28} fill="black" /> : <Play size={28} fill="black" className="ml-1" />}
              </button>
              <button className="text-white/70 hover:text-white transition">
                <SkipForward size={28} />
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* 스크롤 인디케이터 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 text-white/50 text-sm flex flex-col items-center gap-2"
        >
          <span className="italic">Scroll down</span>
          <ChevronDown size={24} className="animate-bounce" />
        </motion.div>
      </div>
    </motion.div>
  );
};

// 메인 Landing 컴포넌트 (props 없음)
const Landing: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTransition = () => {
    navigate('/home');
  };

  const handleScroll = (e: React.WheelEvent) => {
    if (e.deltaY > 50) {
      handleTransition();
    }
  };

  return (
    <div 
      className="fixed inset-0 overflow-hidden bg-black"
      onWheel={handleScroll}
    >
      <LandingContent 
        currentTime={currentTime}
        onClick={handleTransition}
        currentProject={sampleProject}
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
      />
    </div>
  );
};

export default Landing;