<template>
  <footer class="w-full bg-gray-100 border-t border-gray-200 py-6 mt-12">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <div class="text-gray-600 text-sm text-center md:text-left mb-2 md:mb-0">
        &copy; {{ new Date().getFullYear() }} Ryota Temma. All rights reserved.
      </div>
      <div class="flex items-center space-x-4">
        <a href="mailto:is0624se@ed.ritsumei.ac.jp" class="hover:text-blue-600 transition" title="メール">
          <img src="https://img.icons8.com/ios-filled/24/new-post.png" alt="Email" class="inline w-6 h-6 align-middle" />
        </a>
        <a href="https://github.com/RyotaTemma" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 transition" title="GitHub">
          <img src="https://img.icons8.com/ios-filled/24/github.png" alt="GitHub" class="inline w-6 h-6 align-middle" />
        </a>
      </div>
    </div>
  </footer>
</template> 