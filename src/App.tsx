import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { Nav } from "./components/Nav";
import { RouteFallback } from "./components/spinner/RouteFallback";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Stack = lazy(() => import("./pages/Stack"));
const Timeline = lazy(() => import("./pages/Timeline"));

const ROUTE_ORDER = [
  "/",
  "/about",
  "/stack",
  "/timeline",
  "/projects",
  "/contact",
] as const;

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={
            <Suspense fallback={<RouteFallback />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="timeline"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Timeline />
            </Suspense>
          }
        />
        <Route
          path="projects"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<RouteFallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="stack"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Stack />
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
  }, [goStep]);

  // 휠로 페이지 넘기기 (가로 슬라이드 느낌)
  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    if (wheelLock) return;

    const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    if (Math.abs(delta) < 20) return; // 너무 미세한 스크롤은 무시

    goStep(delta > 0 ? 1 : -1);

    setWheelLock(true);
    setTimeout(() => setWheelLock(false), 600);
  };

  return (
    <div className="min-h-screen" onWheel={handleWheel}>
      <Nav />
      <AnimatedRoutes />
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
