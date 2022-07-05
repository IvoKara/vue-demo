<script setup lang="ts">
import type { Ref } from 'vue'

interface MenuItem {
  name: string
  link: string
}

const items: Ref<MenuItem[]> = ref([
  { name: 'Home', link: '/' },
  { name: 'Porftolio', link: '/portfolio' },
  { name: 'Blog', link: '/blog' },
  { name: 'About', link: '/about' },
  { name: 'Contacts', link: '/contacts' },
])
</script>

<template>
  <div>
    <nav text-center font-montserrat text-lg sticky t0>
      <ul v-for="(item, i) in items" :key="i" inline>
        <li inline-block m-4>
          <RouterLink :to="item.link" active-class="text-red">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
  <div top-0 bg-yellow-600 w-115 h-1 mx-auto />
</template>
