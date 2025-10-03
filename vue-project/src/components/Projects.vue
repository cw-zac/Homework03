<script setup>
import { ref, onMounted, computed } from 'vue'

const isVisible = ref(false)
const activeFilter = ref('all')
const hoveredProject = ref(null)

const filters = [
  { id: 'all', label: '全部项目', count: 0 },
  { id: 'web', label: 'Web应用', count: 0 },
  { id: 'mobile', label: '移动应用', count: 0 },
  { id: 'design', label: '设计作品', count: 0 },
  { id: 'tool', label: '开发工具', count: 0 }
]

const projects = [
  {
    id: 1,
    title: '智能电商平台',
    description: '基于Vue3 + TypeScript构建的现代化电商平台，集成支付、物流、用户管理等完整功能。',
    image: '/api/placeholder/400/300',
    category: 'web',
    technologies: ['Vue3', 'TypeScript', 'Pinia', 'Vite', 'TailwindCSS'],
    features: ['响应式设计', 'PWA支持', '实时通信', '支付集成'],
    demoUrl: '#',
    githubUrl: '#',
    status: 'completed',
    featured: true
  },
  {
    id: 2,
    title: '任务管理应用',
    description: '简洁高效的任务管理工具，支持团队协作、时间跟踪和项目管理功能。',
    image: '/api/placeholder/400/300',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    features: ['实时协作', '拖拽排序', '数据可视化', '通知系统'],
    demoUrl: '#',
    githubUrl: '#',
    status: 'completed',
    featured: true
  },
  {
    id: 3,
    title: '健康监测App',
    description: '个人健康数据监测和管理应用，支持运动追踪、饮食记录和健康报告。',
    image: '/api/placeholder/400/300',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Chart.js', 'Redux'],
    features: ['数据同步', '图表分析', '目标设定', '社交分享'],
    demoUrl: '#',
    githubUrl: '#',
    status: 'completed',
    featured: false
  },
  {
    id: 4,
    title: '创意设计作品集',
    description: '个人品牌设计作品展示，包含Logo设计、UI界面和品牌视觉系统。',
    image: '/api/placeholder/400/300',
    category: 'design',
    technologies: ['Figma', 'Adobe Creative Suite', 'Sketch'],
    features: ['品牌设计', 'UI/UX', '视觉识别', '设计系统'],
    demoUrl: '#',
    githubUrl: '#',
    status: 'completed',
    featured: false
  },
  {
    id: 5,
    title: '代码生成工具',
    description: '自动化代码生成工具，支持多种框架和模板，提高开发效率。',
    image: '/api/placeholder/400/300',
    category: 'tool',
    technologies: ['Node.js', 'Commander.js', 'Inquirer.js', 'File System'],
    features: ['模板引擎', '命令行界面', '配置管理', '插件系统'],
    demoUrl: '#',
    githubUrl: '#',
    status: 'in-progress',
    featured: true
  },
  {
    id: 6,
    title: '数据分析仪表板',
    description: '企业级数据分析平台，支持多数据源整合和实时数据可视化。',
    image: '/api/placeholder/400/300',
    category: 'web',
    technologies: ['Vue3', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    features: ['实时数据', '交互图表', '数据导出', '权限管理'],
    demoUrl: '#',
    githubUrl: '#',
    status: 'completed',
    featured: false
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === activeFilter.value)
})

const featuredProjects = computed(() => {
  return projects.filter(project => project.featured)
})

// 更新过滤器计数
const updateFilterCounts = () => {
  filters.forEach(filter => {
    if (filter.id === 'all') {
      filter.count = projects.length
    } else {
      filter.count = projects.filter(p => p.category === filter.id).length
    }
  })
}

onMounted(() => {
  updateFilterCounts()
  
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )
  
  observer.observe(document.querySelector('#projects'))
})

const getStatusClass = (status) => {
  switch (status) {
    case 'completed': return 'completed'
    case 'in-progress': return 'in-progress'
    case 'planned': return 'planned'
    default: return 'completed'
  }
}

const getStatusText = (status) => {
  switch (status) {
    case 'completed': return '已完成'
    case 'in-progress': return '进行中'
    case 'planned': return '计划中'
    default: return '已完成'
  }
}
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-header" :class="{ 'visible': isVisible }">
        <h2 class="section-title">我的作品</h2>
        <p class="section-subtitle">展示我的创意和技术实现</p>
      </div>
      
      <!-- 特色项目 -->
      <div class="featured-projects" :class="{ 'visible': isVisible }">
        <h3 class="subsection-title">精选项目</h3>
        <div class="featured-grid">
          <div 
            v-for="project in featuredProjects" 
            :key="project.id"
            class="featured-card"
            :class="{ 'hovered': hoveredProject === project.id }"
            @mouseenter="hoveredProject = project.id"
            @mouseleave="hoveredProject = null"
          >
            <div class="project-image">
              <div class="image-placeholder">
                <i class="fas fa-image"></i>
              </div>
              <div class="project-overlay">
                <div class="project-links">
                  <a :href="project.demoUrl" class="project-link" title="查看演示">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a :href="project.githubUrl" class="project-link" title="查看代码">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="project-content">
              <div class="project-header">
                <h4 class="project-title">{{ project.title }}</h4>
                <span 
                  class="project-status"
                  :class="getStatusClass(project.status)"
                >
                  {{ getStatusText(project.status) }}
                </span>
              </div>
              
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-technologies">
                <span 
                  v-for="tech in project.technologies.slice(0, 4)" 
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
                <span 
                  v-if="project.technologies.length > 4"
                  class="tech-more"
                >
                  +{{ project.technologies.length - 4 }}
                </span>
              </div>
              
              <div class="project-features">
                <div 
                  v-for="feature in project.features.slice(0, 3)" 
                  :key="feature"
                  class="feature-item"
                >
                  <i class="fas fa-check"></i>
                  {{ feature }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 项目筛选 -->
      <div class="projects-filter" :class="{ 'visible': isVisible }">
        <h3 class="subsection-title">所有项目</h3>
        <div class="filter-buttons">
          <button 
            v-for="filter in filters" 
            :key="filter.id"
            @click="activeFilter = filter.id"
            class="filter-button"
            :class="{ 'active': activeFilter === filter.id }"
          >
            {{ filter.label }}
            <span class="filter-count">({{ filter.count }})</span>
          </button>
        </div>
      </div>
      
      <!-- 项目网格 -->
      <div class="projects-grid">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="project-card"
          :class="{ 'visible': isVisible }"
        >
          <div class="project-image">
            <div class="image-placeholder">
              <i class="fas fa-image"></i>
            </div>
            <div class="project-overlay">
              <div class="project-links">
                <a :href="project.demoUrl" class="project-link" title="查看演示">
                  <i class="fas fa-external-link-alt"></i>
                </a>
                <a :href="project.githubUrl" class="project-link" title="查看代码">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="project-content">
            <div class="project-header">
              <h4 class="project-title">{{ project.title }}</h4>
              <span 
                class="project-status"
                :class="getStatusClass(project.status)"
              >
                {{ getStatusText(project.status) }}
              </span>
            </div>
            
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-technologies">
              <span 
                v-for="tech in project.technologies.slice(0, 3)" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
              <span 
                v-if="project.technologies.length > 3"
                class="tech-more"
              >
                +{{ project.technologies.length - 3 }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 项目统计 -->
      <div class="project-stats" :class="{ 'visible': isVisible }">
        <div class="stat-item">
          <div class="stat-number">{{ projects.length }}</div>
          <div class="stat-label">完成项目</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ projects.filter(p => p.status === 'completed').length }}</div>
          <div class="stat-label">已上线</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ projects.filter(p => p.status === 'in-progress').length }}</div>
          <div class="stat-label">进行中</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">95%</div>
          <div class="stat-label">客户满意度</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
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

.subsection-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.featured-projects {
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.featured-projects.visible {
  opacity: 1;
  transform: translateY(0);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.featured-card {
  background: var(--bg-primary);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  animation: slideInUp 0.6s ease forwards;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
}

.featured-card.hovered {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--bg-tertiary), var(--border-color));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--text-secondary);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.featured-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  width: 3rem;
  height: 3rem;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.project-link:hover {
  background: var(--secondary-color);
  transform: scale(1.1);
}

.project-content {
  padding: 2rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.project-status {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-status.completed {
  background: #10b981;
  color: white;
}

.project-status.in-progress {
  background: #f59e0b;
  color: white;
}

.project-status.planned {
  background: #6b7280;
  color: white;
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
}

.tech-more {
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-features {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.feature-item i {
  color: var(--primary-color);
  font-size: 0.8rem;
}

.projects-filter {
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.projects-filter.visible {
  opacity: 1;
  transform: translateY(0);
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.filter-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: 2rem;
  color: var(--text-secondary);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-button:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.filter-button.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

.filter-count {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 0.125rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
}

.filter-button.active .filter-count {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.project-card {
  background: var(--bg-primary);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.project-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.project-stats.visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: var(--bg-primary);
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .featured-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-card {
    margin-bottom: 2rem;
  }
  
  .filter-buttons {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
  
  .filter-button {
    white-space: nowrap;
    flex-shrink: 0;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stat-item {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}
</style>
