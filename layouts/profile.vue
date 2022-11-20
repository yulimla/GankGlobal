<script setup>
import TheHeaderVue from '../components/base/TheHeader.vue';
</script>
<template>
  <div>
    <TheHeaderVue></TheHeaderVue>
    <div class="container mx-auto relative">
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>
<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
body,
html {
  font-family: 'Poppins', sans-serif;
}
</style>