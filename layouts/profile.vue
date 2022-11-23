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