<script setup lang="ts">
import type { Ref } from 'vue'
import { breakpointsTailwind } from '@vueuse/core'
import type { MenuItem } from '@/types'
import { isDark, toggleDark } from '@/composables/dark'

const drawerToggle: Ref<HTMLInputElement | null> = ref(null)
function toggleDrawer() {
  drawerToggle.value!.checked = false
}

const items: Ref<MenuItem[]> = ref([
  { name: 'Home', link: '/' },
  { name: 'Portfolio', link: '/portfolio' },
  { name: 'Blog', link: '/blog' },
  { name: 'About', link: '/about' },
  { name: 'Contacts', link: '/contacts' },
  { name: 'Login', link: '/admin/login' },
])

const breakpoints = useBreakpoints({
  ...breakpointsTailwind,
  'xs': '400px',
  '2xs': '330px',
})
const mobile = breakpoints.smaller('md')
const md = breakpoints.between('xs', 'md')
const xs = breakpoints.between('2xs', 'xs')
const xsAndSmaller = breakpoints.smaller('2xs')
</script>

<template>
  <div v-if="mobile" class="drawer drawer-end">
    <input
      id="mobile-drawer" ref="drawerToggle"
      type="checkbox" class="drawer-toggle"
    >
    <div class="drawer-content overflow-y-hidden">
      <slot />
    </div>
    <div class="drawer-side overflow-x-hidden">
      <label for="mobile-drawer" class="drawer-overlay" />

      <div
        class="flex flex-col gap-1.5 p-4 overflow-y-auto bg-base-100 text-base-content"
        :class="{ 'w-80': md, 'w-65': xs, 'w-55': xsAndSmaller }"
      >
        <div class="ml-3 flex justify-center items-center h-10 w-10">
          <label for="mobile-drawer">
            <div i-maki:cross w-5 h-5 opacity-50 />
          </label>
        </div>

        <div v-for="(item, i) in items" :key="i">
          <RouterLink
            block rounded-2 px-5 py-3
            :to="item.link" class="text-base-content" transition-color-1000
            active-class="bg-black dark:bg-gray bg-opacity-10 dark:bg-opacity-10"
            @click="toggleDrawer()"
          >
            {{ item.name }}
          </RouterLink>
        </div>

        <div text-xs px-5 mt text-neutral flex-inline items-center gap-4>
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
