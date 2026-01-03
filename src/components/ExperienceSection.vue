<script setup>
defineProps({
  experience: Array,
});
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section-title fade-in">회사 경력</h2>
      <div class="experience-list">
        <div
          v-for="(exp, index) in experience"
          :key="index"
          class="experience-item fade-in"
        >
          <div class="experience-header">
            <h3 class="company">{{ exp.company }}</h3>
            <span class="period">{{ exp.period }}</span>
          </div>
          <p class="position">{{ exp.position }}</p>
          <p class="description" v-if="exp.description">
            {{ exp.description }}
          </p>
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

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.experience-item {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.experience-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.company {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.period {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.position {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.description {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}

@media (max-width: 480px) {
  .section {
    padding: 1.5rem 1rem 2rem;
  }

  .experience-header {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
