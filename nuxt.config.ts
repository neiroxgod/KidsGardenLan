// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/google-fonts'],
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
  }
})
