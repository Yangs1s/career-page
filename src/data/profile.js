export const profile = {
  name: "양성진",
  title: "Frontend Developer",
  email: "sung5355@gmail.com",
  github: "github.com/yangs1s",
  linkedin: "linkedin.com/in/yangs1s",
  bio: "저는 팀의 생산성을 높이는 것을 좋아하는 개발자입니다. 팀원간의 소통과 협업을 중요하게 생각합니다.",
  image: "/career-page/my-profile.PNG", // GitHub Pages base URL 포함
  // Google Drive 이력서 다운로드 링크
  resumeUrl:
    "https://drive.google.com/file/d/1LBy8cyuObltogwkJJu2bQcLJHNpuhm0W/view?usp=drive_link",
  // 노션 경력기술서 링크
  notionUrl:
    "https://www.notion.so/2a709d8c37b880758a0dc9cc8d37e3d5?source=copy_link",
};

export const experience = [
  {
    company: "주식회사 지유",
    position: "Frontend Developer",
    period: "2024.10 - 2025.06",
    description: "프로젝트 참여 및 프론트엔드 개발, 유지보수",
  },
  {
    company: "아이덴잇",
    position: "Frontend Developer",
    period: "2023.06 - 2024.10",
    description: "프로젝트 참여 및 프론트엔드 개발, 유지보수",
  },
];

export const skills = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Vue.js" },
  { name: "Tanstack Query" },
  { name: "Zustand" },
  { name: "Jotai" },
  { name: "Tailwind" },
];

export const education = [
  {
    name: "항해플러스 프론트엔드 6기",
    status: "수료",
    period: "2025.07 - 2025.09",
  },
  {
    name: "가천대학교 전자공학과 (편입)",
    status: "졸업",
    period: "2017.03 - 2020.08",
  },
];

export const projects = [
  {
    type: "side",
    title: "사이드메이트",
    summary: "개발자 사이드 프로젝트 팀원 매칭 플랫폼",
    period: "2024.10 - 진행 중",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    image: "/career-page/mainpage.png",
    links: {
      demo: "https://sidemate.vercel.app",
      notion: "",
    },
    techDecisions: [
      {
        title: "알림 시스템 — WebSocket / SSE / 폴링 비교 후 폴링 선택",
        description:
          "사이드 프로젝트 규모의 특성상 실시간성보다 구현 안정성이 중요하다고 판단해 폴링을 선택했습니다. 단, 불필요한 요청을 최소화하는 방향으로 설계했습니다.",
        comparison: [
          { method: "WebSocket", realtime: "★★★", complexity: "높음", serverLoad: "커넥션 유지", selected: false },
          { method: "폴링", realtime: "★★☆", complexity: "낮음", serverLoad: "요청 단위", selected: true },
        ],
        optimizations: [
          {
            title: "① 폴링 대상 최소화 (payload 경량화)",
            description:
              "헤더 배지에는 미읽 카운트만 30초마다 요청합니다. 전체 알림 목록은 팝오버를 열 때만 조회해 불필요한 데이터 전송을 줄였습니다.",
            code: `// 미읽 카운트만 30초마다 폴링 (payload 최소화)
useEffect(() => {
  if (!isLoggedIn) return
  dispatch(fetchUnreadCount())
  const timer = setInterval(() => dispatch(fetchUnreadCount()), 30000)
  return () => clearInterval(timer)  // 메모리 누수 방지
}, [isLoggedIn])

// 팝오버 열릴 때만 전체 목록 조회 (lazy loading)
const handleOpen = (open: boolean) => {
  if (open) dispatch(fetchNotifications())
}`,
          },
          {
            title: "② BE 쿼리 최적화 제안",
            description:
              "3일 이내 데이터만 조회하고, Mongoose의 lean()을 적용해 불필요한 객체 변환 비용을 제거했습니다. 알림 목록은 읽기 전용으로만 사용되므로 POJO 반환이 적합했습니다.",
            code: `Notification.find({ receiver: userId, createdAt: { $gte: threeDaysAgo } })
  .sort({ createdAt: -1 })
  .populate('actor', 'name image')
  .lean()  // Mongoose 문서 대신 POJO 반환, 쿼리 성능 향상`,
          },
        ],
      },
    ],
    troubleshooting: [
      {
        title: "Axios 인터셉터로 API 호출 방식 통일화",
        background:
          "팀원마다 axios.get(), fetch() 등 API 호출 방식이 제각각이었고, 인증 토큰을 매번 수동으로 헤더에 추가하는 코드가 중복됐습니다. 또한 401 에러 처리가 각 컴포넌트에 흩어져 있어 유지보수가 어려웠습니다.",
        solution:
          "모든 API 호출을 단일 api.instance.ts로 통합해 JWT 자동 주입, 401/403 글로벌 핸들링을 중앙화했습니다.",
        code: "// api.instance.ts\nconst api = axios.create({\n  baseURL: import.meta.env.VITE_API_BASE_URL,\n  timeout: 60000,\n})\n\n// 요청 인터셉터: 모든 요청에 토큰 자동 주입\napi.interceptors.request.use((config) => {\n  const token = localStorage.getItem('token')\n  if (token) config.headers.Authorization = `Bearer ${token}`\n  return config\n})\n\n// 응답 인터셉터: 인증 에러 중앙 처리\napi.interceptors.response.use(null, (error) => {\n  const status = error.response?.status\n  if (status === 401) {\n    localStorage.removeItem('token')\n    window.location.href = '/login'\n  }\n  if (status === 403) {\n    window.location.href = '/403'\n  }\n  return Promise.reject(error)\n})",
      },
      {
        title: "계정 정지 알럿 미노출 버그 해결",
        background:
          "인터셉터 도입 후, 관리자가 정지한 계정으로 로그인하면 알럿 대신 /403 페이지로 튕기는 문제가 발생했습니다. 로그인 엔드포인트의 403과 권한 없음 403을 구분하지 못한 것이 원인이었습니다.",
        solution:
          "요청 URL을 확인해 로그인 엔드포인트의 403은 인터셉터를 통과시키고, 컴포넌트에서 직접 에러를 받아 알럿을 띄우도록 분기했습니다.",
        code: "if (status === 403) {\n  const url = error.config?.url || ''\n  // 로그인 관련 403은 컴포넌트로 에러 전달 (계정 정지 알럿)\n  if (url.includes('/login') || url.includes('/google')) {\n    return Promise.reject(error)\n  }\n  // 그 외 403은 권한 없음 페이지\n  window.location.href = '/403'\n}",
        before: "정지된 계정으로 로그인 시 /403 페이지로 튕김",
        after: "'계정이 정지되었습니다' 알럿이 정상 노출되고 로그인 페이지에 머뭄",
      },
      {
        title: "배너 활성 카운트 페이지 단위 오류 해결",
        background:
          "활성 배너를 최대 3개로 제한하는 요구사항이 있었습니다. 프론트에서 banners.filter(b => b.isActive).length로 활성 수를 계산했더니, 현재 페이지에 보이는 배너만 세는 버그가 발생했습니다.",
        solution:
          "BE에서 activeCount를 전체 기준으로 집계해 응답에 포함하고, 프론트는 이 값을 기준으로 Switch를 제어하도록 변경했습니다.",
        code: "// admin.controller.js\nconst activeCount = await Banner.countDocuments({ isActive: true })\nres.json({ banners, activeCount })  // 전체 기준 카운트 반환\n\n// AdminBanner.tsx — 전체 기준으로 Switch 비활성화\nconst MAX_ACTIVE = 3\n<Switch\n  checked={banner.isActive}\n  disabled={!banner.isActive && activeCount >= MAX_ACTIVE}\n  title={!banner.isActive && activeCount >= MAX_ACTIVE\n    ? '활성 배너는 최대 3개까지 설정할 수 있습니다.'\n    : undefined}\n/>",
        before: "현재 페이지 기준으로 활성 수를 계산해 3개 제한이 무력화됨",
        after: "페이지 관계없이 전체 배너 기준으로 활성 수를 정확히 제한",
      },
      {
        title: "배너 수정 시 목록 순서 변경 해결",
        background:
          "배너를 수정하면 updatedAt 기준 정렬로 인해 수정한 항목이 맨 위로 올라가는 UX 문제가 있었습니다. 관리자가 의도한 배치가 수정할 때마다 흐트러졌습니다.",
        solution:
          "정렬 기준을 isActive 우선, createdAt 내림차순으로 변경해 수정해도 위치가 유지되도록 했습니다.",
        code: "Banner.find().sort({ isActive: -1, createdAt: -1 })\n// 활성 배너 먼저 → 생성 순서 유지 → 수정해도 위치 안 변함",
        before: "배너 수정 시 updatedAt 기준으로 해당 항목이 목록 최상단으로 이동",
        after: "배너 수정 후에도 목록 순서가 유지되어 관리자가 의도한 배치가 보존됨",
      },
    ],
  },
  {
    type: "work",
    title: "모벤티스",
    summary: "운송업체 배송관리 시스템 ERP",
    period: "2024.11 - 2025.06",
    techStack: ["React", "TypeScript", "Jotai", "Tanstack-table", "Next.js"],
    links: {
      demo: "",
      notion:
        "https://www.notion.so/2a709d8c37b88167b612cb80d899fe2b?source=copy_link",
    },
    techDecisions: [
      {
        title: "설정 기반 범용 폼 컴포넌트 구조 설계",
        description:
          "도메인별 req 구조가 다양해 매번 폼을 새로 작성하는 비용이 컸습니다. 필드 타입·레이아웃·검증 규칙을 config로 정의하고, Jotai atom으로 페이지별 요청 값을 관리하는 설정 기반 범용 폼 구조를 도입했습니다.",
        result: "폼 코드량 약 60% 감소, 신규 도메인 폼 추가 비용 최소화",
      },
      {
        title: "엑셀 다운로드 컴포넌트 범용 구조 설계",
        description:
          "도메인별 컬럼명·값 표현 방식이 달라 매 도메인마다 다운로드 로직을 별도 작성해야 했습니다. 컬럼 매핑과 값 변환 로직을 외부에서 주입받는 범용 구조로 설계해 전 도메인에서 공통 사용할 수 있도록 했습니다.",
        result: "전 도메인 공통 사용, 선택·전체 다운로드 분기 및 대량 요청 방지 모달 적용",
      },
    ],
    troubleshooting: [
      {
        title: "배송기사 지정 지도 마커 렌더링 최적화",
        background:
          "초기 진입 시 150~1000개 마커를 일괄 렌더링해 최대 1.2s 프레임 드랍이 발생했습니다. 기사 전체 목록을 지도에 즉시 표시하는 요구사항이 원인이었습니다.",
        solution:
          "마커 노출 조건을 '기사 선택 시'로 재정의해 초기 렌더링 대상을 0개로 축소했습니다. 선택 전에는 리스트로만 기사를 탐색하고, 선택 후 지도에 마커가 표시됩니다.",
        before: "초기 진입 시 최대 1.2s 프레임 드랍, 지도 이동 버벅임",
        after: "초기 렌더링 대상 0개로 축소, 인터랙션 UX 개선",
      },
      {
        title: "필드 단위 리렌더링 최적화",
        background:
          "폼 내 필드가 많아 하나의 필드 값만 변경해도 전체 폼이 리렌더링되는 성능 이슈가 있었습니다.",
        solution:
          "React.memo 커스텀 비교 함수와 useCallback을 적용해 변경된 필드만 리렌더링되도록 최적화했습니다.",
        before: "필드 변경 시 전체 폼 리렌더링",
        after: "변경된 필드만 리렌더링, 불필요한 렌더링 제거",
      },
    ],
  },
  {
    type: "work",
    title: "식자재를 Eat-da",
    summary:
      "식자재 유통업자와 자영업자간의 구매판매를 연결해주는 플랫폼 서비스",
    period: "2024.06 - 2024.10",
    techStack: [
      "React",
      "TypeScript",
      "Jotai",
      "Tanstack-table",
      "Next.js",
      "SendBird SDK",
    ],
    links: {
      demo: "",
      notion:
        "https://www.notion.so/Eat-da-2d809d8c37b88041bd53e7e5a090163a?source=copy_link",
    },
    techDecisions: [
      {
        title: "채팅 기반 견적 프로세스 UX 설계",
        description:
          "채팅 화면을 이탈하지 않고 견적 협의부터 확정까지 진행할 수 있도록 커스텀 메시지 타입(가격 제안·수락·알림)을 설계했습니다. SendBird SDK를 활용해 견적 상태를 메시지 타입으로 표현하고, 채팅 내에서 인터랙션이 가능한 UX를 구현했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "중첩 테이블 요구사항 → 모달 기반 상세 UI로 대체",
        background:
          "주문·견적 데이터를 중첩 테이블로 표현하는 요구사항이 있었으나, 중첩 테이블은 반응형 대응이 복잡하고 셀 내 컨텐츠가 많을수록 레이아웃이 무너지는 문제가 있었습니다.",
        solution:
          "모달 기반 상세 UI로 대체해 복잡도를 낮추고 반응형 대응을 단순화했습니다. 테이블에서는 요약 정보만 보여주고, 상세 내용은 모달로 확인하도록 UX를 재설계했습니다.",
        before: "중첩 테이블로 인한 레이아웃 복잡도 및 반응형 대응 어려움",
        after: "모달 기반으로 단순화, 반응형 대응 용이 및 유지보수 비용 감소",
      },
    ],
  },
];
