<script lang="ts" setup>
    import navLinkComponent from '../layout/nav-link.vue';
</script>

<template>
    <section class="z-20 fixed w-full bg-opacity-60 shadow-sm bg-orange-50 text-slate-950 lg flex items-center justify-between h-16">
        <div>
            <div class="font-display ml-2 text-lg text-orange-300">Kids Garden</div>
        </div>
        
        <div class="flex md justify-evenly">
            <navLinkComponent :alias="'/'" :title="'Главная'"/>
            <navLinkComponent :alias="'/methodology'" :title="'Методология'"/>
            <navLinkComponent :alias="'/appointment'" :title="'Запись'"/>
            <navLinkComponent :alias="'/reviews'" :title="'Отзывы'"/>
            <navLinkComponent :title="'Ещё'"/>
        </div>

        <div> 
            <button class="hover:shadow-lg shadow-md hover:bg-white hover:text-slate-600 hover:border-slate-600 hover:text-orange-500 duration-300 font-header text-center text-white text-lg bg-orange-400 mr-5 rounded-3xl border border-orange-400 p-2">Записаться на пробное</button>
        </div>
    </section>
</template>