<script lang="ts" setup>
    import ImageComponent from '../simple_ui/ImageComponent.vue';
</script>

<template>
    <section class="container p-20 bg-orange-100 min-h-[100vh] min-w-full flex flex-wrap justify-between">
        
        <div class="mt-5">
            <ImageComponent :imageName="'photo_sec1'" :imageType="'jpg'" :imageSize="'500'" :imageQuality="30" :imageRounded="true"/>
        </div>

        <div class="mt-5">
            <ImageComponent :imageName="'photo_sec4'" :imageType="'jpg'" :imageSize="'500'" :imageQuality="30" :imageRounded="true"/>
        </div>
        
        <div class="mt-5">
            <ImageComponent :imageName="'photo_sec3'" :imageType="'jpg'" :imageSize="'500'" :imageQuality="30" :imageRounded="true"/>
        </div>

        <div class="mt-5">
            <ImageComponent :imageName="'photo_sec4'" :imageType="'jpg'" :imageSize="'500'" :imageQuality="30" :imageRounded="true"/>
        </div>

        <div class="mt-5">
            <ImageComponent :imageName="'photo_sec5'" :imageType="'jpg'" :imageSize="'500'" :imageQuality="30" :imageRounded="true"/>
        </div>

        <div class="mt-5">
            <ImageComponent :imageName="'photo_sec6'" :imageType="'jpg'" :imageSize="'500'" :imageQuality="30" :imageRounded="true"/>
        </div>
    
    </section>
</template>

<style scoped> 

</style>