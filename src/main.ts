import { createPinia } from 'pinia'
import { setupLayouts } from 'virtual:generated-layouts'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

import fliptPlugin from './plugins/flipt'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts([...routes]),
})

const pinia = createPinia()
app.use(pinia)
// Inject Flipt plugin first so the client is available app-wide
app.use(fliptPlugin)

// Install other modules (pinia, i18n, nprogress, pwa) with a client-only context
// const ctx = {
//   app,
//   router,
//   routes: setupLayouts([...routes]),
//   isClient: true,
//   initialState: {} as Record<string, unknown>,
//   head: undefined,
//   onSSRAppRendered: () => {},
//   triggerOnSSRAppRendered: () => {},
// } as unknown as ViteSSGContext<true>
// Object.values(
//   import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }),
// ).forEach(m => m.install?.(ctx))

app.use(router)
app.mount('#app')
