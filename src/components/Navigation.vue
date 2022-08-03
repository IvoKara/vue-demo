<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import type { Ref } from 'vue'
import type { MenuItem } from '@/types'

const items: Ref<MenuItem[]> = ref([
  { name: 'Home', link: '/' },
  { name: 'Portfolio', link: '/portfolio' },
  { name: 'Blog', link: '/blog' },
  { name: 'About', link: '/about' },
  { name: 'Contacts', link: '/contacts' },
])

const breakpoints = useBreakpoints(breakpointsTailwind)
const md = breakpoints.smaller('md')

const watchScroll: Ref<HTMLElement | null> | undefined = inject('window')

const { y } = useScroll(watchScroll)
</script>

<template>
  <header z-1 pb-15>
    <div v-if="!md" fixed style="width: calc(100% - 10px)">
      <nav
        flex justify-center items-center font-montserrat
        class="bg-base-100 text-lg"
        :class=" { 'text-sm': y > 0 }"
      >
        <ul flex justify-center transition-font-1000>
          <li v-for="(item, i) in items" :key="i" m-4>
            <RouterLink :to="item.link" active-class="text-amber-950 dark:text-[#c75404ed] font-600">
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
        <LoginIcon mt="2.3" ml-4 self-start class="no-animation" transition-all-1000 />
      </nav>
      <DarkToggle absolute top-3 right-3 />
      <div
        class="bg-[#926511] dark:bg-amber-700" w-140 transition-all-1000
        h="0.5" mx-auto :class="{ 'w-full': y > 0 }"
      />
    </div>
    <nav
      v-else
      fixed left-0 right-0
      flex justify-between items-center
      py-1 px-3
      transition-dark-light
      class="bg-amber-300 dark:bg-amber-800"
    >
      <p font-bold font-oswald>
        Chris K. Parvanov
      </p>
      <label
        for="mobile-drawer"
        class="hidden md:block drawer-button
          btn btn-ghost btn-square"
      >
        <span i-heroicons-solid:menu w-7 h-7 />
      </label>
    </nav>
  </header>
</template>
