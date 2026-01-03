<script setup>
defineProps({
  profile: Object,
  skills: Array,
});

// 기술 스택 아이콘 매핑 (devicon)
const skillIcons = {
  JavaScript: "javascript",
  TypeScript: "typescript",
  "Vue.js": "vuejs",
  React: "react",
  "React.js": "react",
  HTML: "html5",
  CSS: "css3",
  "Node.js": "nodejs",
  Git: "git",
  "Tanstack Query": "reactrouter", // 유사 아이콘
  Zustand: null,
  Jotai: null,
  Tailwind: "tailwindcss",
};

const getSkillIcon = skillName => {
  return skillIcons[skillName] || null;
};
</script>

<template>
  <section id="profile" class="hero-section">
    <div class="hero-container">
      <!-- 텍스트 콘텐츠 (왼쪽) -->
      <div class="hero-content">
        <!-- 타이틀 -->
        <h1 class="hero-title animate-item" style="--delay: 0">
          안녕하세요, <span class="gradient-text">{{ profile.name }}</span
          >입니다
        </h1>
        <p class="hero-subtitle animate-item" style="--delay: 1">
          {{ profile.title }}
        </p>
        <p class="hero-bio animate-item" style="--delay: 2">
          {{ profile.bio }}
        </p>

        <!-- 연락처 정보 -->
        <div class="contact-info animate-item" style="--delay: 3">
          <a :href="'mailto:' + profile.email" class="contact-link">
            <span class="contact-icon">📧</span>
            {{ profile.email }}
          </a>
          <a
            :href="'https://' + profile.github"
            target="_blank"
            class="contact-link"
          >
            <span class="contact-icon">💻</span>
            GitHub
          </a>
          <a
            v-if="profile.resumeUrl"
            :href="profile.resumeUrl"
            target="_blank"
            class="contact-link resume-link"
          >
            <span class="contact-icon">📄</span>
            이력서 다운로드
          </a>
        </div>

        <!-- 기술 스택 -->
        <div
          class="skills-section animate-item"
          style="--delay: 4"
          v-if="skills && skills.length"
        >
          <h3 class="skills-title">Tech Stack</h3>
          <div class="skills-list">
            <div
              v-for="(skill, index) in skills"
              :key="skill.name"
              class="skill-badge skill-animate"
              :style="{ '--skill-delay': index }"
              :title="skill.name"
            >
              <i
                v-if="getSkillIcon(skill.name)"
                :class="`devicon-${getSkillIcon(skill.name)}-plain colored`"
              ></i>
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 프로필 이미지 (오른쪽) -->
      <div
        class="hero-image-wrapper animate-item"
        style="--delay: 0"
        v-if="profile.image"
      >
        <div class="hero-image">
          <img :src="profile.image" :alt="profile.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 진입 애니메이션 */
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes skillPopIn {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-item {
  opacity: 0;
  animation: fadeSlideUp 0.5s ease-out forwards;
  animation-delay: calc(var(--delay) * 0.1s);
}

.skill-animate {
  opacity: 0;
  animation: skillPopIn 0.3s ease-out forwards;
  animation-delay: calc(0.5s + var(--skill-delay) * 0.06s);
}

.hero-section {
  min-height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: var(--bg-dark);
  padding: 3rem 2rem 2rem;
}

.hero-container {
  max-width: 800px;
  width: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
}

.hero-content {
  flex: 1;
  text-align: left;
  color: var(--text-primary);
}

/* 프로필 이미지 */
.hero-image-wrapper {
  flex-shrink: 0;
}

.hero-image {
  width: 240px;
  height: 540px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid var(--border);
  background: var(--bg-darker);
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.gradient-text {
  color: var(--primary);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.hero-bio {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  line-height: 1.7;
  padding: 1rem;
  background: var(--bg-darker);
  border-left: 3px solid var(--primary);
  border-radius: 0 8px 8px 0;
}

.contact-info {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--bg-card);
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 25px;
  border: 1px solid var(--border);
  font-size: 0.9rem;
  transition: all 0.3s;
}

.contact-link:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px var(--glow);
}

.contact-icon {
  font-size: 1.2rem;
}

/* 이력서 다운로드 버튼 강조 스타일 */
.resume-link {
  background: #2d3748;
  color: #fff;
  border-color: #2d3748;
  font-weight: 600;
}

.resume-link:hover {
  background: transparent;
  color: var(--text-primary);
  border-color: var(--primary);
  box-shadow: 0 5px 20px var(--glow);
}

/* 다크모드에서 이력서 버튼 */
:root.dark .resume-link {
  background: #e2e8f0;
  color: #1a202c;
  border-color: #e2e8f0;
}

:root.dark .resume-link:hover {
  background: transparent;
  color: #e2e8f0;
  border-color: #e2e8f0;
}

/* 기술 스택 섹션 */
.skills-section {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.skills-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--bg-darker);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: all 0.2s ease;
}

.skill-badge:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.skill-badge i {
  font-size: 1.25rem;
}

.skill-name {
  font-weight: 500;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: var(--primary);
  color: white;
  font-weight: 600;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border);
}

.btn-secondary:hover {
  background: var(--bg-card);
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .hero-image {
    width: 200px;
    height: 450px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 1.5rem 2rem;
  }

  .hero-container {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }

  .hero-content {
    text-align: center;
  }

  .hero-image {
    width: 200px;
    height: 280px;
  }

  .hero-title {
    font-size: 1.75rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-bio {
    text-align: left;
  }

  .contact-info {
    justify-content: center;
  }

  .skills-list {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 4rem 1rem 1.5rem;
  }

  .hero-title {
    font-size: 1.5rem;
  }

  .hero-image {
    width: 160px;
    height: 220px;
  }
}
</style>
