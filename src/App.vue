<script setup lang="ts">
// interface ListItem {
//   name: string
//   isNew?: boolean
// }

// const list: Ref<ListItem[]> = ref([
//   { name: 'one' }, { name: 'one' }, { name: 'one' }, { name: 'one' }, { name: 'one' }, { name: 'one' }, { name: 'one' }, { name: 'one' }, { name: 'one' },
// ])

// // const hello = computed(() => {
// //   return counter.value * 2
// // })
// function more() {
//   list.value.push(
//     {
//       name: 'more!!',
//       isNew: true,
//     })
// }
</script>

<template>
  <perfect-scrollbar
    w-screen
    h-screen
    flex
    flex-col
    justify-between
    overflow-x-hidden
  >
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
    <footer text-center class="bg-stone-800 text-white">
      <!-- style="height:160px" -->
      <p font-oswald text-3xl py-4>
        Sofia, Bulgaria | chrisparvanov17@gmail.com | Tel: +359-87-698-8867
      </p>
      <p font-montserrat text-xs py-2>
        &copy; {{ new Date().getFullYear() }} by Chris K. Parvanov and Ivo Karaneshev.<br>
        Proudly created from Ivo Karaneshev.
      </p>
      <ul list-none>
        <div flex items-center justify-center gap-4 mt-2 pb-4 text-xs>
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
  </perfect-scrollbar>
</template>

<style>
.ps {
  height: 100vh;
}
</style>

