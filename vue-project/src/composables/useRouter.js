import { ref, reactive } from 'vue'

// 简单的路由状态管理
const currentRoute = ref('/')
const routes = reactive({
  '/': 'Home',
  '/about': 'About',
  '/portfolio': 'Portfolio',
  '/portfolio/:id': 'ProjectDetail',
  '/blog': 'Blog',
  '/blog/:slug': 'BlogPost',
  '/contact': 'Contact'
})

export function useRouter() {
  const navigate = (path) => {
    currentRoute.value = path
    window.history.pushState({}, '', path)
    updatePageTitle(path)
  }

  const goBack = () => {
    window.history.back()
  }

  const updatePageTitle = (path) => {
    const titles = {
      '/': '首页 - Zac的个人作品集',
      '/about': '关于我 - Zac的个人作品集',
      '/portfolio': '作品集 - Zac的个人作品集',
      '/contact': '联系我 - Zac的个人作品集',
      '/blog': '博客 - Zac的个人作品集'
    }
    
    const title = titles[path] || '页面 - Zac的个人作品集'
    document.title = title
  }

  return {
    currentRoute,
    navigate,
    goBack,
    routes
  }
}

// 全局路由实例
export const router = {
  currentRoute,
  navigate: (path) => {
    currentRoute.value = path
    window.history.pushState({}, '', path)
    updatePageTitle(path)
  },
  go: (delta) => {
    if (delta === -1) {
      window.history.back()
    } else {
      window.history.forward()
    }
  },
  push: (path) => {
    currentRoute.value = path
    window.history.pushState({}, '', path)
    updatePageTitle(path)
  }
}

const updatePageTitle = (path) => {
  const titles = {
    '/': '首页 - Zac的个人作品集',
    '/about': '关于我 - Zac的个人作品集',
    '/portfolio': '作品集 - Zac的个人作品集',
    '/contact': '联系我 - Zac的个人作品集',
    '/blog': '博客 - Zac的个人作品集'
  }
  
  const title = titles[path] || '页面 - Zac的个人作品集'
  document.title = title
}
