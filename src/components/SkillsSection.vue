<script setup>
defineProps({
  skills: Array
})
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title fade-in">기술 스택</h2>
      <div class="skills-grid fade-in">
        <div v-for="skill in skills" :key="skill.name" class="skill-item">
          <div class="skill-header">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-percentage">{{ skill.level }}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 5rem 2rem;
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-item {
  background: var(--bg-card);
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px var(--shadow);
  border: 1px solid var(--border);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 600;
  color: var(--text-primary);
}

.skill-percentage {
  color: var(--primary);
  font-weight: 700;
}

.skill-bar {
  height: 10px;
  background: var(--bg-card);
  border-radius: 10px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: var(--primary);
  border-radius: 10px;
  transition: width 1s ease-in-out;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 3rem 1rem;
  }
}
</style>

