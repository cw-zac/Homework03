<script setup>
import { ref, onMounted, computed } from 'vue'
import { router } from '../composables/useRouter'

const props = defineProps({
  id: {
    type: String,
    default: '1'
  }
})

const projectId = computed(() => props.id)

const projects = [
  {
    id: 1,
    title: '智能电商平台',
    description: '基于Vue3 + TypeScript构建的现代化电商平台，集成支付、物流、用户管理等完整功能。',
    longDescription: `
      这是一个全栈电商解决方案，采用现代化的技术栈构建。项目包含用户端购物界面、商家管理后台、
      支付系统、物流跟踪等完整功能模块。通过模块化设计和组件化开发，实现了高度的可维护性和扩展性。
      
      项目亮点：
      • 采用Vue3 Composition API，提供更好的类型推导和逻辑复用
      • 集成TypeScript，确保代码质量和开发效率
      • 使用Pinia进行状态管理，提供响应式的数据流
      • 实现PWA功能，支持离线访问和推送通知
      • 集成第三方支付系统，支持多种支付方式
    `,
    image: '/api/placeholder/800/600',
    category: 'web',
    technologies: ['Vue3', 'TypeScript', 'Pinia', 'Vite', 'TailwindCSS', 'Node.js', 'MongoDB'],
    features: ['响应式设计', 'PWA支持', '实时通信', '支付集成', '用户管理', '订单跟踪'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/project',
    status: 'completed',
    featured: true,
    screenshots: [
      '/api/placeholder/800/600',
      '/api/placeholder/800/600',
      '/api/placeholder/800/600'
    ],
    challenges: [
      '处理大量商品数据时的性能优化',
      '实现复杂的购物车状态管理',
      '集成多种支付方式的安全性问题'
    ],
    solutions: [
      '使用虚拟滚动和分页加载优化性能',
      '采用Pinia进行状态持久化和同步',
      '实现token验证和加密传输保证安全'
    ]
  },
  {
    id: 2,
    title: '任务管理应用',
    description: '简洁高效的任务管理工具，支持团队协作、时间跟踪和项目管理功能。',
    longDescription: `
      一个现代化的任务管理应用，专为团队协作设计。支持任务分配、进度跟踪、时间统计等功能，
      帮助团队提高工作效率和项目管理能力。
    `,
    image: '/api/placeholder/800/600',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    features: ['实时协作', '拖拽排序', '数据可视化', '通知系统'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/project',
    status: 'completed',
    featured: true,
    screenshots: ['/api/placeholder/800/600', '/api/placeholder/800/600'],
    challenges: ['实时数据同步', '用户体验优化'],
    solutions: ['WebSocket连接', '响应式设计']
  }
  // 可以添加更多项目...
]

const currentProject = computed(() => {
  return projects.find(p => p.id === parseInt(projectId.value)) || projects[0]
})

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})

const goBack = () => {
  router.go(-1)
}

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
  <div class="project-detail-page">
    <!-- 返回按钮 -->
    <div class="back-button">
      <button @click="goBack" class="btn-back">
        <i class="fas fa-arrow-left"></i>
        <span>返回作品集</span>
      </button>
    </div>

    <!-- 项目头部 -->
    <section class="project-header">
      <div class="container">
        <div class="header-content" :class="{ 'visible': isVisible }">
          <div class="project-meta">
            <span 
              class="project-status"
              :class="getStatusClass(currentProject.status)"
            >
              {{ getStatusText(currentProject.status) }}
            </span>
            <span class="project-category">{{ currentProject.category }}</span>
          </div>
          <h1 class="project-title">{{ currentProject.title }}</h1>
          <p class="project-subtitle">{{ currentProject.description }}</p>
          
          <div class="project-actions">
            <a :href="currentProject.demoUrl" target="_blank" class="btn btn-primary">
              <i class="fas fa-external-link-alt"></i>
              <span>查看演示</span>
            </a>
            <a :href="currentProject.githubUrl" target="_blank" class="btn btn-secondary">
              <i class="fab fa-github"></i>
              <span>查看代码</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目详情 -->
    <section class="project-details">
      <div class="container">
        <div class="details-grid">
          <!-- 项目描述 -->
          <div class="detail-section">
            <h2>项目概述</h2>
            <div class="project-description">
              {{ currentProject.longDescription }}
            </div>
          </div>

          <!-- 技术栈 -->
          <div class="detail-section">
            <h2>技术栈</h2>
            <div class="technologies">
              <span 
                v-for="tech in currentProject.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- 功能特性 -->
          <div class="detail-section">
            <h2>功能特性</h2>
            <ul class="features-list">
              <li v-for="feature in currentProject.features" :key="feature">
                <i class="fas fa-check"></i>
                {{ feature }}
              </li>
            </ul>
          </div>

          <!-- 项目截图 -->
          <div class="detail-section" v-if="currentProject.screenshots">
            <h2>项目截图</h2>
            <div class="screenshots-grid">
              <div 
                v-for="(screenshot, index) in currentProject.screenshots" 
                :key="index"
                class="screenshot-item"
              >
                <div class="screenshot-placeholder">
                  <i class="fas fa-image"></i>
                  <span>截图 {{ index + 1 }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 挑战与解决方案 -->
          <div class="detail-section" v-if="currentProject.challenges">
            <h2>挑战与解决方案</h2>
            <div class="challenges-solutions">
              <div class="challenges">
                <h3>主要挑战</h3>
                <ul>
                  <li v-for="challenge in currentProject.challenges" :key="challenge">
                    <i class="fas fa-exclamation-triangle"></i>
                    {{ challenge }}
                  </li>
                </ul>
              </div>
              <div class="solutions">
                <h3>解决方案</h3>
                <ul>
                  <li v-for="solution in currentProject.solutions" :key="solution">
                    <i class="fas fa-lightbulb"></i>
                    {{ solution }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 相关项目 -->
    <section class="related-projects">
      <div class="container">
        <h2>相关项目</h2>
        <div class="related-grid">
          <div 
            v-for="project in projects.filter(p => p.id !== currentProject.id).slice(0, 3)" 
            :key="project.id"
            class="related-card"
            @click="router.push(`/portfolio/${project.id}`)"
          >
            <div class="related-image">
              <div class="image-placeholder">
                <i class="fas fa-image"></i>
              </div>
            </div>
            <div class="related-content">
              <h4>{{ project.title }}</h4>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.project-detail-page {
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.back-button {
  position: sticky;
  top: 5rem;
  z-index: 100;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
}

.btn-back {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 2px solid var(--border-color);
  border-radius: 2rem;
  color: var(--text-primary);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: var(--bg-secondary);
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.project-header {
  padding: 4rem 0 6rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
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

.project-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
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

.project-category {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.project-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  max-width: 800px;
}

.project-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: white;
  color: var(--primary-color);
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: var(--primary-color);
}

.project-details {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.details-grid {
  display: grid;
  gap: 4rem;
}

.detail-section h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.project-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  white-space: pre-line;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tech-tag {
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  color: var(--text-secondary);
  font-size: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.features-list li:last-child {
  border-bottom: none;
}

.features-list i {
  color: var(--primary-color);
  font-size: 0.9rem;
}

.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.screenshot-item {
  background: var(--bg-secondary);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.screenshot-placeholder {
  height: 200px;
  background: linear-gradient(135deg, var(--bg-tertiary), var(--border-color));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 2rem;
  gap: 0.5rem;
}

.screenshot-placeholder span {
  font-size: 1rem;
}

.challenges-solutions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.challenges h3,
.solutions h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.challenges ul,
.solutions ul {
  list-style: none;
  padding: 0;
}

.challenges li,
.solutions li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
  border-bottom: 1px solid var(--border-color);
}

.challenges li:last-child,
.solutions li:last-child {
  border-bottom: none;
}

.challenges i {
  color: #f59e0b;
  margin-top: 0.25rem;
}

.solutions i {
  color: var(--primary-color);
  margin-top: 0.25rem;
}

.related-projects {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.related-projects h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--text-primary);
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.related-card {
  background: var(--bg-primary);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  cursor: pointer;
}

.related-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.related-image {
  height: 150px;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--bg-tertiary), var(--border-color));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--text-secondary);
}

.related-content {
  padding: 1.5rem;
}

.related-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.related-content p {
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .back-button {
    padding: 1rem;
  }
  
  .project-title {
    font-size: 2rem;
  }
  
  .project-actions {
    justify-content: center;
  }
  
  .challenges-solutions {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
