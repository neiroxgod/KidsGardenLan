<script lang="ts" setup>
    import navLinkComponent from '../layout/nav-link.vue';
</script>

<template>
    <section class="shadow-sm bg-amber-100 text-slate-950 lg flex items-center justify-between h-12">
        <div>
            <div class="ml-2">Kid's Garden</div>
        </div>
        <div class="flex md justify-evenly">
            <navLinkComponent :title="'Главная'"/>
            <navLinkComponent :title="'Методология'"/>
            <navLinkComponent :title="'Запись'"/>
            <navLinkComponent :title="'Отзывы'"/>
            <navLinkComponent :title="'Ещё'"/>
        </div>
    </section>
</template>