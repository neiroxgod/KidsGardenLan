<script setup lang="ts">
  const props = defineProps({
    title: {type: String},
    subtitle: {type: String},
  })
</script>

<template>
  <section class="w-full bg-orange-100">
    <div class="container content-center p-10">
      <h1 class="font-header text-center text-6xl text-orange-600">{{ props.title }}</h1>
      <p class="text-xl pt-8">{{ props.subtitle }}</p>
    </div>
  </section>
</template>

<style scoped>

</style>