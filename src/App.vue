<!-- <script setup lang="ts">
import { useAxios } from '@vueuse/integrations'
import { axiosInstance } from './api/axiosInstance'
</script> -->

<template>
  <div
    w-full
    h-screen
    flex
    flex-col
    justify-between
  >
    <!-- <VueQueryDevTools /> -->
    <header relative>
      <!-- style="height: 60px;" -->
      <Navigation />
    </header>
    <!-- <div class="mx-auto w-80">
        <ul v-for="(item, i) in list" :key="i">
          <li :style="item.isNew ? 'color:red;' : 'color:blue'">{{ item.name }}</li>
        </ul> -->
    <RouterView />
    <!-- <button @click="more">Click me!</button>
      </div> -->
    <footer transition-dark-light text-center class="bg-neutral-800 dark:bg-amber-700/87 text-white">
      <!-- style="height:160px" -->
      <p font-oswald text-3xl py-4>
        Sofia, Bulgaria | chrisparvanov17@gmail.com | Tel: +359-87-698-8867
      </p>
      <p font-montserrat text-xs py-2>
        &copy; {{ new Date().getFullYear() }} by Chris K. Parvanov and Ivo Karaneshev.<br>
        Proudly created from Ivo Karaneshev.
      </p>
      <div>
        <div flex items-center justify-center gap-4 mt-2 pb-4 text-xs>
          <SocialIcon link="https://www.facebook.com/chriskphotogprahy/?ref=bookmarks">
            <div mx-auto w-5 h-5 i-bi-facebook alt="facebook icon">
              <span sr-only>Link to Facebook profile</span>
            </div>
          </SocialIcon>
          <SocialIcon link="mailto:chrisparvanov@gmail.com">
            <div mx-auto w-5 h-5 i-simple-icons-gmail alt="gmail icon">
              <span sr-only>Send a mail</span>
            </div>
          </SocialIcon>
          <SocialIcon link="https://www.instagram.com/chriskvisuals/">
            <div mx-auto w-5 h-5 i-bi-instagram alt="instagram icon">
              <span sr-only>Link to Instagram profile</span>
            </div>
          </SocialIcon>
          <SocialIcon link="https://www.youtube.com/channel/UCGe-ZbNlWRqOBchqgNL17WQ">
            <div mx-auto w-5 h-5 i-fa-youtube-play alt="youtube icon">
              <span sr-only>Link to YouTube channel</span>
            </div>
          </SocialIcon>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.ps {
  height: 100vh;
}
</style>

