<script setup lang="ts">
import SocialIcon from '@/components/SocialIcon.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <nav class="sticky">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/portfolio">Portfolio</RouterLink>
      <RouterLink to="/blog">Blog</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contacts">Contacts</RouterLink>
    </nav>
  </header>
  <RouterView />
  <footer text-center bg-stone-800 text-white>
    <p font-oswald text-3xl py-4>Sofia, Bulgaria | chrisparvanov17@gmail.com | Tel: +359-87-698-8867</p>
    <p font-montserrat text-xs py-2>&copy; {{ new Date().getFullYear() }} by Chris K. Parvanov and Ivo Karaneshev.<br>
      Proudly created from Ivo Karaneshev.</p>
    <ul list-none>
      <div flex items-center justify-center gap-4 my-2 py-3 text-xs>
        <SocialIcon link="https://www.facebook.com/chriskphotogprahy/?ref=bookmarks">
          <div mx-auto w-5 h-5 i-bi-facebook></div>
        </SocialIcon>
        <SocialIcon>
          <div mx-auto w-5 h-5 i-simple-icons-gmail></div>
        </SocialIcon>
        <SocialIcon>
          <div mx-auto w-5 h-5 i-bi-instagram></div>
        </SocialIcon>
        <SocialIcon>
          <div mx-auto w-5 h-5 i-fa-youtube-play></div>
        </SocialIcon>
      </div>

    </ul>
  </footer>
</template>

