<template>
  <div>
    <Drawer>
      <div
        w-full
        h-screen
        flex
        flex-col
        justify-between
        class="text-base-content"
      >
        <Navigation />
        <main my-5 px-4 py-5 text-center>
          <RouterView />
        </main>
        <Footer />
      </div>
      <ClientOnly>
        <ScrollButton />
      </ClientOnly>
    </Drawer>
  </div>
</template>
