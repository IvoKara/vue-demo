<template>
  <div
    w-screen
    h-screen
    flex
    flex-col
    justify-between
  >
    <div>
      <Navigation />
    </div>
    <main my-10 px-4 py-5 text-center>
      <RouterView />
    </main>
    <Footer />
  </div>
  <ClientOnly>
    <ScrollButton />
  </ClientOnly>
</template>
