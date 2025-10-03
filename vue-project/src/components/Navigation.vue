<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  isDark: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle-theme'])

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { name: '首页', href: '#hero' },
  { name: '关于', href: '#about' },
  { name: '技能', href: '#skills' },
  { name: '项目', href: '#projects' },
  { name: '联系', href: '#contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<template>
  <nav class="navigation" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <div class="nav-brand">
        <span class="brand-text">创新设计师</span>
      </div>
      
      <div class="nav-menu" :class="{ 'active': isMenuOpen }">
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.name" class="nav-item">
            <a 
              @click="scrollToSection(item.href)" 
              class="nav-link"
              :href="item.href"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
      
      <div class="nav-actions">
        <button 
          @click="$emit('toggle-theme')" 
          class="theme-toggle"
          :title="isDark ? '切换到浅色模式' : '切换到深色模式'"
        >
          <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
        
        <button 
          @click="toggleMenu" 
          class="menu-toggle"
          :class="{ 'active': isMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.navigation.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-md);
}

.dark .navigation {
  background: rgba(17, 24, 39, 0.9);
}

.dark .navigation.scrolled {
  background: rgba(17, 24, 39, 0.95);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
  background: var(--bg-secondary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 80%;
}

.theme-toggle {
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  margin-right: 1rem;
}

.theme-toggle:hover {
  background: var(--bg-secondary);
  color: var(--primary-color);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle span {
  width: 1.5rem;
  height: 2px;
  background: var(--text-primary);
  margin: 2px 0;
  transition: all 0.3s ease;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }
  
  .nav-menu {
    position: fixed;
    top: 4rem;
    left: 0;
    right: 0;
    background: var(--bg-primary);
    border-bottom: 1px solid var(--border-color);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-list {
    flex-direction: column;
    gap: 0;
    padding: 1rem 0;
  }
  
  .nav-link {
    display: block;
    padding: 1rem 2rem;
    border-radius: 0;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .nav-actions {
    display: flex;
    align-items: center;
  }
}
</style>
