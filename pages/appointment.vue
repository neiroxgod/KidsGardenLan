<script lang="ts" setup> 
  import PageHeader from "@/components/simple_ui/pageHeader.vue";
  import Paragraph from "@/components/simple_ui/paragraph.vue";

  useHead({
    title: "Запись"
  })

  const route = useRoute();
</script>

<template>
  <page-header :title="'Запись на пробное занятие'" :subtitle="'Здесь вы можете записаться на пробное занятие.'"/>
  <LayoutMainAboutSection class="bg-white"/>
</template>

<style scoped> 

</style>