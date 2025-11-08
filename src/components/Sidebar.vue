<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme'

defineProps({
  profileName: String,
  profileImage: String
})

const isOpen = ref(false)
const activeSection = ref('profile')
const { isDark, toggleTheme } = useTheme()

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  isOpen.value = false // 모바일에서 클릭 후 사이드바 닫기
}

const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}

// 현재 보이는 섹션 감지
const updateActiveSection = () => {
  const sections = ['profile', 'experience', 'projects', 'skills']
  const scrollPosition = window.scrollY + 200 // 상단에서 200px 아래 지점 기준
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight

  // 페이지 하단 근처(마지막 100px)에 도달하면 마지막 섹션 활성화
  if (window.scrollY + windowHeight >= documentHeight - 100) {
    activeSection.value = sections[sections.length - 1]
    return
  }

  // 역순으로 검사하여 현재 스크롤 위치보다 위에 있는 섹션 중 가장 가까운 것 찾기
  for (let i = sections.length - 1; i >= 0; i--) {
    const sectionId = sections[i]
    const element = document.getElementById(sectionId)
    if (element && element.offsetTop <= scrollPosition) {
      activeSection.value = sectionId
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection() // 초기 상태 설정
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <!-- 모바일 햄버거 버튼 -->
  <button class="mobile-toggle" @click="toggleSidebar" :class="{ active: isOpen }">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <!-- 사이드바 -->
  <aside class="sidebar" :class="{ open: isOpen }">
    <div class="sidebar-content">
      <!-- 테마 토글 버튼 -->
      <button @click="toggleTheme" class="theme-toggle" :title="isDark ? '라이트 모드' : '다크 모드'">
        <span v-if="isDark">☀️</span>
        <span v-else>🌙</span>
      </button>

      <!-- 네비게이션 링크 -->
      <nav class="nav-links">
        <a @click="scrollToSection('profile')" class="nav-link" :class="{ active: activeSection === 'profile' }">프로필</a>
        <a @click="scrollToSection('experience')" class="nav-link" :class="{ active: activeSection === 'experience' }">경력</a>
        <a @click="scrollToSection('projects')" class="nav-link" :class="{ active: activeSection === 'projects' }">프로젝트</a>
        <a @click="scrollToSection('skills')" class="nav-link" :class="{ active: activeSection === 'skills' }">스킬</a>
      </nav>
    </div>
  </aside>

  <!-- 모바일 오버레이 -->
  <div class="sidebar-overlay" :class="{ active: isOpen }" @click="toggleSidebar"></div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  right: 0;
  top: 0;
  width: 80px;
  height: 100vh;
  background: var(--bg-dark);
  border-left: 1px solid var(--border);
  z-index: 1000;
  transition: transform 0.3s ease;
  overflow-y: auto;
  display: flex;
  align-items: center;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0;
}

/* 테마 토글 버튼 */
.theme-toggle {
  width: 50px;
  height: 50px;
  margin: 0 auto 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s;
}

.theme-toggle:hover {
  background: var(--bg-card-hover);
  transform: scale(1.1);
  box-shadow: 0 0 20px var(--glow);
}

/* 네비게이션 */
.nav-links {
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 0.5rem;
}

.nav-link {
  display: block;
  padding: 0.75rem 0.5rem;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 600;
  font-size: 0.75rem;
  text-align: center;
  writing-mode: horizontal-tb;
  position: relative;
}

.nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 0;
  background: var(--primary);
  transition: height 0.3s;
  border-radius: 0 3px 3px 0;
}

.nav-link.active {
  color: var(--primary);
  background: var(--bg-card);
}

.nav-link.active::before {
  height: 70%;
}

.nav-link:hover {
  background: var(--bg-card);
  color: var(--primary);
}

/* 모바일 토글 버튼 */
.mobile-toggle {
  display: none;
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 1100;
  width: 50px;
  height: 50px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 0;
  transition: all 0.3s;
}

.mobile-toggle:hover {
  background: var(--bg-card-hover);
  box-shadow: 0 0 20px var(--glow);
}

.mobile-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  transition: all 0.3s;
  border-radius: 2px;
}

.mobile-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* 모바일 오버레이 */
.sidebar-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  opacity: 0;
  transition: opacity 0.3s;
}

.sidebar-overlay.active {
  opacity: 1;
}

/* 반응형 */
@media (max-width: 1024px) {
  .sidebar {
    width: 200px;
    transform: translateX(100%);
    align-items: flex-start;
  }

  .sidebar.open {
    transform: translateX(0);
  }
  
  .nav-link {
    text-align: left;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }

  .mobile-toggle {
    display: flex;
    left: auto;
    right: 1.5rem;
  }

  .sidebar-overlay {
    display: block;
  }

  .sidebar-overlay:not(.active) {
    pointer-events: none;
  }
}

/* 스크롤바 스타일 */
.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: var(--bg-dark);
}

.sidebar::-webkit-scrollbar-thumb {
  background: var(--bg-card-hover);
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: var(--primary);
}
</style>

