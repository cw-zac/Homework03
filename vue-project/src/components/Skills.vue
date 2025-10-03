<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const hoveredSkill = ref(null)

const skillCategories = [
  {
    name: '前端技术',
    icon: 'fas fa-code',
    skills: [
      { name: 'Vue.js', level: 95, color: '#4FC08D' },
      { name: 'React', level: 90, color: '#61DAFB' },
      { name: 'JavaScript', level: 95, color: '#F7DF1E' },
      { name: 'TypeScript', level: 85, color: '#3178C6' },
      { name: 'HTML5', level: 98, color: '#E34F26' },
      { name: 'CSS3', level: 95, color: '#1572B6' }
    ]
  },
  {
    name: '工具与框架',
    icon: 'fas fa-tools',
    skills: [
      { name: 'Vite', level: 90, color: '#646CFF' },
      { name: 'Webpack', level: 80, color: '#8DD6F9' },
      { name: 'Git', level: 85, color: '#F05032' },
      { name: 'Node.js', level: 75, color: '#339933' },
      { name: 'Docker', level: 70, color: '#2496ED' },
      { name: 'Figma', level: 85, color: '#F24E1E' }
    ]
  },
  {
    name: '设计技能',
    icon: 'fas fa-palette',
    skills: [
      { name: 'UI/UX设计', level: 90, color: '#FF6B6B' },
      { name: '响应式设计', level: 95, color: '#4ECDC4' },
      { name: '原型设计', level: 85, color: '#45B7D1' },
      { name: '交互设计', level: 80, color: '#96CEB4' },
      { name: '视觉设计', level: 75, color: '#FFEAA7' },
      { name: '品牌设计', level: 70, color: '#DDA0DD' }
    ]
  }
]

const softSkills = [
  {
    name: '团队协作',
    description: '善于与不同背景的团队成员合作，具备良好的沟通能力',
    icon: 'fas fa-users'
  },
  {
    name: '问题解决',
    description: '具备强大的分析和解决问题的能力，能够快速定位和解决技术难题',
    icon: 'fas fa-lightbulb'
  },
  {
    name: '持续学习',
    description: '保持对新技术的敏感度，不断学习和掌握前沿技术',
    icon: 'fas fa-graduation-cap'
  },
  {
    name: '创新思维',
    description: '能够提出创新的解决方案，为项目带来新的价值',
    icon: 'fas fa-rocket'
  }
]

const certifications = [
  {
    name: 'Vue.js认证开发者',
    issuer: 'Vue官方',
    date: '2023',
    icon: 'fab fa-vuejs'
  },
  {
    name: 'Google UX设计证书',
    issuer: 'Google',
    date: '2022',
    icon: 'fab fa-google'
  },
  {
    name: 'AWS云计算基础',
    issuer: 'Amazon',
    date: '2023',
    icon: 'fab fa-aws'
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
  
  observer.observe(document.querySelector('#skills'))
})

const getSkillLevelClass = (level) => {
  if (level >= 90) return 'expert'
  if (level >= 75) return 'advanced'
  if (level >= 60) return 'intermediate'
  return 'beginner'
}
</script>

<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-header" :class="{ 'visible': isVisible }">
        <h2 class="section-title">技能专长</h2>
        <p class="section-subtitle">我的技术栈和专业能力</p>
      </div>
      
      <div class="skills-grid">
        <!-- 技术技能 -->
        <div class="skills-category">
          <h3 class="category-title">技术技能</h3>
          <div class="categories-container">
            <div 
              v-for="category in skillCategories" 
              :key="category.name"
              class="category-card"
              :class="{ 'visible': isVisible }"
            >
              <div class="category-header">
                <i :class="category.icon"></i>
                <h4>{{ category.name }}</h4>
              </div>
              
              <div class="skills-list">
                <div 
                  v-for="skill in category.skills" 
                  :key="skill.name"
                  class="skill-item"
                  @mouseenter="hoveredSkill = skill.name"
                  @mouseleave="hoveredSkill = null"
                >
                  <div class="skill-info">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-level">{{ skill.level }}%</span>
                  </div>
                  <div class="skill-bar">
                    <div 
                      class="skill-progress"
                      :class="getSkillLevelClass(skill.level)"
                      :style="{ 
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                        boxShadow: hoveredSkill === skill.name ? `0 0 20px ${skill.color}` : 'none'
                      }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 软技能 -->
        <div class="soft-skills">
          <h3 class="category-title">软技能</h3>
          <div class="soft-skills-grid">
            <div 
              v-for="skill in softSkills" 
              :key="skill.name"
              class="soft-skill-card"
              :class="{ 'visible': isVisible }"
            >
              <div class="skill-icon">
                <i :class="skill.icon"></i>
              </div>
              <h4 class="skill-title">{{ skill.name }}</h4>
              <p class="skill-description">{{ skill.description }}</p>
            </div>
          </div>
        </div>
        
        <!-- 认证证书 -->
        <div class="certifications">
          <h3 class="category-title">认证证书</h3>
          <div class="certifications-list">
            <div 
              v-for="cert in certifications" 
              :key="cert.name"
              class="cert-card"
              :class="{ 'visible': isVisible }"
            >
              <div class="cert-icon">
                <i :class="cert.icon"></i>
              </div>
              <div class="cert-content">
                <h4 class="cert-name">{{ cert.name }}</h4>
                <p class="cert-issuer">{{ cert.issuer }}</p>
                <span class="cert-date">{{ cert.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 技能统计 -->
      <div class="skills-stats" :class="{ 'visible': isVisible }">
        <div class="stat-card">
          <div class="stat-icon">
            <i class="fas fa-code"></i>
          </div>
          <div class="stat-content">
            <div class="stat-number">15+</div>
            <div class="stat-label">编程语言</div>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">
            <i class="fas fa-project-diagram"></i>
          </div>
          <div class="stat-content">
            <div class="stat-number">50+</div>
            <div class="stat-label">完成项目</div>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">
            <i class="fas fa-clock"></i>
          </div>
          <div class="stat-content">
            <div class="stat-number">10,000+</div>
            <div class="stat-label">编程小时</div>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">
            <i class="fas fa-trophy"></i>
          </div>
          <div class="stat-content">
            <div class="stat-number">5</div>
            <div class="stat-label">专业认证</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 6rem 0;
  background: var(--bg-primary);
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

.skills-grid {
  display: grid;
  gap: 3rem;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--text-primary);
  text-align: center;
}

.categories-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.category-card {
  background: var(--bg-secondary);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: var(--shadow-md);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.category-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.category-header i {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.category-header h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  cursor: pointer;
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateX(5px);
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 500;
  color: var(--text-primary);
}

.skill-level {
  font-weight: 600;
  color: var(--primary-color);
}

.skill-bar {
  width: 100%;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  border-radius: 4px;
  transition: all 0.8s ease;
  position: relative;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.skill-progress.expert {
  background: linear-gradient(135deg, #4FC08D, #45B7D1);
}

.skill-progress.advanced {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
}

.skill-progress.intermediate {
  background: linear-gradient(135deg, #f59e0b, #f97316);
}

.skill-progress.beginner {
  background: linear-gradient(135deg, #ef4444, #f87171);
}

.soft-skills {
  margin: 3rem 0;
}

.soft-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.soft-skill-card {
  background: var(--bg-secondary);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.soft-skill-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.soft-skill-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.skill-icon {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  color: white;
}

.skill-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.skill-description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.9rem;
}

.certifications {
  margin: 3rem 0;
}

.certifications-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.cert-card {
  background: var(--bg-secondary);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.cert-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.cert-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.cert-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  flex-shrink: 0;
}

.cert-content {
  flex: 1;
}

.cert-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
}

.cert-issuer {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.cert-date {
  color: var(--primary-color);
  font-weight: 500;
  font-size: 0.9rem;
}

.skills-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.skills-stats.visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-card {
  background: var(--bg-secondary);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.stat-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .categories-container {
    grid-template-columns: 1fr;
  }
  
  .soft-skills-grid {
    grid-template-columns: 1fr;
  }
  
  .certifications-list {
    grid-template-columns: 1fr;
  }
  
  .cert-card {
    flex-direction: column;
    text-align: center;
  }
  
  .skills-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stat-card {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
}
</style>
