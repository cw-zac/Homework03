<script setup>
import { ref, onMounted } from 'vue'
import { router } from '../composables/useRouter'
const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="not-found-page">
    <div class="container">
      <div class="not-found-content" :class="{ 'visible': isVisible }">
        <div class="error-code">404</div>
        <h1 class="error-title">页面未找到</h1>
        <p class="error-description">
          抱歉，您访问的页面不存在或已被移动。
          <br>
          请检查URL是否正确，或返回首页继续浏览。
        </p>
        
        <div class="error-actions">
          <button @click="goHome" class="btn btn-primary">
            <i class="fas fa-home"></i>
            <span>返回首页</span>
          </button>
          <button @click="router.go(-1)" class="btn btn-secondary">
            <i class="fas fa-arrow-left"></i>
            <span>返回上页</span>
          </button>
        </div>
        
        <div class="helpful-links">
          <h3>您可能想要访问：</h3>
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/about">关于我</router-link></li>
            <li><router-link to="/portfolio">作品集</router-link></li>
            <li><router-link to="/blog">博客</router-link></li>
            <li><router-link to="/contact">联系我</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.not-found-content {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.not-found-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.error-code {
  font-size: 8rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1;
}

.error-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.error-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
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
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--bg-secondary);
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.helpful-links {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
}

.helpful-links h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.helpful-links ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.helpful-links li {
  margin: 0;
}

.helpful-links a {
  color: var(--text-secondary);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 500;
}

.helpful-links a:hover {
  background: var(--primary-color);
  color: white;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .error-code {
    font-size: 6rem;
  }
  
  .error-title {
    font-size: 2rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 250px;
  }
  
  .helpful-links ul {
    flex-direction: column;
    align-items: center;
  }
  
  .helpful-links a {
    display: block;
    width: 100%;
    text-align: center;
  }
}
</style>
