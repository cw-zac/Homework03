<script setup>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
</script>

<template>
  <div class="home-page">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
}
</style>
