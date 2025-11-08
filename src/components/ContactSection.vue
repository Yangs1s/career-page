<script setup>
defineProps({
  profile: Object
})
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title fade-in">연락하기</h2>
      <div class="contact-content fade-in">
        <p class="contact-text">새로운 기회나 협업에 관심이 있으시다면 언제든 연락주세요!</p>
        <div class="contact-links">
          <a :href="'mailto:' + profile.email" class="contact-btn">
            <span class="contact-icon">📧</span>
            {{ profile.email }}
          </a>
          <a :href="'https://' + profile.github" target="_blank" class="contact-btn">
            <span class="contact-icon">💻</span>
            GitHub
          </a>
          <a :href="'https://' + profile.linkedin" target="_blank" class="contact-btn">
            <span class="contact-icon">💼</span>
            LinkedIn
          </a>
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

.contact-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact-text {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--bg-card);
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 50px;
  border: 1px solid var(--border);
  box-shadow: 0 4px 6px var(--shadow);
  transition: all 0.3s;
  min-width: 250px;
  justify-content: center;
}

.contact-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 30px var(--glow);
  background: var(--primary);
  border-color: var(--primary);
  color: black;
}

.contact-icon {
  font-size: 1.5rem;
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

