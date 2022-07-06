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
</script>

<template>
  <div>
    <nav text-center font-montserrat text-lg w-screen bg-white>
      <ul v-for="(item, i) in items" :key="i" inline>
        <li inline-block m-4>
          <RouterLink :to="item.link" active-class="text-yellow-700 font-600">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div bg-yellow-600 w-130 h="0.5" mx-auto />
  </div>
</template>
