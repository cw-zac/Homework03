<script setup>
import MainLayout from './layouts/MainLayout.vue'
</script>

<template>
  <MainLayout />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-tertiary: #f3f4f6;
  --border-color: #e5e7eb;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.dark {
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --bg-primary: #111827;
  --bg-secondary: #1f2937;
  --bg-tertiary: #374151;
  --border-color: #374151;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.app {
  min-height: 100vh;
  position: relative;
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

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}

/* 选择文本样式 */
::selection {
  background-color: var(--primary-color);
  color: white;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 响应式设计 */
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
