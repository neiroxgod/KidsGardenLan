
<script lang="ts" setup>
    const props = defineProps<{
        iconColor?: String;
        iconSize?: String;
        icon?: String;
        title: String;
        text?: String;
    }>();
</script>

<template>
    <div class="mb-6">
        <p class="mb-1 text-lg"><Icon :color="props.iconColor" :name="props.icon" :size="props.iconSize"/> <span class="ml-2">{{ props.title }}</span></p>
        <p class="ml-8 text-base">{{ props.text }}</p>
    </div>
</template>

<style> </style>