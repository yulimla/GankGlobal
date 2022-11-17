// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Gank - Earn More From Your Content",
      meta: [
        // <meta name="description" content="My amazing site">
        {
          name: "description",
          content:
            "Gank is a content membership platform that helps content creators accept donations, manage memberships and sell merch, for free.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // SCSS file in the project
    "~/assets/styles/main.css",
  ],
});
