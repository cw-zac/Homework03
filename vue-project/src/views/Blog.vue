<script setup>
import { ref, onMounted, computed } from 'vue'
import { router } from '../composables/useRouter'
const isVisible = ref(false)
const activeCategory = ref('all')
const searchQuery = ref('')

const categories = [
  { id: 'all', label: '全部文章', count: 0 },
  { id: 'frontend', label: '前端开发', count: 0 },
  { id: 'design', label: '设计思考', count: 0 },
  { id: 'life', label: '生活感悟', count: 0 },
  { id: 'tech', label: '技术分享', count: 0 }
]

const blogPosts = [
  {
    id: 1,
    title: 'Vue 3 Composition API 最佳实践',
    excerpt: '深入探讨Vue 3 Composition API的使用技巧和最佳实践，帮助开发者更好地利用这一强大的特性。',
    content: '详细内容...',
    category: 'frontend',
    author: 'Zac',
    publishDate: '2024-01-15',
    readTime: '8分钟',
    tags: ['Vue.js', 'JavaScript', '前端开发'],
    featured: true,
    image: '/api/placeholder/400/250'
  },
  {
    id: 2,
    title: '现代Web设计趋势分析',
    excerpt: '分析2024年最新的Web设计趋势，包括色彩、布局、交互等方面的创新。',
    content: '详细内容...',
    category: 'design',
    author: 'Zac',
    publishDate: '2024-01-10',
    readTime: '6分钟',
    tags: ['UI设计', 'UX设计', '设计趋势'],
    featured: true,
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'TypeScript 在大型项目中的应用',
    excerpt: '分享在大型前端项目中如何有效使用TypeScript提升代码质量和开发效率。',
    content: '详细内容...',
    category: 'frontend',
    author: 'Zac',
    publishDate: '2024-01-05',
    readTime: '10分钟',
    tags: ['TypeScript', '前端开发', '代码质量'],
    featured: false,
    image: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: '从零开始学习响应式设计',
    excerpt: '详细介绍响应式设计的基本概念、实现方法和最佳实践。',
    content: '详细内容...',
    category: 'design',
    author: 'Zac',
    publishDate: '2024-01-01',
    readTime: '12分钟',
    tags: ['CSS', '响应式设计', '移动端'],
    featured: false,
    image: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: '程序员的成长之路',
    excerpt: '分享个人在技术道路上的成长经历和心得体会。',
    content: '详细内容...',
    category: 'life',
    author: 'Zac',
    publishDate: '2023-12-25',
    readTime: '5分钟',
    tags: ['个人成长', '职业发展', '学习心得'],
    featured: false,
    image: '/api/placeholder/400/250'
  },
  {
    id: 6,
    title: '性能优化技巧总结',
    excerpt: '总结Web应用性能优化的各种技巧和方法。',
    content: '详细内容...',
    category: 'tech',
    author: 'Zac',
    publishDate: '2023-12-20',
    readTime: '15分钟',
    tags: ['性能优化', 'Web开发', '最佳实践'],
    featured: true,
    image: '/api/placeholder/400/250'
  }
]

const filteredPosts = computed(() => {
  let posts = blogPosts
  
  // 按分类筛选
  if (activeCategory.value !== 'all') {
    posts = posts.filter(post => post.category === activeCategory.value)
  }
  
  // 按搜索关键词筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    posts = posts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }
  
  return posts
})

const featuredPosts = computed(() => {
  return blogPosts.filter(post => post.featured)
})

// 更新分类计数
const updateCategoryCounts = () => {
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = blogPosts.length
    } else {
      category.count = blogPosts.filter(post => post.category === category.id).length
    }
  })
}

onMounted(() => {
  updateCategoryCounts()
  isVisible.value = true
})

const viewPost = (postId) => {
  router.push(`/blog/${postId}`)
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="blog-page">
    <!-- 页面头部 -->
    <section class="page-header">
      <div class="container">
        <div class="header-content" :class="{ 'visible': isVisible }">
          <h1 class="page-title">技术博客</h1>
          <p class="page-subtitle">分享技术心得，记录成长历程</p>
        </div>
      </div>
    </section>

    <!-- 搜索和筛选 -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-controls">
          <div class="search-box">
            <i class="fas fa-search"></i>
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="搜索文章..."
              class="search-input"
            >
          </div>
          
          <div class="category-filters">
            <button 
              v-for="category in categories" 
              :key="category.id"
              @click="activeCategory = category.id"
              class="category-button"
              :class="{ 'active': activeCategory === category.id }"
            >
              {{ category.label }}
              <span class="category-count">({{ category.count }})</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 精选文章 -->
    <section class="featured-posts" v-if="featuredPosts.length > 0 && activeCategory === 'all' && !searchQuery">
      <div class="container">
        <h2 class="section-title">精选文章</h2>
        <div class="featured-grid">
          <article 
            v-for="post in featuredPosts.slice(0, 3)" 
            :key="post.id"
            class="featured-card"
            @click="viewPost(post.id)"
          >
            <div class="post-image">
              <div class="image-placeholder">
                <i class="fas fa-image"></i>
              </div>
            </div>
            <div class="post-content">
              <div class="post-meta">
                <span class="post-category">{{ categories.find(c => c.id === post.category)?.label }}</span>
                <span class="post-date">{{ formatDate(post.publishDate) }}</span>
              </div>
              <h3 class="post-title">{{ post.title }}</h3>
              <p class="post-excerpt">{{ post.excerpt }}</p>
              <div class="post-tags">
                <span 
                  v-for="tag in post.tags.slice(0, 3)" 
                  :key="tag"
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="post-footer">
                <span class="read-time">{{ post.readTime }}阅读</span>
                <span class="read-more">阅读更多 <i class="fas fa-arrow-right"></i></span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 文章列表 -->
    <section class="posts-section">
      <div class="container">
        <div class="posts-header">
          <h2 class="section-title">
            {{ activeCategory === 'all' ? '全部文章' : categories.find(c => c.id === activeCategory)?.label }}
          </h2>
          <p class="posts-count">{{ filteredPosts.length }} 篇文章</p>
        </div>
        
        <div class="posts-grid">
          <article 
            v-for="post in filteredPosts" 
            :key="post.id"
            class="post-card"
            :class="{ 'visible': isVisible }"
            @click="viewPost(post.id)"
          >
            <div class="post-image">
              <div class="image-placeholder">
                <i class="fas fa-image"></i>
              </div>
            </div>
            
            <div class="post-content">
              <div class="post-meta">
                <span class="post-category">{{ categories.find(c => c.id === post.category)?.label }}</span>
                <span class="post-date">{{ formatDate(post.publishDate) }}</span>
              </div>
              
              <h3 class="post-title">{{ post.title }}</h3>
              <p class="post-excerpt">{{ post.excerpt }}</p>
              
              <div class="post-tags">
                <span 
                  v-for="tag in post.tags.slice(0, 3)" 
                  :key="tag"
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
              
              <div class="post-footer">
                <span class="author">By {{ post.author }}</span>
                <span class="read-time">{{ post.readTime }}</span>
              </div>
            </div>
          </article>
        </div>
        
        <!-- 无结果提示 -->
        <div v-if="filteredPosts.length === 0" class="no-results">
          <i class="fas fa-search"></i>
          <h3>没有找到相关文章</h3>
          <p>尝试使用不同的关键词或浏览其他分类</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-page {
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

.filter-section {
  padding: 3rem 0;
  background: var(--bg-secondary);
}

.filter-controls {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.search-box {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
}

.search-box i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
}

.search-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid var(--border-color);
  border-radius: 2rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.category-button {
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

.category-button:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.category-button.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

.category-count {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 0.125rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
}

.category-button.active .category-count {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.featured-posts {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--text-primary);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.featured-card {
  background: var(--bg-secondary);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  cursor: pointer;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
}

.posts-section {
  padding: 4rem 0 6rem;
  background: var(--bg-secondary);
}

.posts-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.posts-count {
  color: var(--text-secondary);
  font-size: 1rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.post-card {
  background: var(--bg-primary);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 0;
  transform: translateY(30px);
}

.post-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.post-image {
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
  font-size: 2.5rem;
  color: var(--text-secondary);
}

.post-content {
  padding: 1.5rem;
}

.post-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.post-category {
  color: var(--primary-color);
  font-weight: 500;
}

.post-date {
  color: var(--text-secondary);
}

.post-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  line-height: 1.4;
}

.post-excerpt {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.read-more {
  color: var(--primary-color);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.read-more i {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.post-card:hover .read-more i {
  transform: translateX(3px);
}

.no-results {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-secondary);
}

.no-results i {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--text-tertiary);
}

.no-results h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .filter-controls {
    gap: 1.5rem;
  }
  
  .category-filters {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
  
  .category-button {
    white-space: nowrap;
    flex-shrink: 0;
  }
  
  .featured-grid,
  .posts-grid {
    grid-template-columns: 1fr;
  }
  
  .posts-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
