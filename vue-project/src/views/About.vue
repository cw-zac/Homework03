<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <div class="about-page">
    <!-- 页面头部 -->
    <section class="page-header">
      <div class="container">
        <div class="header-content" :class="{ 'visible': isVisible }">
          <h1 class="page-title">关于我</h1>
          <p class="page-subtitle">深入了解我的背景、经历和价值观</p>
        </div>
      </div>
    </section>

    <!-- 个人简介 -->
    <section class="personal-intro">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-text">
            <h2>我的故事</h2>
            <p>
              我是一名充满热情的前端开发工程师，拥有114514年的Web开发经验。
              我热爱创造美观、实用且高性能的用户界面，始终追求技术的创新和突破。
            </p>
            <p>
              除了编程，我还喜欢摄影、阅读和旅行。我相信这些经历丰富了我的创造力，
              让我能够从不同角度思考和解决问题。
            </p>
            <p>
              我的工作理念是：<strong>用代码改变世界，用设计美化生活</strong>。
              我始终相信技术的力量可以让世界变得更加美好。
            </p>
          </div>
          <div class="intro-image">
            <div class="image-placeholder">
              <i class="fas fa-user-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技能专长 -->
    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">核心技能</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>前端技术</h3>
            <ul>
              <li>Vue.js / React</li>
              <li>TypeScript / JavaScript</li>
              <li>HTML5 / CSS3</li>
              <li>响应式设计</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>设计能力</h3>
            <ul>
              <li>UI/UX设计</li>
              <li>原型设计</li>
              <li>视觉设计</li>
              <li>交互设计</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>工具使用</h3>
            <ul>
              <li>Git版本控制</li>
              <li>Figma设计工具</li>
              <li>Vite构建工具</li>
              <li>Node.js开发</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 工作经历 -->
    <section class="experience-section">
      <div class="container">
        <h2 class="section-title">工作经历</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>高级前端开发工程师</h3>
              <div class="timeline-meta">
                <span class="company">创新科技有限公司</span>
                <span class="period">2022 - 至今</span>
              </div>
              <p>负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目。</p>
              <ul class="achievements">
                <li>提升应用性能30%</li>
                <li>建立组件库系统</li>
                <li>指导5名初级开发者</li>
              </ul>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>前端开发工程师</h3>
              <div class="timeline-meta">
                <span class="company">数字创意工作室</span>
                <span class="period">2020 - 2022</span>
              </div>
              <p>参与多个企业级Web应用开发，专注于用户体验优化和响应式设计。</p>
              <ul class="achievements">
                <li>完成20+项目交付</li>
                <li>获得客户满意度95%</li>
                <li>优化页面加载速度50%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 教育背景 -->
    <section class="education-section">
      <div class="container">
        <h2 class="section-title">教育背景</h2>
        <div class="education-grid">
          <div class="education-item">
            <div class="education-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="education-content">
              <h3>计算机科学与技术</h3>
              <p class="school">某知名大学</p>
              <p class="period">2016 - 2020</p>
              <p class="description">主修计算机科学，辅修设计学，GPA 3.8/4.0</p>
            </div>
          </div>
          
          <div class="education-item">
            <div class="education-icon">
              <i class="fas fa-certificate"></i>
            </div>
            <div class="education-content">
              <h3>前端开发认证</h3>
              <p class="school">在线教育平台</p>
              <p class="period">2020</p>
              <p class="description">完成Vue.js、React、TypeScript等现代前端技术认证</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  text-align: center;
}

.header-content {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.header-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.personal-intro {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.intro-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.intro-text h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.intro-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.intro-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
}

.skills-section,
.experience-section,
.education-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
}

.skill-category h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  padding: 0.5rem 0;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
}

.skill-category li:last-child {
  border-bottom: none;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 2rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-color);
}

.timeline-item {
  position: relative;
  padding-left: 4rem;
  margin-bottom: 3rem;
}

.timeline-marker {
  position: absolute;
  left: 1rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  background: var(--primary-color);
  border-radius: 50%;
  border: 3px solid var(--bg-primary);
}

.timeline-content {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
}

.timeline-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.timeline-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.company {
  color: var(--primary-color);
  font-weight: 500;
}

.period {
  color: var(--text-secondary);
}

.timeline-content p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.achievements {
  list-style: none;
  padding: 0;
}

.achievements li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.achievements li::before {
  content: '✓';
  color: var(--primary-color);
  font-weight: bold;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.education-item {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.education-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.education-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.school {
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.period {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .intro-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline::before {
    left: 1rem;
  }
  
  .timeline-item {
    padding-left: 2.5rem;
  }
  
  .timeline-marker {
    left: 0.5rem;
  }
  
  .education-grid {
    grid-template-columns: 1fr;
  }
  
  .education-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
