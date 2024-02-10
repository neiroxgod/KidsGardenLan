<script lang="ts" setup>
import ScheduleCard from '../../simple_ui/ScheduleCard.vue';
</script>

<template>
    <section class="w-full bg-orange-100">
        <div class="container lg mx-auto">
            <div class="container md p-6 rounded">
                <div class="flex justify-between">
                    <div class="w-full">
                        <h2 class="text-center text-orange-600 text-6xl">Выберите
                            свое время</h2>
                        <div class="mt-10 flex items-center align-center justify-center flex-wrap">
                            <ScheduleCard 
                                :aging="{age: '3-6', capital: 'Возраст'}"
                                :caption="'Группа неполного дня'"
                                :description="'Уютное пространство, где дети проводят время, занимаясь интеллектуальными и творческими заданиями под руководством опытных педагогов.'"
                                :scheduleDay="{first: '08:30-09:30', second: '09:30-10:30'}"
                                :scheduleAfternoon="{first: '13:30-14:30', second: '14:30-15:30'}"
                                :scheduleDescription="{firstTitle: 'Свободное изучение среды', secondTitle: 'Дидактический круг со специалистом'}" 
                            />
                            <ScheduleCard 
                                :aging="{age: '3-6', capital: 'Возраст'}"
                                :caption="'Группа неполного дня'"
                                :description="'Уютное пространство, где дети проводят время, занимаясь интеллектуальными и творческими заданиями под руководством опытных педагогов.'"
                                :scheduleDay="{first: '08:30-09:30', second: '09:30-10:30'}"
                                :scheduleAfternoon="{first: '13:30-14:30', second: '14:30-15:30'}"
                                :scheduleDescription="{firstTitle: 'Свободное изучение среды', secondTitle: 'Дидактический круг со специалистом'}" 
                            />
                            <ScheduleCard 
                                :aging="{age: '3-6', capital: 'Возраст'}"
                                :caption="'Группа неполного дня'"
                                :description="'Уютное пространство, где дети проводят время, занимаясь интеллектуальными и творческими заданиями под руководством опытных педагогов.'"
                                :scheduleDay="{first: '08:30-09:30', second: '09:30-10:30'}"
                                :scheduleAfternoon="{first: '13:30-14:30', second: '14:30-15:30'}"
                                :scheduleDescription="{firstTitle: 'Свободное изучение среды', secondTitle: 'Дидактический круг со специалистом'}" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>