// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/gems.css'
  ],
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore'] }]
  ]
})
