<script setup>
import { onMounted } from "vue";
import HeroSection from "../components/HeroSection.vue";
import ProjectSection from "../components/ProjectSection.vue";
import ExperienceSection from "../components/ExperienceSection.vue";
import EducationSection from "../components/EducationSection.vue";
import { useTheme } from "../composables/useTheme";
import {
  profile,
  experience,
  skills,
  education,
  projects,
} from "../data/profile.js";

const { isDark, toggleTheme } = useTheme();

// 스크롤 애니메이션
onMounted(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});
</script>

<template>
  <div class="career-page">
    <!-- 우측 상단 테마 토글 버튼 -->
    <button
      @click="toggleTheme"
      class="theme-toggle"
      :title="isDark ? '라이트 모드' : '다크 모드'"
    >
      <span v-if="isDark">☀️</span>
      <span v-else>🌙</span>
    </button>

    <div class="main-content">
      <HeroSection :profile="profile" :skills="skills" />
      <ProjectSection :projects="projects" />
      <ExperienceSection :experience="experience" />
      <EducationSection :education="education" />
    </div>
  </div>
</template>

<style scoped>
.career-page {
  min-height: 100vh;
  position: relative;
}

/* 우측 상단 테마 토글 */
.theme-toggle {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 1000;
  width: 44px;
  height: 44px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all 0.3s;
  box-shadow: 0 2px 8px var(--shadow);
}

.theme-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px var(--shadow);
}

.main-content {
  min-height: 100vh;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .main-content {
    padding: 0 1rem;
  }

  .theme-toggle {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }
}
</style>
