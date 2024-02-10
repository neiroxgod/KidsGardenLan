// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/google-fonts', 'nuxt-icon', '@nuxt/ui'],
  googleFonts: {
    families: {
      Pacifico: true,
      Arsenal: [400, 700],
      Caveat: [400, 700]
    }
  },
  shadcn: {
    // prefix for all the imported component
    prefix: '',

    /**
     * directory that the component lives in
     * @default "./components/ui"
     */
    componentDir: './components/ui'
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
