<script setup lang="ts">
import { fliptClientKey } from '~/plugins/flipt'

const fliptClient = inject(fliptClientKey)

const showButtonFlag = ref(fliptClient?.value?.evaluateBoolean({
  flagKey: 'show_button',
  entityId: 'antoine.pollet@silex.legal',
  context: { 'beta-user': 'true' },
}))

const variant = ref(fliptClient?.value?.evaluateVariant({
  flagKey: 'button_color',
  entityId: 'antoine.pollet@silex.legal',
  context: { 'beta-user': 'truee' },
}))
</script>

<template>
  <main
    px-4 py-10
    text="center gray-700 dark:gray-200"
  >
    <RouterView />
    <button v-if="showButtonFlag?.enabled" class="btn">
      FF enabled
    </button>
    {{ showButtonFlag }}
    <div>
      {{ variant }}
    </div>
    <div mx-auto mt-5 text-center text-sm opacity-50>
      [Home Layout]
    </div>
  </main>
</template>
