<script setup>
import { ref, computed, watch } from 'vue'
import { router } from '../composables/useRouter'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import Blog from '../views/Blog.vue'
import BlogPost from '../views/BlogPost.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

const currentPath = ref(window.location.pathname)

// 监听浏览器历史变化
window.addEventListener('popstate', () => {
  currentPath.value = window.location.pathname
  router.currentRoute.value = currentPath.value
})

// 路由组件映射
const routeComponents = {
  '/': Home,
  '/about': About,
  '/portfolio': Portfolio,
  '/contact': Contact,
  '/blog': Blog
}

// 动态路由匹配
const getCurrentComponent = computed(() => {
  const path = currentPath.value
  
  // 精确匹配
  if (routeComponents[path]) {
    return routeComponents[path]
  }
  
  // 动态路由匹配
  if (path.startsWith('/portfolio/')) {
    return ProjectDetail
  }
  
  if (path.startsWith('/blog/')) {
    return BlogPost
  }
  
  // 404页面
  return NotFound
})

// 获取路由参数
const getRouteParams = computed(() => {
  const path = currentPath.value
  
  if (path.startsWith('/portfolio/')) {
    const id = path.split('/')[2]
    return { id }
  }
  
  if (path.startsWith('/blog/')) {
    const slug = path.split('/')[2]
    return { slug }
  }
  
  return {}
})
</script>

<template>
  <component :is="getCurrentComponent" v-bind="getRouteParams" />
</template>
