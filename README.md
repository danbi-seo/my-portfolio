# 🌟 Popol — Frontend Portfolio

경험 기반 UI/UX에 집중한 개인 포트폴리오 프로젝트입니다.  
React와 디자인 토큰을 활용해 **일관된 골드 테마**로 구성했습니다.

---

## 🔧 Tech Stack

- **React 19**, **TypeScript**, **Vite**
- **Tailwind CSS**, Lucide Icons
- **Framer Motion** (애니메이션)
- Vercel (Deploy)

---

## 🚀 Getting Started

### 1️⃣ Clone & Install

```bash
git clone https://github.com/KYUNG-BOK/popol.git
cd popol
npm install # or npm install
```

### 2️⃣ Run Dev Server

```bash
npm run dev
```

➡️ http://localhost:5173 자동 실행

### 3️⃣ Build

```bash
npm run build
```

---

## 📂 Folder Structure

```txt
src/
  components/
    timeline/       # Bootcamp timeline UI (bands, list 등 분리 구성)
    hero/           # GoldParticles 등 상징 요소
    typography/     # ShineText, 제목/텍스트 스타일
    Page.tsx        # 레이아웃 기반 컴포넌트
    Nav.tsx         # 상단 네비게이션
  data/
    bootcampTimeline.ts # 타임라인 일정 데이터
  utils/
    timeline.ts     # 공통 계산 로직 (퍼센트/날짜 변환 등)
  theme/
    token.ts        # 디자인 토큰 (골드 컬러 등)
  pages/
    Home.tsx
    Stack.tsx
    Projects.tsx
    Timeline.tsx
    Contact.tsx
  assets/           # 이미지, 아이콘 등
  main.tsx
  index.css
```

---

## ✨ Highlights

- **골드 테마 디자인 토큰** 기반 UI 일관성
- **Timeline 컴포넌트**: 정규 수업 + 병렬 활동 한눈에 확인 가능
- **Framer Motion 인터랙션** 자연스럽게 적용
- **사용자 중심 흐름** 강조한 프로젝트 카드 구성

---

## 🪪 License

MIT License © Kyung Bok Yoon
