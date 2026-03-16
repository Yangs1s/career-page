<script setup>
import { ref } from "vue";

defineProps({
  projects: Array,
});

const openSections = ref({});

const toggle = (key) => {
  openSections.value[key] = !openSections.value[key];
};

const isOpen = (key) => !!openSections.value[key];
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title fade-in">주요 프로젝트</h2>
      <div class="project-list">
        <div
          v-for="(project, pIdx) in projects"
          :key="pIdx"
          class="project-item fade-in"
        >
          <!-- 기본 정보 -->
          <div class="project-header">
            <div class="project-title-group">
              <h3 class="project-title">{{ project.title }}</h3>
              <span v-if="project.period" class="project-period">{{ project.period }}</span>
            </div>
            <div class="project-links">
              <a
                v-if="project.links.demo"
                :href="project.links.demo"
                target="_blank"
                class="project-link"
              >
                🔗 데모
              </a>
              <a
                v-if="project.links.notion"
                :href="project.links.notion"
                target="_blank"
                class="project-link"
              >
                📝 프로젝트 설명
              </a>
            </div>
          </div>
          <p class="project-summary">{{ project.summary }}</p>

          <!-- 프로젝트 이미지 -->
          <div v-if="project.image" class="project-image-wrap">
            <img :src="project.image" :alt="project.title + ' 화면'" class="project-image" />
          </div>

          <div class="tech-tags">
            <span v-for="tech in project.techStack" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>

          <!-- 기술적 의사결정 -->
          <div v-if="project.techDecisions?.length" class="detail-section">
            <button
              class="toggle-btn"
              @click="toggle(`${pIdx}-decisions`)"
            >
              <span class="toggle-label">⚙️ 기술적 의사결정</span>
              <span class="toggle-icon" :class="{ open: isOpen(`${pIdx}-decisions`) }">▾</span>
            </button>
            <div v-if="isOpen(`${pIdx}-decisions`)" class="toggle-content">
              <div
                v-for="(decision, dIdx) in project.techDecisions"
                :key="dIdx"
                class="decision-item"
              >
                <h4 class="detail-title">{{ decision.title }}</h4>
                <p class="detail-desc">{{ decision.description }}</p>

                <!-- 비교표 -->
                <table v-if="decision.comparison" class="comparison-table">
                  <thead>
                    <tr>
                      <th>방식</th>
                      <th>실시간성</th>
                      <th>구현 복잡도</th>
                      <th>서버 부하</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(row, rIdx) in decision.comparison"
                      :key="rIdx"
                      :class="{ selected: row.selected }"
                    >
                      <td>{{ row.method }}</td>
                      <td>{{ row.realtime }}</td>
                      <td>{{ row.complexity }}</td>
                      <td>{{ row.serverLoad }}</td>
                    </tr>
                  </tbody>
                </table>

                <!-- 결과 (result 필드) -->
                <p v-if="decision.result" class="result-tag">✓ {{ decision.result }}</p>

                <!-- 최적화 전략 -->
                <div
                  v-for="(opt, oIdx) in decision.optimizations"
                  :key="oIdx"
                  class="optimization-item"
                >
                  <p class="opt-title">{{ opt.title }}</p>
                  <p class="detail-desc">{{ opt.description }}</p>
                  <pre v-if="opt.code" class="code-block"><code>{{ opt.code }}</code></pre>
                </div>
              </div>
            </div>
          </div>

          <!-- 트러블슈팅 -->
          <div v-if="project.troubleshooting?.length" class="detail-section">
            <button
              class="toggle-btn"
              @click="toggle(`${pIdx}-troubleshooting`)"
            >
              <span class="toggle-label">🔧 트러블슈팅</span>
              <span class="toggle-icon" :class="{ open: isOpen(`${pIdx}-troubleshooting`) }">▾</span>
            </button>
            <div v-if="isOpen(`${pIdx}-troubleshooting`)" class="toggle-content">
              <div
                v-for="(item, tIdx) in project.troubleshooting"
                :key="tIdx"
                class="trouble-item"
              >
                <h4 class="detail-title">{{ tIdx + 1 }}. {{ item.title }}</h4>
                <div class="trouble-block">
                  <p class="trouble-label">배경</p>
                  <p class="detail-desc">{{ item.background }}</p>
                </div>
                <div class="trouble-block">
                  <p class="trouble-label">해결</p>
                  <p class="detail-desc">{{ item.solution }}</p>
                </div>
                <pre v-if="item.code" class="code-block"><code>{{ item.code }}</code></pre>
                <div v-if="item.before || item.after" class="before-after">
                  <span class="before-tag">before</span>
                  <span class="ba-text">{{ item.before }}</span>
                  <span class="after-tag">after</span>
                  <span class="ba-text">{{ item.after }}</span>
                </div>
              </div>
            </div>
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
  align-items: flex-start;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-title-group {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.project-period {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.project-image-wrap {
  margin: 0.75rem 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  max-height: 260px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}

.project-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
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
  margin-bottom: 0.75rem;
}

.tech-tag {
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  background: var(--bg-darker);
  border-radius: 4px;
  color: var(--text-muted);
  border: 1px solid var(--border);
}

/* 접기/펼치기 섹션 */
.detail-section {
  margin-top: 0.75rem;
}

.toggle-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: var(--bg-darker);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.55rem 0.85rem;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
  text-align: left;
}

.toggle-btn:hover {
  color: var(--text-primary);
  background: var(--bg-card);
}

.toggle-label {
  font-size: 0.875rem;
}

.toggle-icon {
  font-size: 1rem;
  transition: transform 0.2s;
  display: inline-block;
}

.toggle-icon.open {
  transform: rotate(180deg);
}

.toggle-content {
  padding: 1rem 0 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* 기술적 의사결정 */
.decision-item {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.detail-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.detail-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* 비교표 */
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.comparison-table th {
  background: var(--bg-darker);
  color: var(--text-muted);
  font-weight: 600;
  padding: 0.45rem 0.75rem;
  text-align: left;
  border: 1px solid var(--border);
}

.comparison-table td {
  padding: 0.4rem 0.75rem;
  border: 1px solid var(--border);
}

.comparison-table tr.selected td {
  color: var(--primary, #7c6ff7);
  font-weight: 600;
  background: color-mix(in srgb, var(--primary, #7c6ff7) 6%, transparent);
}

/* 결과 태그 */
.result-tag {
  font-size: 0.825rem;
  color: #22c55e;
  font-weight: 500;
  margin: 0;
}

/* 최적화 항목 */
.optimization-item {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-left: 0.75rem;
  border-left: 2px solid var(--border);
}

.opt-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

/* 코드 블록 */
.code-block {
  background: var(--bg-darker);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.85rem 1rem;
  font-size: 0.78rem;
  line-height: 1.6;
  color: var(--text-secondary);
  overflow-x: auto;
  white-space: pre;
  margin: 0;
  font-family: 'Fira Code', 'Courier New', monospace;
}

/* 트러블슈팅 */
.trouble-item {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border);
}

.trouble-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.trouble-block {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.trouble-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}

/* Before / After */
.before-after {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.3rem 0.6rem;
  align-items: baseline;
  font-size: 0.825rem;
}

.before-tag,
.after-tag {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  white-space: nowrap;
}

.before-tag {
  background: color-mix(in srgb, #ef4444 12%, transparent);
  color: #ef4444;
  border: 1px solid color-mix(in srgb, #ef4444 30%, transparent);
}

.after-tag {
  background: color-mix(in srgb, #22c55e 12%, transparent);
  color: #22c55e;
  border: 1px solid color-mix(in srgb, #22c55e 30%, transparent);
}

.ba-text {
  color: var(--text-secondary);
  line-height: 1.5;
}

@media (max-width: 480px) {
  .section {
    padding: 1.5rem 1rem 2rem;
  }

  .project-header {
    flex-direction: column;
    gap: 0.25rem;
  }

  .comparison-table {
    font-size: 0.72rem;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 0.3rem 0.5rem;
  }
}
</style>
