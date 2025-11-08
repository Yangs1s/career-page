# My Career Page 🚀

모던하고 아름다운 개인 커리어 포트폴리오 페이지입니다.

## ✨ 주요 기능

- 🎨 **모던한 디자인**: 그라데이션과 글래스모피즘 효과
- 📱 **반응형 레이아웃**: 모바일, 태블릿, 데스크톱 완벽 지원
- 🌊 **부드러운 애니메이션**: 스크롤 기반 페이드인 효과
- 🧩 **모듈화된 구조**: 컴포넌트별로 깔끔하게 분리
- ⚡ **빠른 성능**: Vite 기반 빌드 시스템

## 📁 프로젝트 구조

```
src/
├── components/          # Vue 컴포넌트
│   ├── Navbar.vue      # 상단 네비게이션
│   ├── HeroSection.vue # 메인 히어로 섹션
│   ├── AboutSection.vue # 소개 섹션
│   ├── ExperienceSection.vue # 경력 섹션
│   ├── SkillsSection.vue # 기술 스택 섹션
│   ├── ProjectsSection.vue # 프로젝트 섹션
│   ├── ContactSection.vue # 연락처 섹션
│   └── FooterSection.vue # 푸터
├── data/
│   └── profile.js      # 개인 정보 데이터 (여기를 수정하세요!)
├── styles/
│   └── global.css      # 전역 스타일 및 CSS 변수
├── App.vue             # 메인 앱 컴포넌트
└── main.js             # 앱 진입점
```

## 🚀 시작하기

### 설치

```sh
pnpm install
```

### 개발 서버 실행

```sh
pnpm dev
```

브라우저에서 `http://localhost:5173`으로 접속하세요.

### 프로덕션 빌드

```sh
pnpm build
```

## ✏️ 개인화하기

`src/data/profile.js` 파일을 수정해서 자신의 정보를 입력하세요:

```javascript
export const profile = {
  name: '당신의 이름',
  title: '당신의 직책',
  email: 'your@email.com',
  github: 'github.com/yourusername',
  linkedin: 'linkedin.com/in/yourusername',
  bio: '자신을 소개하는 문구'
}

export const experience = [
  // 경력 정보 추가
]

export const skills = [
  // 기술 스택 추가
]

export const projects = [
  // 프로젝트 정보 추가
]
```

## 🎨 스타일 커스터마이징

`src/styles/global.css`에서 CSS 변수를 수정해서 색상을 변경할 수 있습니다:

```css
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  /* ... 더 많은 변수들 */
}
```

## 🛠 기술 스택

- **Vue 3**: 프론트엔드 프레임워크
- **Vite**: 빌드 도구
- **CSS3**: 스타일링 (Flexbox, Grid, Animations)

## 🚀 GitHub Pages 배포하기

### 자동 배포 (권장)

1. **GitHub 저장소 생성 및 푸시**

```bash
cd my-career-page
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

2. **GitHub Pages 설정**
   - GitHub 저장소 → Settings → Pages
   - Source: GitHub Actions 선택
   - 자동으로 배포 시작됨

3. **base URL 수정** (중요!)
   
   `vite.config.js`에서 저장소 이름에 맞게 수정:
   
   ```javascript
   base: '/your-repo-name/',  // 저장소 이름으로 변경
   // 또는 username.github.io 저장소라면
   base: '/',
   ```

4. **배포 완료!**
   - URL: `https://your-username.github.io/your-repo-name/`
   - 또는: `https://your-username.github.io/` (username.github.io 저장소의 경우)

### 수동 배포 (선택사항)

gh-pages 패키지를 사용한 수동 배포:

```bash
# gh-pages 패키지 설치
pnpm add -D gh-pages

# 빌드 & 배포
pnpm run deploy
```

## 📝 라이센스

개인 및 상업적 용도로 자유롭게 사용하세요!
