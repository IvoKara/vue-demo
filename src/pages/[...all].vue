<template>
  <Head>
    <title>Not found</title>
  </Head>
  <div>
    <p>
      Page not found
    </p>
    <RouterLink text-lg text-blue-400 to="/">
      Go to start page
    </RouterLink>
  </div>
</template>

<route lang="yaml">
meta:
  layout: notfound
</route>
