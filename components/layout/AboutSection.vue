<script lang="ts" setup>
    import Paragraph from '../simple_ui/paragraph.vue';
</script>

<template>
    <section class="min-h-[52vh] w-full h-1 bg-orange-100">
        <div class="container lg mx-auto">
            <div class="container md p-6 rounded">
                <div class="flex justify-between">
                    <div class="w-2/3">
                        <h2 style="font-family: 'Caveat', 'serif';" class="text-orange-600 text-6xl">Выберите свое время</h2>
                        <div class="mt-5">
                            <Paragraph :iconSize="'20px'" :iconColor="'#fdba74'" :icon="'fa6-solid:1'" :text="'lorem ipsum dolor sit amet'" :title="'Группа неполного дня для детей 3-6 лет'"/>
                            <Paragraph :iconSize="'20px'" :iconColor="'#fdba74'" :icon="'fa6-solid:2'" :text="'lorem ipsum dolor sit amet'" :title="'Свободное изучение среды'"/>
                            <Paragraph :iconSize="'20px'" :iconColor="'#fdba74'" :icon="'fa6-solid:3'" :text="'Тематику дидактического круга можно будет увидеть в индивидуальном расписании'" :title="'Дидактический круг с специалистом'"/>
                            <Paragraph :iconSize="'20px'" :iconColor="'#fdba74'" :icon="'fa6-solid:4'" :text="'lorem ipsum dolor sit amet'" :title="'Свободное изучение среды'"/>
                            <Paragraph :iconSize="'20px'" :iconColor="'#fdba74'" :icon="'fa6-solid:5'" :text="'lorem ipsum dolor sit amet'" :title="'Дидактический круг `Впечатления`'"/>
                        </div>
                    </div>
                    <div class="w-1/3 relative">
                        <nuxtImg class="drop-shadow-sm saturate-50 contrast-100" src="images/num.png" quality="30"/>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<style scoped> </style>