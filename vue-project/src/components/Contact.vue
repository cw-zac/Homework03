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
    value: 'contact@example.com',
    link: 'mailto:contact@example.com'
  },
  {
    icon: 'fas fa-phone',
    title: '电话',
    value: '+86 138 0000 0000',
    link: 'tel:+8613800000000'
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: '位置',
    value: '北京市朝阳区',
    link: '#'
  },
  {
    icon: 'fab fa-linkedin',
    title: 'LinkedIn',
    value: 'linkedin.com/in/username',
    link: 'https://linkedin.com/in/username'
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'fab fa-github',
    url: 'https://github.com/username',
    color: '#333'
  },
  {
    name: 'Twitter',
    icon: 'fab fa-twitter',
    url: 'https://twitter.com/username',
    color: '#1DA1F2'
  },
  {
    name: 'Instagram',
    icon: 'fab fa-instagram',
    url: 'https://instagram.com/username',
    color: '#E4405F'
  },
  {
    name: 'Dribbble',
    icon: 'fab fa-dribbble',
    url: 'https://dribbble.com/username',
    color: '#EA4C89'
  }
]

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )
  
  observer.observe(document.querySelector('#contact'))
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

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header" :class="{ 'visible': isVisible }">
        <h2 class="section-title">联系我</h2>
        <p class="section-subtitle">让我们一起创造美好的数字体验</p>
      </div>
      
      <div class="contact-content">
        <!-- 联系信息 -->
        <div class="contact-info" :class="{ 'visible': isVisible }">
          <div class="info-header">
            <h3>让我们开始对话</h3>
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
            <h4>关注我</h4>
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
        
        <!-- 联系表单 -->
        <div class="contact-form-container" :class="{ 'visible': isVisible }">
          <form @submit="handleSubmit" class="contact-form">
            <div class="form-header">
              <h3>发送消息</h3>
              <p>填写下面的表单，我会尽快回复您</p>
            </div>
            
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
      
      <!-- 返回顶部 -->
      <div class="back-to-top-section" :class="{ 'visible': isVisible }">
        <button @click="scrollToTop" class="back-to-top-btn">
          <i class="fas fa-arrow-up"></i>
          <span>返回顶部</span>
        </button>
      </div>
    </div>
    
    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-left">
            <div class="footer-brand">
              <h3>创新设计师</h3>
              <p>用代码创造美好，用设计点亮生活</p>
            </div>
          </div>
          
          <div class="footer-right">
            <div class="footer-links">
              <div class="link-group">
                <h4>快速链接</h4>
                <ul>
                  <li><a href="#hero">首页</a></li>
                  <li><a href="#about">关于我</a></li>
                  <li><a href="#skills">技能</a></li>
                  <li><a href="#projects">作品</a></li>
                </ul>
              </div>
              
              <div class="link-group">
                <h4>联系方式</h4>
                <ul>
                  <li><a href="mailto:contact@example.com">邮箱联系</a></li>
                  <li><a href="tel:+8613800000000">电话联系</a></li>
                  <li><a href="#contact">在线留言</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-copyright">
            <p>&copy; 2024 创新设计师. 保留所有权利.</p>
          </div>
          
          <div class="footer-social">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-social-link"
              :title="social.name"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.contact {
  padding: 6rem 0 0;
  background: var(--bg-primary);
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.section-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
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

.info-header h3 {
  font-size: 1.8rem;
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

.social-links h4 {
  font-size: 1.2rem;
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
  background: var(--bg-secondary);
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
}

.form-header {
  margin-bottom: 2rem;
}

.form-header h3 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.form-header p {
  color: var(--text-secondary);
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
  background: var(--bg-primary);
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

.back-to-top-section {
  text-align: center;
  margin: 4rem 0;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.back-to-top-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.back-to-top-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.back-to-top-btn:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.footer {
  background: var(--bg-secondary);
  padding: 3rem 0 2rem;
  border-top: 1px solid var(--border-color);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-brand h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-brand p {
  color: var(--text-secondary);
}

.footer-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.link-group h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.link-group ul {
  list-style: none;
  padding: 0;
}

.link-group li {
  margin-bottom: 0.5rem;
}

.link-group a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: var(--primary-color);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.footer-copyright p {
  color: var(--text-secondary);
  margin: 0;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.footer-social-link {
  width: 2.5rem;
  height: 2.5rem;
  background: var(--bg-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-social-link:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-form {
    padding: 2rem;
  }
  
  .social-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
