<script lang="ts" setup>
    const props = defineProps({
        iconColor:{type: String},
        iconSize: {type: String},
        icon: {type: String, default: ''},
        subtitleSize: {type: String},
        titleSize: {type: String},
        title: {type: String},
        text: {type: String},
    })
</script>

<template>
    <div class="mb-6">
        <p :class="'mb-1 '+titleSize">
            <Icon v-if="icon" :color="props.iconColor" :name="props.icon" :size="props.iconSize"/>
            <span>{{ props.title }}</span>
        </p>
        <p :class="' '+subtitleSize">{{ props.text }}</p>
    </div>
</template>

<style> </style>