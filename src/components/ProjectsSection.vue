<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  projects: Array
})
</script>

<template>
  <section id="projects" class="section bg-alternate">
    <div class="container">
      <h2 class="section-title fade-in">프로젝트</h2>
      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card fade-in">
          <div class="project-header">
            <h3>{{ project.title }}</h3>
            <span class="project-period" v-if="project.period">{{ project.period }}</span>
          </div>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.tech.slice(0, 3)" :key="tech" class="tech-tag">{{ tech }}</span>
            <span v-if="project.tech.length > 3" class="tech-more">+{{ project.tech.length - 3 }}</span>
          </div>
          <RouterLink :to="`/projects/${project.id}`" class="project-link">
            자세히 보기 →
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 5rem 2rem;
}

.bg-alternate {
  background: var(--bg-dark);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 6px var(--shadow);
  border: 1px solid var(--border);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 30px var(--glow);
  background: var(--bg-card-hover);
  border-color: var(--primary);
}

.project-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-header h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin: 0;
}

.project-period {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: var(--primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.tech-more {
  background: var(--bg-card-hover);
  color: var(--text-muted);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.project-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.project-link:hover {
  color: var(--secondary);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 3rem 1rem;
  }
}
</style>

