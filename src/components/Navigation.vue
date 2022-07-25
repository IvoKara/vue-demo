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
])
// const { x, y } = useMouse()
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
    <!-- {{ x }}
    {{ y }} -->
  </div>
</template>
