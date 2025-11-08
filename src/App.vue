<script setup>
import { onMounted } from 'vue'
import Sidebar from './components/Sidebar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import { profile, experience, skills, projects } from './data/profile.js'

// 스크롤 애니메이션
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
})
</script>

<template>
  <div class="career-page">
    <Sidebar :profile-name="profile.name" :profile-image="profile.image" />
    <div class="main-content">
      <HeroSection :profile="profile" />
      <AboutSection />
      <ExperienceSection :experience="experience" />
      <SkillsSection :skills="skills" />
      <ProjectsSection :projects="projects" />
      <ContactSection :profile="profile" />
      <FooterSection :profile-name="profile.name" />
    </div>
  </div>
</template>

<style>
.career-page {
  min-height: 100vh;
}

.main-content {
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 calc(3rem + 40px) 0 3rem;
}

@media (max-width: 1024px) {
  .main-content {
    padding: 0 2rem;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 0 1rem;
  }
}
</style>
