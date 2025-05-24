<script setup>
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import ResearchSection from './components/ResearchSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <main class="pt-16"> <!-- ヘッダー分の余白を確保 -->
    <HeroSection />
    <ResearchSection />
    <SkillsSection />
    <ProjectSection />
    <ContactSection />
    <Footer />
  </main>
</template>

