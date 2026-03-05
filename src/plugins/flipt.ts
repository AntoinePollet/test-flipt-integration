import type { App, InjectionKey } from 'vue'
import { FliptClient } from '@flipt-io/flipt-client-js'
import { ref } from 'vue'

export type FliptClientInstance = Awaited<ReturnType<typeof FliptClient.init>>
export const fliptClientKey: InjectionKey<Ref<FliptClientInstance | null>> = Symbol('flipt')

function install(app: App) {
  const clientRef = ref<FliptClientInstance | null>(null)
  app.provide(fliptClientKey, clientRef)

  FliptClient.init({
    namespace: 'default',
    environment: 'default',
    url: 'http://localhost:3333/flipt',
  }).then((client) => {
    clientRef.value = client
  })
}

export default { install }
