<script setup>
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
          </div>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
          <a :href="project.link" class="project-link">자세히 보기 →</a>
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

.project-header h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
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
  color: black;
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

