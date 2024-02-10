<script lang="ts" setup>
  import ImageComponent from './ImageComponent.vue';
  const props = defineProps<{
    caption: String,
    description: String,
    imageFile: String,
    imageType: String
  }>();
</script>

<template>
  <div class="relative p-5 shadow-md text-center ml-10 mb-10 rounded-3xl w-96 bg-white justify-center align-center flex flex-wrap">
      
    <div class="wrapper mt-2 h-64 hue-rotate-90">
        <ImageComponent :image-size="'200'" :imageQuality="100" :image-name="imageFile" :image-type="imageType"/>
      </div>
      
      <div style="font-family: 'Caveat', 'serif';" class="text-3xl text-orange-600"> {{ caption }} </div>
      
      <div class="text-xl mt-5 text-center"> {{description}}</div>

      <UButton color="amber" variant="outline" class="mt-5"> Подробнее </UButton>
  </div>
</template>

<style scoped></style>