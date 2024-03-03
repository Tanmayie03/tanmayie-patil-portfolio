// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  devServer:{
    host:"0",
  },
  devtools: { enabled: true },
  modules: [
  
    'nuxt-swiper',
  
  ],
  css: ['~/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },  
})
