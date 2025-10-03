<script setup>
import { ref, onMounted } from 'vue'
import Navigation from '../components/Navigation.vue'
import RouterView from '../components/RouterView.vue'

const isDarkMode = ref(false)
const scrollY = ref(0)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

const handleScroll = () => {
  scrollY.value = window.scrollY
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  // 检测系统主题偏好
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
  
  // 添加滚动监听
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="app" :class="{ 'dark': isDarkMode }">
    <Navigation :is-dark="isDarkMode" @toggle-theme="toggleTheme" />
    
    <!-- 主要内容区域 -->
    <main class="main-content">
      <RouterView />
    </main>
    
    <!-- 返回顶部按钮 -->
    <button 
      @click="scrollToTop"
      class="back-to-top"
      :class="{ 'visible': scrollY > 300 }"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  position: relative;
}

.main-content {
  min-height: calc(100vh - 4rem); /* 减去导航栏高度 */
}

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: var(--shadow-lg);
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: 1rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
  }
}
</style>
