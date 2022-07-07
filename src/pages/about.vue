<template>
  <div>
    <PageHeading value="About" />
    <div flex justify-around items-center max-w-4xl mx-auto flex-wrap sm:flex-nowrap>
      <img h-100 alt="img" src="src/assets/KrisProfilePhoto.jpg">
      <p lg:shrink font-montserrat text-2xl prose prose-slate max-w-130>
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
