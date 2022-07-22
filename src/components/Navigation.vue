<script setup lang="ts">
import { storeToRefs } from 'pinia'
import type { Ref } from 'vue'
import { useUserStore } from '@/stores/user'

interface MenuItem {
  name: string
  link: string
}

const items: Ref<MenuItem[]> = ref([
  { name: 'Home', link: '/' },
  { name: 'Portfolio', link: '/portfolio' },
  { name: 'Blog', link: '/blog' },
  { name: 'About', link: '/about' },
  { name: 'Contacts', link: '/contacts' },
])
const { x, y } = useMouse()
</script>

<template>
  <div fixed z-1>
    <nav text-center font-montserrat text-lg w-screen class="bg-base-100" flex items-center justify-center>
      <ul flex items-center>
        <li v-for="(item, i) in items" :key="i" m-4>
          <RouterLink :to="item.link" active-class="text-amber-950 dark:text-[#c75404ed] font-600">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
      <LoginIcon />
    </nav>
    <DarkToggle />
    <div class="bg-[#926511] dark:bg-amber-700" font- w-130 h="0.5" mx-auto />
    {{ x }}
    {{ y }}
    <!-- <div v-if="payload !== {}" class="avatar placeholder">
      <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
        <span class="text-xl">{{ payload }}</span>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.line-color {
  background-color: rgb(149 101 17);
}
</style>
