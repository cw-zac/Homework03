<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const activeTab = ref('about')

const tabs = [
  { id: 'about', label: '关于我', icon: 'fas fa-user' },
  { id: 'experience', label: '经历', icon: 'fas fa-briefcase' },
  { id: 'education', label: '教育', icon: 'fas fa-graduation-cap' }
]

const experiences = [
  {
    title: '高级前端开发工程师',
    company: '创新科技有限公司',
    period: '2022 - 至今',
    description: '负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目。',
    achievements: ['提升应用性能30%', '建立组件库系统', '指导5名初级开发者']
  },
  {
    title: '前端开发工程师',
    company: '数字创意工作室',
    period: '2020 - 2022',
    description: '参与多个企业级Web应用开发，专注于用户体验优化和响应式设计。',
    achievements: ['完成20+项目交付', '获得客户满意度95%', '优化页面加载速度50%']
  },
  {
    title: '实习前端开发',
    company: '互联网创业公司',
    period: '2019 - 2020',
    description: '学习并实践现代前端开发技术，参与产品原型设计和开发。',
    achievements: ['掌握Vue.js生态', '独立完成3个项目', '学习敏捷开发流程']
  }
]

const education = [
  {
    degree: '计算机科学与技术',
    school: '某知名大学',
    period: '2016 - 2020',
    description: '主修计算机科学，辅修设计学，GPA 3.8/4.0',
    highlights: ['优秀毕业生', '多次获得奖学金', '参与开源项目']
  },
  {
    degree: '前端开发认证',
    school: '在线教育平台',
    period: '2020',
    description: '完成Vue.js、React、TypeScript等现代前端技术认证',
    highlights: ['Vue.js高级认证', 'React专业认证', 'TypeScript专家认证']
  }
]

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )
  
  observer.observe(document.querySelector('#about'))
})
</script>

<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header" :class="{ 'visible': isVisible }">
        <h2 class="section-title">关于我</h2>
        <p class="section-subtitle">了解我的背景、经历和价值观</p>
      </div>
      
      <div class="about-content">
        <div class="about-image">
          <div class="image-wrapper">
            <div class="image-placeholder">
              <i class="fas fa-user-circle"></i>
            </div>
            <div class="image-decoration"></div>
          </div>
        </div>
        
        <div class="about-details">
          <div class="tab-navigation">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              @click="activeTab = tab.id"
              class="tab-button"
              :class="{ 'active': activeTab === tab.id }"
            >
              <i :class="tab.icon"></i>
              <span>{{ tab.label }}</span>
            </button>
          </div>
          
          <div class="tab-content">
            <!-- 关于我 -->
            <div v-if="activeTab === 'about'" class="tab-panel">
              <div class="about-text">
                <p>
                  我是一名充满热情的前端开发工程师，拥有5年的Web开发经验。
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
              
              <div class="personal-stats">
                <div class="stat-item">
                  <div class="stat-number">50+</div>
                  <div class="stat-label">完成项目</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">5</div>
                  <div class="stat-label">工作年限</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">20+</div>
                  <div class="stat-label">技术栈</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">100%</div>
                  <div class="stat-label">客户满意度</div>
                </div>
              </div>
            </div>
            
            <!-- 工作经历 -->
            <div v-if="activeTab === 'experience'" class="tab-panel">
              <div class="timeline">
                <div 
                  v-for="(exp, index) in experiences" 
                  :key="index"
                  class="timeline-item"
                  :class="{ 'visible': isVisible }"
                >
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <h3 class="timeline-title">{{ exp.title }}</h3>
                    <div class="timeline-meta">
                      <span class="company">{{ exp.company }}</span>
                      <span class="period">{{ exp.period }}</span>
                    </div>
                    <p class="timeline-description">{{ exp.description }}</p>
                    <ul class="achievements">
                      <li v-for="achievement in exp.achievements" :key="achievement">
                        <i class="fas fa-check"></i>
                        {{ achievement }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 教育背景 -->
            <div v-if="activeTab === 'education'" class="tab-panel">
              <div class="education-list">
                <div 
                  v-for="(edu, index) in education" 
                  :key="index"
                  class="education-item"
                  :class="{ 'visible': isVisible }"
                >
                  <div class="education-icon">
                    <i class="fas fa-graduation-cap"></i>
                  </div>
                  <div class="education-content">
                    <h3 class="education-degree">{{ edu.degree }}</h3>
                    <div class="education-meta">
                      <span class="school">{{ edu.school }}</span>
                      <span class="period">{{ edu.period }}</span>
                    </div>
                    <p class="education-description">{{ edu.description }}</p>
                    <div class="education-highlights">
                      <span 
                        v-for="highlight in edu.highlights" 
                        :key="highlight"
                        class="highlight-tag"
                      >
                        {{ highlight }}
                      </span>
                    </div>
                  </div>
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
.about {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.section-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-wrapper {
  position: relative;
  width: 250px;
  height: 250px;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  color: white;
  position: relative;
  z-index: 2;
}

.image-decoration {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
  border-radius: 50%;
  opacity: 0.3;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.5;
  }
}

.about-details {
  background: var(--bg-primary);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: var(--shadow-lg);
}

.tab-navigation {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-weight: 500;
  cursor: pointer;
  border-radius: 0.5rem 0.5rem 0 0;
  transition: all 0.3s ease;
  position: relative;
}

.tab-button:hover {
  color: var(--primary-color);
  background: var(--bg-secondary);
}

.tab-button.active {
  color: var(--primary-color);
  background: var(--bg-secondary);
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-color);
}

.tab-content {
  min-height: 400px;
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.personal-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 0.75rem;
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-2px);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-weight: 500;
}

.timeline {
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-color);
}

.timeline-item {
  position: relative;
  padding-left: 3rem;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease;
}

.timeline-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.timeline-marker {
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  background: var(--primary-color);
  border-radius: 50%;
  border: 3px solid var(--bg-primary);
}

.timeline-content {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: var(--shadow-sm);
}

.timeline-title {
  font-size: 1.2rem;
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

.timeline-description {
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

.achievements i {
  color: var(--primary-color);
  font-size: 0.8rem;
}

.education-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.education-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 0.75rem;
  box-shadow: var(--shadow-sm);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.education-item.visible {
  opacity: 1;
  transform: translateY(0);
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

.education-content {
  flex: 1;
}

.education-degree {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.education-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.school {
  color: var(--primary-color);
  font-weight: 500;
}

.education-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.education-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.highlight-tag {
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .image-wrapper {
    width: 200px;
    height: 200px;
  }
  
  .image-placeholder {
    font-size: 4rem;
  }
  
  .tab-navigation {
    flex-wrap: wrap;
  }
  
  .tab-button {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
  
  .personal-stats {
    grid-template-columns: 1fr;
  }
  
  .timeline-meta {
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .education-item {
    flex-direction: column;
    text-align: center;
  }
  
  .education-meta {
    justify-content: center;
  }
}
</style>
