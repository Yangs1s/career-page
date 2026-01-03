<script setup>
defineProps({
  projects: Array,
});
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title fade-in">주요 프로젝트</h2>
      <div class="project-list">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-item fade-in"
        >
          <div class="project-header">
            <h3 class="project-title">{{ project.title }}</h3>
            <a
              v-if="project.links.notion"
              :href="project.links.notion"
              target="_blank"
              class="project-link"
            >
              📝 프로젝트 설명
            </a>
          </div>
          <p class="project-summary">{{ project.summary }}</p>
          <div class="tech-tags">
            <span
              v-for="tech in project.techStack"
              :key="tech"
              class="tech-tag"
              >{{ tech }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 2rem 2rem 3rem;
  background: var(--bg-dark);
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-item {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.project-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.project-link {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.project-link:hover {
  color: var(--primary);
}

.project-summary {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  background: var(--bg-darker);
  border-radius: 4px;
  color: var(--text-muted);
  border: 1px solid var(--border);
}

@media (max-width: 480px) {
  .section {
    padding: 1.5rem 1rem 2rem;
  }

  .project-header {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
