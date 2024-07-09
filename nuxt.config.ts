// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    // 認証APIのベースURL
    baseURL: '/api/auth',
    // 認証プロバイダーの設定
    provider: {
        type: 'authjs',
    },
    // 認証ミドルウェアを全てのページで使用するか
    globalAppMiddleware: true
  },
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    auth:{
      secret:process.env.AUTH_SECRET,
      google:{
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }
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