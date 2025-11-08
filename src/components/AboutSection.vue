<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title fade-in">About Me</h2>
      <div class="about-content fade-in">
        <div class="about-card">
          <div class="card-icon">💼</div>
          <h3>전문성</h3>
          <p>5년 이상의 실무 경험을 바탕으로 한 전문적인 개발 능력</p>
        </div>
        <div class="about-card">
          <div class="card-icon">🚀</div>
          <h3>혁신</h3>
          <p>최신 기술을 활용한 창의적인 솔루션 개발</p>
        </div>
        <div class="about-card">
          <div class="card-icon">🎯</div>
          <h3>목표지향</h3>
          <p>명확한 목표 설정과 체계적인 문제 해결</p>
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

.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.about-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px var(--shadow);
  border: 1px solid var(--border);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.about-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 30px var(--glow);
  background: var(--bg-card-hover);
  border-color: var(--primary);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.about-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.about-card p {
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 3rem 1rem;
  }
}
</style>

