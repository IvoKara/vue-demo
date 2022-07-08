<script setup lang="ts">
const route = useRoute()
const visits = useStorage('visits', 0)
onMounted(() => {
  visits.value = visits.value + 1
})
</script>

<template>
  Hello {{ route.params.slug }}
  {{ visits }}
</template>
