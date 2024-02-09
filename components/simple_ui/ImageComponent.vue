<script lang="ts" setup>
    const props = defineProps<{
        imageName: String;
        imageSize: String;
        imageType: String;
        imageQuality: Number;
        imageRounded: boolean;
    }>();
</script>

<template>
    <div>
        <nuxtImg v-if="imageRounded" class="duration-300 rounded hover:scale-125 hover:shadow-md" :style="'width:'+imageSize+'px; height:'+imageSize+'px;'" :src="'images/'+imageName+'.'+imageType" :imageQuality="imageQuality"/>
        <nuxtImg v-else class="duration-300 hover:scale-125 hover:shadow-md" :style="'width:'+imageSize+'px; height:'+imageSize+'px;'" :src="'images/'+imageName+'.'+imageType" :imageQuality="imageQuality"/>
    </div>
</template>

<style scoped> </style>