<script setup lang="ts">
const router = useRouter()
const route = useRoute('/hi/[name]')
const user = useUserStore()

watchEffect(() => {
  user.setNewName(route.params.name)
})
useHead({
  title: () => t('intro.hi', { name: user.savedName }),
})
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-pedestrian inline-block />
    </div>
    <p>
      intro.hi {{ user.savedName }}
    </p>

    <p text-sm opacity-75>
      <em>intro.dynamic-route</em>
    </p>

    <template v-if="user.otherNames.length">
      <div mt-4 text-sm>
        <span opacity-75>intro.aka:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <RouterLink :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </template>

    <div>
      <button
        m="3 t6" btn text-sm
        @click="router.back()"
      >
        button.back
      </button>
    </div>
  </div>
</template>
