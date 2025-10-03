# 创新设计师作品集

一个现代化的个人作品集网站，使用Vue 3 + Vite构建，具有创新的设计理念和优秀的用户体验。

## ✨ 特色功能

### 🎨 现代化设计
- **渐变色彩系统** - 使用现代化的紫色和蓝色渐变主题
- **响应式布局** - 完美适配桌面端、平板和移动设备
- **深色/浅色模式** - 支持主题切换，自动检测系统偏好
- **流畅动画** - 丰富的CSS动画和过渡效果

### 🚀 交互体验
- **智能导航** - 固定导航栏，支持平滑滚动到各个区域
- **项目筛选** - 按技术栈和类型筛选项目展示
- **打字机效果** - 英雄区域的动态文字展示
- **悬浮效果** - 卡片和按钮的交互反馈
- **返回顶部** - 智能显示/隐藏的返回顶部按钮

### 📱 技术架构
- **Vue 3 Composition API** - 使用最新的Vue 3语法
- **Vite构建工具** - 快速的开发和构建体验
- **组件化设计** - 高度模块化的组件结构
- **CSS变量系统** - 统一的设计令牌管理
- **Intersection Observer** - 高效的滚动动画实现

## 🏗️ 项目结构

```
src/
├── components/          # Vue组件
│   ├── Navigation.vue   # 导航栏组件
│   ├── Hero.vue        # 英雄区域组件
│   ├── About.vue       # 关于我组件
│   ├── Skills.vue      # 技能展示组件
│   ├── Projects.vue    # 项目展示组件
│   └── Contact.vue     # 联系我组件
├── assets/             # 静态资源
│   ├── base.css        # 基础样式和CSS变量
│   └── main.css        # 全局样式
├── App.vue             # 根组件
└── main.js             # 应用入口
```

## 🎯 页面区域

### 1. 导航栏 (Navigation)
- 响应式导航菜单
- 主题切换按钮
- 平滑滚动导航

### 2. 英雄区域 (Hero)
- 个人介绍和职位
- 打字机动画效果
- 浮动技术图标
- 行动按钮

### 3. 关于我 (About)
- 个人信息介绍
- 工作经历时间线
- 教育背景
- 个人统计数据

### 4. 技能专长 (Skills)
- 技术技能进度条
- 软技能展示
- 认证证书
- 技能统计

### 5. 我的作品 (Projects)
- 精选项目展示
- 项目筛选功能
- 项目详情卡片
- 项目统计数据

### 6. 联系我 (Contact)
- 联系信息展示
- 联系表单
- 社交媒体链接
- 页脚信息

## 🛠️ 开发指南

### 环境要求
- Node.js >= 20.19.0 或 >= 22.12.0
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 🗂️ 嵌套路由系统

这个项目实现了一个完整的嵌套路由系统，支持多页面应用：

### 路由结构
```
/                    # 首页 - 完整的作品集展示
/about              # 关于我页面
/portfolio          # 作品集列表页面
/portfolio/:id      # 项目详情页面
/blog               # 博客列表页面
/blog/:slug         # 博客文章详情页面
/contact            # 联系我页面
```

### 页面功能

#### 1. 首页 (/)
- 包含所有主要内容的单页应用
- 英雄区域、关于我、技能、项目、联系等模块
- 适合作为作品集的主入口

#### 2. 关于我页面 (/about)
- 详细的个人介绍和工作经历
- 技能展示和教育背景
- 时间线形式的工作经历展示

#### 3. 作品集页面 (/portfolio)
- 项目列表和筛选功能
- 按技术栈和类型分类
- 项目统计和展示

#### 4. 项目详情页面 (/portfolio/:id)
- 单个项目的详细信息
- 技术栈、功能特性、项目截图
- 挑战与解决方案
- 相关项目推荐

#### 5. 博客页面 (/blog)
- 技术文章列表
- 分类筛选和搜索功能
- 精选文章展示

#### 6. 博客文章页面 (/blog/:slug)
- 完整的文章内容展示
- 目录导航和分享功能
- 相关文章推荐

#### 7. 联系页面 (/contact)
- 联系信息和表单
- 社交媒体链接
- 专业的联系界面

### 自定义路由

项目使用自定义的路由系统，位于 `src/composables/useRouter.js`：

```javascript
// 添加新路由
const routeComponents = {
  '/': Home,
  '/about': About,
  '/portfolio': Portfolio,
  '/contact': Contact,
  '/blog': Blog,
  '/new-page': NewPage  // 添加新页面
}
```

### 路由导航

```javascript
import { router } from '../composables/useRouter'

// 导航到新页面
router.push('/about')

// 返回上一页
router.go(-1)
```

## 🎨 设计系统

### 颜色系统
- **主色调**: #6366f1 (靛蓝)
- **辅助色**: #8b5cf6 (紫色)
- **强调色**: #06b6d4 (青色)

### 字体系统
- **主字体**: Inter (现代无衬线字体)
- **图标**: Font Awesome 6.0

### 响应式断点
- **移动端**: < 768px
- **平板端**: 768px - 1024px
- **桌面端**: > 1024px

## 🔧 自定义指南

### 修改个人信息
1. 编辑 `src/components/Hero.vue` 中的姓名和职位
2. 更新 `src/components/About.vue` 中的个人介绍
3. 修改 `src/components/Contact.vue` 中的联系信息

### 添加项目
在 `src/components/Projects.vue` 中的 `projects` 数组添加新项目：

```javascript
{
  id: 7,
  title: '项目名称',
  description: '项目描述',
  image: '/api/placeholder/400/300',
  category: 'web', // web, mobile, design, tool
  technologies: ['Vue3', 'TypeScript'],
  features: ['功能1', '功能2'],
  demoUrl: '#',
  githubUrl: '#',
  status: 'completed', // completed, in-progress, planned
  featured: true
}
```

### 修改技能
在 `src/components/Skills.vue` 中更新技能数据：

```javascript
{
  name: '技能名称',
  level: 95, // 百分比
  color: '#4FC08D' // 进度条颜色
}
```

### 自定义主题色
在 `src/assets/base.css` 中修改CSS变量：

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;
}
```

## 📱 浏览器支持

- Chrome >= 88
- Firefox >= 85
- Safari >= 14
- Edge >= 88

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

---

**用代码创造美好，用设计点亮生活** ✨