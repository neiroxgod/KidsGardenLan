<script lang="ts" setup> 
  import PageHeader from "@/components/simple_ui/pageHeader.vue";

  useHead({
    title: "Запись"
  })
</script>

<template>
  <page-header :title="'Запись на пробное занятие'" :subtitle="'Здесь вы можете записаться на пробное занятие.'" />
  <LayoutMainAboutSection class="bg-white" />
  <LayoutAppointmentForm />
</template>

<style scoped> 

</style>