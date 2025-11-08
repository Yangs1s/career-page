<script setup>
defineProps({
  experience: Array
})
</script>

<template>
  <section id="experience" class="section bg-alternate">
    <div class="container">
      <h2 class="section-title fade-in">경력</h2>
      <div class="timeline">
        <div v-for="(exp, index) in experience" :key="index" class="timeline-item fade-in">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>{{ exp.position }}</h3>
            <h4>{{ exp.company }}</h4>
            <span class="period">{{ exp.period }}</span>
            <p>{{ exp.description }}</p>
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

.timeline {
  position: relative;
  padding-left: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-dot {
  position: absolute;
  left: -3rem;
  top: 0.5rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 0 4px var(--bg-dark), 0 0 0 6px var(--primary);
}

.timeline-content {
  background: var(--bg-card);
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px var(--shadow);
  border: 1px solid var(--border);
  transition: transform 0.3s;
}

.timeline-content:hover {
  transform: translateX(10px);
}

.timeline-content h3 {
  color: var(--primary);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.timeline-content h4 {
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.period {
  color: var(--text-muted);
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 3rem 1rem;
  }
}
</style>

