<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(
  {
    ...breakpointsTailwind,
    xs: 430,
  })
const xs = breakpoints.smaller('xs')
</script>

<template>
  <footer transition-dark-light text-center class="bg-neutral-800 dark:bg-amber-700/87 text-white">
    <div font-oswald text-base sm:text-xl md:text-2xl lg:text-3xl py-4>
      <p v-if="!xs">
        Sofia, Bulgaria | chrisparvanov17@gmail.com | Tel: +359-87-698-8867
      </p>
      <p v-else>
        <ul space-y-2>
          <li>Sofia, Bulgaria</li>
          <li>chrisparvanov17@gmail.com</li>
          <li>Tel: +359-87-698-8867</li>
        </ul>
      </p>
    </div>
    <p font-montserrat text="0.6rem" md:text-xs md:py-2 pb-2>
      &copy; {{ new Date().getFullYear() }} by Chris K. Parvanov and Ivo Karaneshev.<br>
      Proudly created from Ivo Karaneshev.
    </p>
    <div>
      <div flex items-center justify-center gap-4 mt-2 pb-4 text-xs>
        <SocialIcon link="https://www.facebook.com/chriskphotogprahy/?ref=bookmarks">
          <div mx-auto w-4 h-4 lg:w-5 lg:h-5 i-bi-facebook alt="facebook icon">
            <span sr-only>Link to Facebook profile</span>
          </div>
        </SocialIcon>
        <SocialIcon link="mailto:chrisparvanov17@gmail.com">
          <div mx-auto w-4 h-4 lg:w-5 lg:h-5 i-simple-icons-gmail alt="gmail icon">
            <span sr-only>Send a mail</span>
          </div>
        </SocialIcon>
        <SocialIcon link="https://www.instagram.com/chriskvisuals/">
          <div mx-auto w-4 h-4 lg:w-5 lg:h-5 i-bi-instagram alt="instagram icon">
            <span sr-only>Link to Instagram profile</span>
          </div>
        </SocialIcon>
        <SocialIcon link="https://www.youtube.com/channel/UCGe-ZbNlWRqOBchqgNL17WQ">
          <div mx-auto w-4 h-4 lg:w-5 lg:h-5 i-fa-youtube-play alt="youtube icon">
            <span sr-only>Link to YouTube channel</span>
          </div>
        </SocialIcon>
      </div>
    </div>
  </footer>
</template>
