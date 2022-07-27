<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
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

const breakpoints = useBreakpoints(breakpointsTailwind)
const md = breakpoints.smaller('md')
</script>

<template>
  <div v-if="!md" fixed z-1 style="width: calc(100% - 10px)">
    <nav flex justify-center items-center font-montserrat text-lg class="bg-base-100">
      <ul flex justify-center items-end>
        <li v-for="(item, i) in items" :key="i" m-4>
          <RouterLink :to="item.link" active-class="text-amber-950 dark:text-[#c75404ed] font-600">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
      <LoginIcon mt-2 ml-4 />
    </nav>
    <DarkToggle />
    <div class="bg-[#926511] dark:bg-amber-700" w-140 h="0.5" mx-auto />
    <!-- {{ x }}
    {{ y }} -->
  </div>
</template>
