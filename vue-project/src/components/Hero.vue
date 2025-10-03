<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const typedText = ref('')
const fullText = '创新设计师 & 前端开发者'
const currentIndex = ref(0)

onMounted(() => {
  isVisible.value = true
  
  // 打字机效果
  const typeWriter = () => {
    if (currentIndex.value < fullText.length) {
      typedText.value += fullText.charAt(currentIndex.value)
      currentIndex.value++
      setTimeout(typeWriter, 100)
    }
  }
  
  setTimeout(typeWriter, 1000)
})

const scrollToProjects = () => {
  const element = document.querySelector('#projects')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>
    
    <div class="hero-container">
      <div class="hero-content" :class="{ 'visible': isVisible }">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="greeting">你好，我是</span>
            <span class="name">张创新</span>
          </h1>
          
          <div class="typed-text">
            <span class="cursor">|</span>
            {{ typedText }}
          </div>
          
          <p class="hero-description">
            专注于创造令人惊叹的用户体验和现代化的Web应用程序。
            我热爱将创意转化为现实，用代码构建美好的数字世界。
          </p>
          
          <div class="hero-actions">
            <button @click="scrollToProjects" class="btn btn-primary">
              <span>查看我的作品</span>
              <i class="fas fa-arrow-down"></i>
            </button>
            <a href="#contact" class="btn btn-secondary">
              <span>联系我</span>
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div class="hero-image">
          <div class="image-container">
            <div class="floating-elements">
              <div class="floating-icon" style="--delay: 0s">
                <i class="fab fa-vuejs"></i>
              </div>
              <div class="floating-icon" style="--delay: 1s">
                <i class="fab fa-react"></i>
              </div>
              <div class="floating-icon" style="--delay: 2s">
                <i class="fab fa-js-square"></i>
              </div>
              <div class="floating-icon" style="--delay: 3s">
                <i class="fas fa-code"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <div class="scroll-arrow">
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: var(--bg-primary);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.6;
  animation: float 6s ease-in-out infinite;
}

.orb-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
  top: 60%;
  right: 20%;
  animation-delay: 2s;
}

.orb-3 {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  bottom: 20%;
  left: 50%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.greeting {
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.name {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.typed-text {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 2rem;
  min-height: 2rem;
}

.cursor {
  animation: blink 1s infinite;
  color: var(--primary-color);
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 500px;
}

.hero-actions {
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

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-elements {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-icon {
  position: absolute;
  width: 60px;
  height: 60px;
  background: var(--bg-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary-color);
  box-shadow: var(--shadow-lg);
  animation: floatIcon 4s ease-in-out infinite;
  animation-delay: var(--delay);
}

.floating-icon:nth-child(1) {
  top: 20%;
  left: 20%;
}

.floating-icon:nth-child(2) {
  top: 10%;
  right: 20%;
}

.floating-icon:nth-child(3) {
  bottom: 20%;
  left: 10%;
}

.floating-icon:nth-child(4) {
  bottom: 10%;
  right: 10%;
}

@keyframes floatIcon {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.scroll-arrow {
  width: 40px;
  height: 40px;
  border: 2px solid var(--text-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounce 2s infinite;
  cursor: pointer;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 768px) {
  .hero-container {
    padding: 0 1rem;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .greeting {
    font-size: 1.2rem;
  }
  
  .typed-text {
    font-size: 1.2rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .image-container {
    width: 200px;
    height: 200px;
  }
  
  .floating-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}
</style>
