<script lang="ts" setup>
    // I assume that every memphis icon is squared, so the sizing params equalized to w / h ;
    const props = defineProps<{
        iconName: String;
        iconSize: String;
    }>();
</script>

<template>
    <div>
        <nuxtImg :src="'images/'+iconName" :style="'width:'+iconSize+'px; height:'+iconSize+'px;'"/>
    </div>
</template>

<style scoped> </style>