<script lang="ts" setup> 
    import memphisIconsComponent from '../../simple_ui/memphisIconsComponent.vue';
    import paragraph from '../../simple_ui/paragraph.vue';
</script>
<template>
    <section class="min-h-[50vh] w-full h-1 bg-white"> 
        <div class="z-20 container lg mx-auto">
            <div class="mt-10 container flex items-center"> 
                <h2 class="text-6xl text-orange-500">Наша миссия</h2>

                <div class="ml-5 origin-bottom">
                    <memphisIconsComponent :iconName="'heart_12815338.png'" :iconSize="'60'"/>
                </div>
            </div>
            <div class="z-10 container flex justify-between">
                <div class="w-2/3">
                    <paragraph :icon="''" :subtitleSize="'text-lg'" :text="'Чтобы помочь ребенку стать самостоятельным и уверенным в своих силах человеком,нам надо дать ему возможность творить самостоятельно и быть рядом опорой и поддержкой не вмешиваясь в процесс.'"/>
                    <paragraph :icon="''" :subtitleSize="'text-lg'" :text="'В нашем центре вся среда устроена таким образом,чтобы ребенок максимально удовлетворил свой интерес к изучению и познанию,почувствовал свою принадлежность к этому миру.'"/>
                    <paragraph :icon="''" :subtitleSize="'text-lg'" :text="'Специалист по раннему развитию,поможет детям познакомиться и использовать возможности нашей подготовленной среды.'"/>
                    <button class="hover:shadow-lg shadow-md  hover:bg-white hover:text-slate-600 hover:border-slate-600 hover:text-orange-500 duration-300 font-header text-center text-white text-lg bg-orange-400 mt-10 rounded-3xl border border-orange-400 p-2">Записаться на пробное</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped> </style>