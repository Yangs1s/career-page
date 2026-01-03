<script setup>
defineProps({
  education: Array
})
</script>

<template>
  <section id="education" class="section">
    <div class="container">
      <h2 class="section-title fade-in">교육 및 학력</h2>
      <div class="education-list">
        <div v-for="(edu, index) in education" :key="index" class="education-item fade-in">
          <div class="education-header">
            <h3 class="name">{{ edu.name }}</h3>
            <span class="period">{{ edu.period }}</span>
          </div>
          <p class="status">{{ edu.status }}</p>
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

.education-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.education-item {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.education-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.period {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.status {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

@media (max-width: 480px) {
  .section {
    padding: 1.5rem 1rem 2rem;
  }

  .education-header {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>

