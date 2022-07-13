<script setup lang="ts">
import type { Ref } from 'vue'

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
  { name: 'Profile', link: '/login' },
])
const { x, y } = useMouse()
</script>

<template>
  <div fixed z-1>
    <nav text-center font-montserrat text-lg w-screen class="bg-base-100" flex items-center justify-center>
      <ul flex items-center>
        <li v-for="(item, i) in items" :key="i" m-4>
          <RouterLink :to="item.link" active-class="text-primary-focus font-600">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <DarkToggle />
    <div class="bg-primary-focus" font- w-130 h="0.5" mx-auto />
    {{ x }}
    {{ y }}
  </div>
</template>
