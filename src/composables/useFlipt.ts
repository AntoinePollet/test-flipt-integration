import type { FliptClientInstance } from '~/plugins/flipt'
import { fliptClientKey } from '~/plugins/flipt'

/**
 * Inject the Flipt client. Available after plugin init (client-side only).
 * Use in components: const flipt = useFlipt(); when flipt.value is set, the client is ready.
 */
export function useFlipt(): Ref<FliptClientInstance | null> {
  const clientRef = inject(fliptClientKey)
  if (!clientRef)
    throw new Error('Flipt plugin not installed. Ensure the flipt module is registered in main.ts.')
  return clientRef
}
