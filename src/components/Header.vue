<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Users, PenTool, BookOpen, Phone, Menu, X , Microscope} from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)
const hasScrolled = ref(false)

const navLinks = [
  { 
    name: 'About', 
    href: '#about',
    icon: Users
  },
  {
    name: 'Research', 
    href: '#research',
    icon: Microscope
  
  },
  {
    name: 'Skills', 
    href: '#skills',
    icon: PenTool
  },
  {
    name: 'Projects', 
    href: '#projects',
    icon: BookOpen
  },
  { 
    name: 'Contact', 
    href: '#contact',
    icon: Phone
  }
]

const handleScroll = () => {
  if (window.scrollY > 10) {
    hasScrolled.value = true
  } else {
    hasScrolled.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const openMobileMenu = () => {
  isMobileMenuOpen.value = true
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50',
      'bg-white/90 backdrop-blur-md',
      'transition-all duration-300 ease-in-out',
      hasScrolled ? 'shadow-md' : 'shadow-sm'
    ]"
  >
    <nav class="container mx-auto px-4 py-3 flex items-center justify-between h-16">
      <a href="#" class="flex items-center space-x-2 text-2xl font-extrabold text-gray-900 hover:text-blue-600 transition-colors duration-300">
        <span class="text-blue-600">RT</span>
        <span class="hidden sm:inline">Ryota Temma</span>
      </a>

      <div class="hidden md:flex items-center space-x-8">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group flex items-center space-x-2"
        >
          <component :is="link.icon" class="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
          <span>{{ link.name }}</span>
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        
      </div>

      <div class="md:hidden">
        <button
          @click="toggleMenu"
          class="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 transition-colors duration-300"
          aria-label="メニューを開く"
        >
          <component
            :is="isMobileMenuOpen ? X : Menu"
            class="w-7 h-7 transition-transform duration-300"
          />
        </button>
      </div>
    </nav>

    <div
      :class="[
        'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
        isMobileMenuOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
      ]"
    >
      <div class="bg-white/95 backdrop-blur-lg py-4 px-4">
        <nav class="flex flex-col space-y-4">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click="closeMobileMenu"
            class="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 text-lg py-2 flex items-center space-x-3"
          >
            <component :is="link.icon" class="w-5 h-5 text-gray-600" />
            <span>{{ link.name }}</span>
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>
