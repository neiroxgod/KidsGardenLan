<script setup lang="ts">
  import Paragraph from "@/components/simple_ui/paragraph.vue";

  const props = defineProps({
    title: {type: String},
    subtitle: {type: String},
  })
</script>

<template>
  <section class="w-full bg-orange-100 pt-16">
    <div class="container p-10 content-center">
      <h1 style="font-family: 'Caveat', serif;" class="text-center text-6xl text-orange-600">{{ props.title }}</h1>
      <paragraph class="text-xl pt-1" :text="subtitle"></paragraph>
    </div>
  </section>
</template>

<style scoped>

</style>