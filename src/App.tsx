import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from 'framer-motion';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { Nav } from "./components/Nav";
import { RouteFallback } from "./spinner/RouteFallback";
import Pokemon from "./pages/Pokemon";
import MovieBox from "./pages/MovieBox";
import Pchedule from "./pages/Pchedule";
import StudyHub from "./pages/StudyHub";

const Landing = lazy(() => import("./pages/Landing"));
const Home = lazy(() => import("./pages/Home"));
const Explore = lazy(() => import("./pages/Explore"));
const Library = lazy(() => import("./pages/Library"));

const ROUTE_ORDER = ["/", "/home", "/explore", "/library"] as const;

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={
            <Suspense fallback={<RouteFallback />}>
              <Landing />
            </Suspense>
          }
        />
        <Route
          path="home"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="explore"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Explore />
            </Suspense>
          }
        />
        <Route
          path="library"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Library />
            </Suspense>
          }
        />
        <Route
          path="/projects/pokemon"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Pokemon />
            </Suspense>
          }
        />
        <Route
          path="/projects/moviebox"
          element={
            <Suspense fallback={<RouteFallback />}>
              <MovieBox />
            </Suspense>
          }
        />
        <Route
          path="/projects/pchedule"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Pchedule />
            </Suspense>
          }
        />
        <Route
          path="/projects/studyhub"
          element={
            <Suspense fallback={<RouteFallback />}>
              <StudyHub />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const [wheelLock, setWheelLock] = useState(false);
  const scrollAccumulator = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const prevLocationRef = useRef(location.pathname);

  const isLandingPage = location.pathname === "/";
  const isProjectDetailPage = location.pathname.startsWith("/projects/");

  // 랜딩↔홈 전환 체크
  const isLandingHomeTransition =
    (prevLocationRef.current === "/" && location.pathname === "/home") ||
    (prevLocationRef.current === "/home" && location.pathname === "/");

  useEffect(() => {
    prevLocationRef.current = location.pathname;
  }, [location.pathname]);

  // 페이지 전환 시 스크롤 최상단으로 이동
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  const goStep = useCallback(
    (dir: 1 | -1) => {
      const currentPath =
        location.pathname === "/" ? "/" : `/${location.pathname.split("/")[1]}`;
      const idx = ROUTE_ORDER.indexOf(
        currentPath as (typeof ROUTE_ORDER)[number]
      );

      if (idx === -1) return;

      const nextIdx = Math.min(ROUTE_ORDER.length - 1, Math.max(0, idx + dir));

      if (nextIdx !== idx) {
        navigate(ROUTE_ORDER[nextIdx]);
      }
    },
    [location.pathname, navigate]
  );

  useEffect(() => {
    if (isLandingPage || isProjectDetailPage) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goStep(1);
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goStep(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goStep, isLandingPage, isProjectDetailPage]);

  // 페이지 스크롤 끝 감지
  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    if (isLandingPage || wheelLock || isProjectDetailPage) return;
    if (!mainRef.current) return;

    const target = mainRef.current;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;
    const isAtTop = scrollTop <= 1;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

    const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

    // 너무 미세한 스크롤은 무시하게
    if (Math.abs(delta) < 10) return;

    // 페이지 끝에 도달했을 때만 페이지 전환
    if ((isAtBottom && delta > 0) || (isAtTop && delta < 0)) {
      // 스크롤 누적
      scrollAccumulator.current += delta;

      // 이전 타이머 제거
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // 일정 시간 후 누적값 초기화
      scrollTimeout.current = setTimeout(() => {
        scrollAccumulator.current = 0;
      }, 200);

      // 임계값 설정 - 더 크게 설정하여 실수로 넘어가는 것 방지
      const THRESHOLD = 300;

      // 누적 스크롤이 임계값을 넘으면 페이지 전환
      if (Math.abs(scrollAccumulator.current) >= THRESHOLD) {
        goStep(scrollAccumulator.current > 0 ? 1 : -1);
        scrollAccumulator.current = 0;

        setWheelLock(true);
        setTimeout(() => setWheelLock(false), 1000);
      }
    } else {
      // 페이지 중간에서는 누적값 초기화
      scrollAccumulator.current = 0;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0a0a0a]">
      <AnimatePresence mode="wait">
        {!isLandingPage && (
          <motion.div
            key="navbar"
            initial={isLandingHomeTransition ? { x: -240, opacity: 0 } : false}
            animate={{ x: 0, opacity: 1 }}
            exit={isLandingHomeTransition ? { x: -240, opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Nav />
          </motion.div>
        )}
      </AnimatePresence>
      
      <main 
        ref={mainRef}
        onWheel={handleWheel}
        className={`${isLandingPage ? "w-full" : "flex-1 ml-60"} overflow-y-auto h-screen`}
      >
        <AnimatedRoutes />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <AppShell />
      </MotionConfig>
    </Router>
  );
}
