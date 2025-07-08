<template>
  <div>
    <AppNavbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
     <DarkModeToggle />
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import DarkModeToggle from './components/DarkModeToggle.vue'

</script>

<style>
</style>
