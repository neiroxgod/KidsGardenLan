<script lang="ts" setup>
    const props = defineProps({
        title: {type: String, required: true},
        alias: {type: String, required: false}
    })
</script>

<template>
    <div class="text-sm font-sans mr-5 cursor-pointer">
        <NuxtLink :to="alias">
            {{props.title}}
        </NuxtLink>
    </div>
</template>

<style scoped></style>