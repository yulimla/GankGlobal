// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
     css: [
    // Load a Node.js module directly (here it's a Sass file)
    // SCSS file in the project
    '~/assets/styles/main.css'
  ]
})
