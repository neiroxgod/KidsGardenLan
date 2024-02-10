// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/image', '@nuxtjs/google-fonts', '@nuxt/ui'],
  googleFonts: {
    families: {
      Pacifico: true,
      Arsenal: [400, 700],
      Caveat: [400, 700]
    }
  },
  colorMode:{
    preference: 'light'
  },
  experimental: {
    defaults: {
      nuxtLink: {
        // default values
        componentName: 'NuxtLink',
        externalRelAttribute: 'noopener noreferrer',
        activeClass: 'router-link-active text-orange-600 underline',
        exactActiveClass: 'router-link-exact-active',
        prefetchedClass: undefined, // can be any valid string class name
        trailingSlash: undefined // can be 'append' or 'remove'
      }
    }
  }
})
