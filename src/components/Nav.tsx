import { NavLink } from "react-router";
import { Home, Compass, Library, Plus, FolderOpen } from "lucide-react";

// 프로젝트 데이터 타입
interface Project {
  id: string;
  name: string;
  path: string;
}

// 프로젝트 목록
const projects: Project[] = [
  { id: "1", name: "Pokédex", path: "/projects/pokemon" },
  { id: "2", name: "DB Movie Box", path: "/projects/moviebox" },
  { id: "3", name: "Pchedule", path: "/projects/pchedule" },
  { id: "4", name: "StudyHub", path: "/projects/studyhub" },
];

export function Nav() {
  const mainLinks = [
    { to: "/home", label: "홈", icon: Home },
    { to: "/explore", label: "둘러보기", icon: Compass },
    { to: "/library", label: "보관함", icon: Library },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 bg-[#0a0a0a] border-r border-white/5 flex flex-col overflow-hidden z-40">
      {/* 헤더 */}
      <div className="flex items-center gap-3 p-4 border-b border-white/5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        <span className="text-white font-semibold text-lg">Music</span>
      </div>

      {/* 메인 네비게이션 */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="px-3 py-2">
          {mainLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <link.icon 
                      size={20} 
                      className={isActive ? "text-white" : "text-white/70 group-hover:text-white"}
                    />
                    <span>{link.label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 구분선 */}
        <div className="h-px bg-white/5 my-2 mx-3" />

        {/* 새 재생목록 버튼 */}
        <div className="px-3 py-2">
          <button className="flex items-center gap-4 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-all group">
            <Plus size={20} className="text-white/70 group-hover:text-white" />
            <span>새 재생목록</span>
          </button>
        </div>

        {/* 프로젝트 섹션 */}
        <div className="px-3 py-2">
          <div className="flex items-center justify-between px-3 py-1 mb-1">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
              프로젝트
            </span>
          </div>
          
          <ul className="space-y-0.5">
            {projects.map((project) => (
              <li key={project.id}>
                <NavLink
                  to={project.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all group ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:bg-white/5 hover:text-white/90"
                    }`
                  }
                >
                  <FolderOpen size={18} className="text-white/50 group-hover:text-white/70" />
                  <span className="truncate">{project.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 하단 사용자 정보 */}
      <div className="border-t border-white/5 p-3">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-all cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-semibold">
            DB
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">SEO DAN BI</p>
            <p className="text-xs text-white/50 truncate">sdb0504@naver.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
// import { NavLink, useLocation } from "react-router";
// import { motion } from "framer-motion";
// import { TOKENS } from "./theme/token";

// export function Nav() {
//   const location = useLocation();

//   const base =
//     "relative inline-flex h-10 items-center px-6 rounded-lg text-sm font-medium leading-none transition-colors";

//   const links = [
//     { to: "/", label: "Home" },
//     { to: "/about", label: "About" },
//     { to: "/stack", label: "Stack" },
//     { to: "/timeline", label: "Timeline" },
//     { to: "/projects", label: "Projects" },
//     { to: "/contact", label: "Contact" },
//   ];

//   return (
//     <nav
//       className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-2xl border px-3 backdrop-blur-xl"
//       style={{
//         background: "rgba(20,20,20,0.45)",
//         borderColor: TOKENS.colors.border,
//       }}
//     >
//       <ul className="relative flex items-center gap-1">
//         {links.map((l) => {
//           const isActive = location.pathname === l.to;
//           return (
//             <li key={l.to} className="relative">
//               <NavLink
//                 to={l.to}
//                 className={`${base} ${
//                   isActive ? "text-[#D6A26C]" : "text-white/80 hover:text-white"
//                 }`}
//               >
//                 {l.label}

//                 {isActive && (
//                   <motion.div
//                     layoutId="nav-highlight"
//                     className="absolute left-0 right-0 -bottom-1 mx-auto h-[3px] rounded-full"
//                     style={{
//                       background:
//                         "linear-gradient(90deg, #EBC592, #C47A3D, #9C6A32)",
//                       boxShadow: "0 0 10px rgba(196,122,61,0.4)",
//                     }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 500,
//                       damping: 30,
//                     }}
//                   />
//                 )}
//               </NavLink>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// }
