<script setup lang="ts">
import type { Ref } from 'vue'
import { breakpointsTailwind } from '@vueuse/core'
import type { MenuItem } from '@/types'
import { isDark, toggleDark } from '@/composables/dark'

const items: Ref<MenuItem[]> = ref([
  { name: 'Home', link: '/' },
  { name: 'Portfolio', link: '/portfolio' },
  { name: 'Blog', link: '/blog' },
  { name: 'About', link: '/about' },
  { name: 'Contacts', link: '/contacts' },
  { name: 'Login', link: '/admin/login' },
])

const breakpoints = useBreakpoints(breakpointsTailwind)
const md = breakpoints.smaller('md')
</script>

<template>
  <div v-if="md" class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle">
    <div class="drawer-content">
      <slot />
    </div>
    <div class="drawer-side">
      <label for="my-drawer-4" class="drawer-overlay" />
      <div class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <ul>
          <li v-for="(item, i) in items" :key="i">
            <RouterLink :to="item.link">
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
        <div text-xs px-4 mt text-neutral flex-inline items-center gap-4>
          Dark Mode
          <span>
            <input
              type="checkbox" class="toggle"
              :checked="isDark" @click="toggleDark()"
            >
          </span>
        </div>
      </div>
    </div>
  </div>
  <slot v-else />
</template>
