<script lang="ts" setup>
    const props = defineProps({
        title: {type: String, required: true}
    })
</script>

<template>
    <div class="text-sm font-sans mr-5 cursor-pointer">
        {{props.title}}
    </div>
</template>

<style scoped></style>