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
        <nuxtImg v-if="imageRounded" class="duration-300 rounded hover:scale-125 hover:shadow-md" :style="'width:'+imageSize+'px; height:'+Size+'px;'" :src="'images/'+imageName+'.'+imageType" :quality="imageQuality"/>
        <nuxtImg v-else class="duration-300 hover:scale-125 hover:shadow-md" :style="'width:'+Size+'px; height:'+Size+'px;'" :src="'images/'+imageName+'.'+imageType" :quality="imageQuality"/>
    </div>
</template>

<style scoped> </style>