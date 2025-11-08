<script setup>
defineProps({
  profile: Object
})

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="profile" class="hero-section">
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
        
        <!-- 연락처 정보 -->
        <div class="contact-info">
          <a :href="'mailto:' + profile.email" class="contact-link">
            <span class="contact-icon">📧</span>
            {{ profile.email }}
          </a>
          <a :href="'https://' + profile.github" target="_blank" class="contact-link">
            <span class="contact-icon">💻</span>
            GitHub
          </a>
          <!-- <a :href="'https://' + profile.linkedin" target="_blank" class="contact-link">
            <span class="contact-icon">💼</span>
            LinkedIn
          </a> -->
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
  color: white;
}

.hero-content {
  flex: 1;
  text-align: left;
  color: var(--text-primary);
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
  margin-bottom: 1.5rem;
  opacity: 0.8;
  line-height: 1.6;
}

.contact-info {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--bg-card);
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 25px;
  border: 1px solid var(--border);
  font-size: 0.9rem;
  transition: all 0.3s;
}

.contact-link:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px var(--glow);
}

.contact-icon {
  font-size: 1.2rem;
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
  color: white;
  font-weight: 600;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border);
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
  
  .contact-info {
    justify-content: center;
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

