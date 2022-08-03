<template>
  <div text-center>
    <div
      flex text-xs justify-evenly
      text-neutral-500 dark:text-stone-400
    >
      <RouterLink
        to="/"
        class="hover:text-neutral-700
               dark:hover:text-stone-3"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/portfolio"
        class="hover:text-neutral-700
               dark:hover:text-stone-3"
      >
        Portfolio
      </RouterLink>
      <RouterLink
        to="/contacts"
        class="hover:text-neutral-700
               dark:hover:text-stone-3"
      >
        Contacts
      </RouterLink>
    </div>
  </div>
</template>
