<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { projects } from '../data/profile.js'

const router = useRouter()
const route = useRoute()

const project = computed(() => {
  return projects.find(p => p.id === route.params.id)
})

const goBack = () => {
  router.push('/')
}

const getTeamLabel = (key) => {
  const labels = {
    frontend: '프론트',
    backend: '백엔드',
    full: '풀스택',
  }
  return labels[key] || key
}
</script>

<template>
  <div class="project-detail-page">
    <!-- 뒤로가기 버튼 -->
    <button @click="goBack" class="back-arrow" title="뒤로가기">
      ←
    </button>

    <!-- 프로젝트가 없을 때 -->
    <div v-if="!project" class="not-found">
      <h1>프로젝트를 찾을 수 없습니다</h1>
      <button @click="goBack" class="btn btn-primary">홈으로 돌아가기</button>
    </div>

    <!-- 프로젝트 상세 -->
    <div v-else class="project-detail">
      <!-- 좌측 사이드 정보 -->
      <aside class="project-sidebar">
        <div class="sidebar-content">
          <div class="sidebar-header">
            <h1 class="project-title">{{ project.title }}</h1>
            <p class="project-subtitle" v-if="project.subtitle">{{ project.subtitle }}</p>
          </div>

          <div class="sidebar-info">
            <div class="info-item">
              <span class="info-label">기간</span>
              <span class="info-value">{{ project.period }}</span>
            </div>

            <div class="info-item">
              <span class="info-label">기술 스택</span>
              <div class="tech-stack">
                <span v-for="tech in project.tech" :key="tech" class="tech-item">{{ tech }}</span>
              </div>
            </div>

            <div v-if="project.team" class="info-item">
              <span class="info-label">프로젝트 인원</span>
              <div class="team-info">
                <span v-for="(value, key, index) in project.team" :key="key">
                  {{ getTeamLabel(key) }} {{ value }}명<template v-if="index < Object.keys(project.team).length - 1">, </template>
                </span>
              </div>
            </div>
          </div>

          <!-- 링크 -->
          <div v-if="project.links && (project.links.github || project.links.demo || project.links.website)" class="sidebar-links">
            <a v-if="project.links.github" :href="project.links.github" target="_blank" class="link-btn">
              💻 GitHub
            </a>
            <a v-if="project.links.demo" :href="project.links.demo" target="_blank" class="link-btn">
              🚀 데모
            </a>
            <a v-if="project.links.website" :href="project.links.website" target="_blank" class="link-btn">
              🌐 웹사이트
            </a>
          </div>
        </div>
      </aside>

      <!-- 우측 상세 내용 -->
      <main class="project-content">


        <!-- 담당 업무 -->
        <div v-if="project.responsibilities" class="responsibilities-section">
          <section v-for="(resp, index) in project.responsibilities" :key="index" class="responsibility-item">
            <h2 class="section-title">{{ resp.title }}</h2>
            <ul class="content-list">
              <li v-for="(item, idx) in resp.items" :key="idx">{{ item }}</li>
            </ul>
          </section>
        </div>

        <!-- 기존 데이터 구조 호환 (features, role, challenges, achievements) -->
      </main>
    </div>
  </div>
</template>

<style scoped>
.project-detail-page {
  min-height: 100vh;
  background: var(--bg-dark);
  position: relative;
}

/* 뒤로가기 화살표 버튼 */
.back-arrow {
  position: fixed;
  top: 2rem;
  left: 2rem;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--text-muted);
  font-size: 1.3rem;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: none;
}

.back-arrow:hover {
  background: transparent;
  border-color: var(--text-primary);
  color: var(--text-primary);
  transform: translateX(-3px);
  box-shadow: none;
}

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 2rem;
}

.not-found h1 {
  color: var(--text-primary);
  font-size: 2rem;
}

.project-detail {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  gap: 0;
  min-height: 100vh;
}

/* 좌측 사이드바 */
.project-sidebar {
  width: 280px;
  background: transparent;
  border-right: 1px solid var(--border);
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.sidebar-content {
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.sidebar-header {
  padding-bottom: 0;
  border-bottom: none;
}

.project-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.project-subtitle {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
  font-weight: 400;
}

.sidebar-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.info-value {
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: 400;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  line-height: 1.8;
}

.tech-item {
  font-size: 0.85rem;
  color: var(--text-secondary);
  display: inline;
}

.tech-item::before {
  content: '·';
  color: var(--text-muted);
  margin: 0 0.5rem;
}

.tech-item:first-child::before {
  content: '';
  margin: 0;
}

.team-info {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.7;
  font-weight: 400;
}

.team-info span {
  display: inline;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0;
  border-top: none;
}

/* 우측 콘텐츠 */
.project-content {
  flex: 1;
  padding: 3rem 4rem;
  overflow-y: auto;
  max-width: 900px;
}

.project-image {
  margin-bottom: 2rem;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.project-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* 새로운 responsibilities 스타일 */
.responsibilities-section {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.responsibility-item {
  background: transparent;
  padding: 0;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid var(--border);
  padding-bottom: 3rem;
}

.responsibility-item:last-child {
  border-bottom: none;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  padding-bottom: 0;
  border-bottom: none;
  letter-spacing: -0.01em;
}

.content-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.content-list li {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 0.95rem;
  padding-left: 1.5rem;
  position: relative;
  font-weight: 400;
}

.content-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--text-muted);
  font-size: 1.2rem;
  line-height: 1.8;
}

/* 기존 detail-section 스타일 (호환성) */
.detail-section {
  background: var(--bg-card);
  padding: 1.5rem;
  border-radius: 15px;
  margin-bottom: 1.5rem;
  border: 1px solid var(--border);
}

.detail-section h2 {
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 700;
}

.detail-section p {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
}

.feature-list,
.achievement-list {
  list-style: none;
  padding: 0;
}

.feature-list li,
.achievement-list li {
  color: var(--text-secondary);
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
  font-size: 0.95rem;
}

.feature-list li::before,
.achievement-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: bold;
  font-size: 1rem;
}

.challenge-list {
  list-style: none;
  padding: 0;
}

.challenge-list li {
  margin-bottom: 1rem;
  padding: 1rem;
  background: var(--bg-dark);
  border-radius: 10px;
  border: 1px solid var(--border);
}

.challenge-list li:last-child {
  margin-bottom: 0;
}

.challenge-list li strong {
  color: var(--primary);
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.challenge-list li p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  background: transparent;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 0;
  font-weight: 500;
  font-size: 0.85rem;
  border: none;
  border-bottom: 1px solid transparent;
  transition: all 0.3s;
}

.link-btn:hover {
  background: transparent;
  border-bottom-color: var(--primary);
  color: var(--primary);
  transform: none;
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
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* Scrollbar 스타일 */
.project-sidebar::-webkit-scrollbar,
.project-content::-webkit-scrollbar {
  width: 6px;
}

.project-sidebar::-webkit-scrollbar-track,
.project-content::-webkit-scrollbar-track {
  background: var(--bg-dark);
}

.project-sidebar::-webkit-scrollbar-thumb,
.project-content::-webkit-scrollbar-thumb {
  background: var(--bg-card-hover);
  border-radius: 3px;
}

.project-sidebar::-webkit-scrollbar-thumb:hover,
.project-content::-webkit-scrollbar-thumb:hover {
  background: var(--primary);
}

@media (max-width: 1024px) {
  .back-arrow {
    top: 1.5rem;
    left: 1.5rem;
  }

  .project-detail {
    flex-direction: column;
  }

  .project-sidebar {
    width: 100%;
    position: relative;
    top: 0;
    height: auto;
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  .sidebar-content {
    padding: 2rem;
  }

  .project-content {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .back-arrow {
    top: 1rem;
    left: 1rem;
    width: 36px;
    height: 36px;
    font-size: 1.2rem;
  }

  .project-title {
    font-size: 1.3rem;
  }

  .section-title {
    font-size: 0.95rem;
  }

  .content-list li {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .sidebar-content {
    padding: 2rem 1.5rem;
  }

  .project-content {
    padding: 2rem 1.5rem;
  }

  .responsibilities-section {
    gap: 3rem;
  }

  .responsibility-item {
    padding-bottom: 2rem;
  }
}
</style>

