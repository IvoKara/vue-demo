<script setup lang="ts">
const renderTime = ref(new Date('2022-07-09'))
const re = useTimeAgo(renderTime.value)
const isIdle = useIdle(400)
</script>

<template>
  <Head>
    <title>About</title>
  </Head>
  <div>
    <PageHeading value="About" />
    {{ isIdle }}
    <span :title="re" :class="isIdle.idle.value === true ? 'text-amber' : 'text-green'"> HOVER MEL {{ re }}</span>
    <div flex justify-around items-center max-w-4xl mx-auto flex-wrap sm:flex-nowrap>
      <img h-100 alt="img" src="/KrisProfilePhoto.jpg" width="267" height="400">
      <p lg:shrink font-montserrat text-2xl prose-slate max-w-130>
        Hi, there! I am Chris K Parvanov. I am 17 year old photogpraph enthusisast from Sofia, Bulgaria.
        I love travelling and photogpraphing the life around me! Portrait photos are my passion but
        I also make shots from events, products, nature.
      </p>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
