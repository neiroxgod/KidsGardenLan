<script setup lang="ts">
  import PageHeader from "@/components/simple_ui/pageHeader.vue";
  const route = useRoute();
  useHead({
    title: "Отзывы"
  })
</script>

<template>
  <page-header :title="'Отзывы'"/>
</template>

<style scoped>

</style>