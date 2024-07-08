// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    provider: {
        type: 'authjs'
    }
  },
  devtools: { enabled: true },
  devServer: {
    port: 3000
  },
  vite: {
    server: {
      hmr: {
        port: 5173,
        clientPort: 443,
        protocol: 'wss',
        path: 'hmr/',
      },
    },
  },
  hooks: {
    'vite:extendConfig'(viteInlineConfig, env) {
      viteInlineConfig.server = {
        ...viteInlineConfig.server,
        hmr: {
          port: 5173,
          clientPort: 443,
          protocol: 'wss',
          path: 'hmr/',
        },
      }
    },
  },
  compatibilityDate: '2024-07-04',
})