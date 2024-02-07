// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],
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
