<script setup lang="ts">
import type { Ref } from 'vue'

interface ListItem {
  name: string
  isNew?: boolean
}

const list: Ref<ListItem[]> = ref([
  { name: 'one' }, { name: 'one' }, { name: 'one' }, { name: 'one' }, { name: 'one' }, { name: 'one' }, { name: 'one' }, { name: 'one' }, { name: 'one' },
])

// const hello = computed(() => {
//   return counter.value * 2
// })
function more() {
  list.value.push(
    {
      name: 'more!!',
      isNew: true,
    })
}
</script>

<template>
  <header relative>
    <nav sticky text-center font-montserrat text-lg>
      <ul gap-4 list-style-none w-screen>
        <li>
          <RouterLink to="/">
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/portfolio">
            Portfolio
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/blog">
            Blog
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about">
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contacts">
            Contacts
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div sticky top-0 bg-yellow-600 w-115 h-1 mx-auto />
  </header>

  <Navigation />

  <!-- <div class="mx-auto w-80">

    <ul v-for="(item, i) in list" :key="i">
      <li :style="item.isNew ? 'color:red;' : 'color:blue'">{{ item.name }}</li>
    </ul> -->
  <div h-80 />

  <RouterView />
  <!-- <button @click="more">Click me!</button>
  </div> -->
  <footer text-center bg-stone-800 text-white>
    <p font-oswald text-3xl py-4>
      Sofia, Bulgaria | chrisparvanov17@gmail.com | Tel: +359-87-698-8867
    </p>
    <p font-montserrat text-xs py-2>
      &copy; {{ new Date().getFullYear() }} by Chris K. Parvanov and Ivo Karaneshev.<br>
      Proudly created from Ivo Karaneshev.
    </p>
    <ul list-none>
      <div flex items-center justify-center gap-4 my-2 py-3 text-xs>
        <SocialIcon link="https://www.facebook.com/chriskphotogprahy/?ref=bookmarks">
          <div mx-auto w-5 h-5 i-bi-facebook />
        </SocialIcon>
        <SocialIcon>
          <div mx-auto w-5 h-5 i-simple-icons-gmail />
        </SocialIcon>
        <SocialIcon>
          <div mx-auto w-5 h-5 i-bi-instagram />
        </SocialIcon>
        <SocialIcon>
          <div mx-auto w-5 h-5 i-fa-youtube-play />
        </SocialIcon>
      </div>
    </ul>
  </footer>
</template>

<style scoped>
nav li {
  display: inline-block;
  margin: 1rem
}
</style>

