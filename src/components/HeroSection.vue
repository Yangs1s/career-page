<script setup>
defineProps({
  profile: Object
})

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="hero-section">
    <div class="hero-container fade-in">
      <div class="hero-image-wrapper">
        <div class="hero-image">
          <img :src="profile.image" :alt="profile.name" v-if="profile.image" />
          <div class="hero-placeholder" v-else>
            <span>{{ profile.name.charAt(0) }}</span>
          </div>
        </div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">안녕하세요, <span class="gradient-text">{{ profile.name }}</span>입니다</h1>
        <p class="hero-subtitle">{{ profile.title }}</p>
        <p class="hero-bio">{{ profile.bio }}</p>
        <div class="hero-buttons">
          <button @click="scrollToSection('projects')" class="btn btn-primary">프로젝트 보기</button>
          <button @click="scrollToSection('contact')" class="btn btn-secondary">연락하기</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: var(--bg-dark);
  padding: 4rem 2rem;
}

.hero-container {
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 1000px;
  position: relative;
  z-index: 10;
}

.hero-image-wrapper {
  flex-shrink: 0;
}

.hero-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--primary);
  box-shadow: 0 0 30px var(--glow);
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  font-size: 5rem;
  font-weight: bold;
  color: black;
}

.hero-content {
  flex: 1;
  text-align: left;
  color: white;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.gradient-text {
  color: var(--primary);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.hero-bio {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.8;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: var(--primary);
  color: black;
  font-weight: 600;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: var(--bg-card);
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 50vh;
    padding: 3rem 2rem;
  }
  
  .hero-container {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .hero-image {
    width: 150px;
    height: 150px;
  }
  
  .hero-placeholder {
    font-size: 4rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: 50vh;
    padding: 2rem 1rem;
  }
  
  .hero-image {
    width: 120px;
    height: 120px;
  }
  
  .hero-placeholder {
    font-size: 3rem;
  }
  
  .hero-title {
    font-size: 1.75rem;
  }
}
</style>

