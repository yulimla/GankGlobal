<script setup>
import TheHeaderVue from '../components/base/TheHeader.vue';
import TheSidebar from '../components/base/TheSidebar.vue';
// import TheGallery from './components/gallery/GalleryList.vue'
</script>
<template>
  <div>
    <TheHeaderVue></TheHeaderVue>
    <div class="container mx-auto relative">
      <TheSidebar></TheSidebar>
      <!-- <TheGallery></TheGallery> -->
      <main>
        <slot />
      </main>
    </div>
    <!-- <NuxtWelcome /> -->
  </div>
</template>
<style >

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
body,
html {
  font-family: 'Poppins', sans-serif;
}
</style>