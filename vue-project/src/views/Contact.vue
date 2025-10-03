<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})
const isSubmitting = ref(false)
const submitStatus = ref('')

const contactInfo = [
  {
    icon: 'fas fa-envelope',
    title: '邮箱',
    value: '114514@qq.com',
    link: 'mailto:114514@qq.com'
  },
  {
    icon: 'fas fa-phone',
    title: '电话',
    value: '+86 114514',
    link: 'tel:+86114514'
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: '位置',
    value: 'xx省xx县',
    link: '#'
  },
  {
    icon: 'fab fa-linkedin',
    title: 'LinkedIn',
    value: 'linkedin.com/in/114514',
    link: 'https://linkedin.com/in/114514'
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'fab fa-github',
    url: 'https://github.com/114514',
    color: '#333'
  },
  {
    name: 'Twitter',
    icon: 'fab fa-twitter',
    url: 'https://twitter.com/114514',
    color: '#1DA1F2'
  },
  {
    name: 'Instagram',
    icon: 'fab fa-instagram',
    url: 'https://instagram.com/114514',
    color: '#E4405F'
  },
  {
    name: 'Dribbble',
    icon: 'fab fa-dribbble',
    url: 'https://dribbble.com/114514',
    color: '#EA4C89'
  }
]

onMounted(() => {
  isVisible.value = true
})

const handleSubmit = async (e) => {
  e.preventDefault()
  isSubmitting.value = true
  submitStatus.value = ''
  
  try {
    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // 这里应该调用实际的API
    console.log('表单数据:', formData.value)
    
    submitStatus.value = 'success'
    formData.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="contact-page">
    <!-- 页面头部 -->
    <section class="page-header">
      <div class="container">
        <div class="header-content" :class="{ 'visible': isVisible }">
          <h1 class="page-title">联系我</h1>
          <p class="page-subtitle">让我们一起创造美好的数字体验</p>
        </div>
      </div>
    </section>

    <div class="contact-content">
      <!-- 联系信息 -->
      <section class="contact-info-section">
        <div class="container">
          <div class="contact-info" :class="{ 'visible': isVisible }">
            <div class="info-header">
              <h2>让我们开始对话</h2>
              <p>无论您有任何问题、想法或合作意向，我都非常乐意与您交流。</p>
            </div>
            
            <div class="contact-methods">
              <div 
                v-for="info in contactInfo" 
                :key="info.title"
                class="contact-method"
              >
                <div class="method-icon">
                  <i :class="info.icon"></i>
                </div>
                <div class="method-content">
                  <h4>{{ info.title }}</h4>
                  <a :href="info.link" class="method-value">{{ info.value }}</a>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <h3>关注我</h3>
              <div class="social-grid">
                <a 
                  v-for="social in socialLinks" 
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                  :style="{ '--social-color': social.color }"
                >
                  <i :class="social.icon"></i>
                  <span>{{ social.name }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 联系表单 -->
      <section class="contact-form-section">
        <div class="container">
          <div class="contact-form-container" :class="{ 'visible': isVisible }">
            <form @submit="handleSubmit" class="contact-form">
              <div class="form-header">
                <h2>发送消息</h2>
                <p>填写下面的表单，我会尽快回复您</p>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="name">姓名 *</label>
                  <input 
                    type="text" 
                    id="name"
                    v-model="formData.name"
                    required
                    placeholder="请输入您的姓名"
                  >
                </div>
                
                <div class="form-group">
                  <label for="email">邮箱 *</label>
                  <input 
                    type="email" 
                    id="email"
                    v-model="formData.email"
                    required
                    placeholder="请输入您的邮箱地址"
                  >
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">主题</label>
                <input 
                  type="text" 
                  id="subject"
                  v-model="formData.subject"
                  placeholder="请输入邮件主题"
                >
              </div>
              
              <div class="form-group">
                <label for="message">消息 *</label>
                <textarea 
                  id="message"
                  v-model="formData.message"
                  required
                  rows="6"
                  placeholder="请输入您想要发送的消息..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="submit-button"
                :disabled="isSubmitting"
                :class="{ 'submitting': isSubmitting }"
              >
                <span v-if="!isSubmitting">发送消息</span>
                <span v-else>发送中...</span>
                <i v-if="!isSubmitting" class="fas fa-paper-plane"></i>
                <i v-else class="fas fa-spinner fa-spin"></i>
              </button>
              
              <div v-if="submitStatus" class="submit-status" :class="submitStatus">
                <i v-if="submitStatus === 'success'" class="fas fa-check-circle"></i>
                <i v-else class="fas fa-exclamation-circle"></i>
                <span v-if="submitStatus === 'success'">消息发送成功！我会尽快回复您。</span>
                <span v-else>发送失败，请稍后重试。</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 80vh;
}

.contact-info-section {
  background: var(--bg-primary);
  padding: 6rem 0;
}

.contact-info {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease;
}

.contact-info.visible {
  opacity: 1;
  transform: translateX(0);
}

.info-header {
  margin-bottom: 3rem;
}

.info-header h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.info-header p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;
}

.contact-methods {
  margin-bottom: 3rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border-color);
}

.contact-method:last-child {
  border-bottom: none;
}

.method-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.method-content h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
}

.method-value {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.method-value:hover {
  color: var(--primary-color);
}

.social-links h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 0.75rem;
  text-decoration: none;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.social-link:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.social-link i {
  font-size: 1.2rem;
  color: var(--social-color);
  transition: color 0.3s ease;
}

.social-link:hover i {
  color: white;
}

.contact-form-section {
  background: var(--bg-secondary);
  padding: 6rem 0;
}

.contact-form-container {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s ease;
}

.contact-form-container.visible {
  opacity: 1;
  transform: translateX(0);
}

.contact-form {
  background: var(--bg-primary);
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
}

.form-header {
  margin-bottom: 2rem;
}

.form-header h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.form-header p {
  color: var(--text-secondary);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: 0.5rem;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-button.submitting {
  background: var(--text-secondary);
}

.submit-status {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.submit-status.success {
  background: #10b981;
  color: white;
}

.submit-status.error {
  background: #ef4444;
  color: white;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .contact-info-section,
  .contact-form-section {
    padding: 4rem 0;
  }
  
  .contact-form {
    padding: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .social-grid {
    grid-template-columns: 1fr;
  }
}
</style>
