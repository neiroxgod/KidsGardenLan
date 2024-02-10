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
                                :caption="'Группа неполного дня'"
                                :description="'Уютное пространство, где дети проводят время, занимаясь интеллектуальными и творческими заданиями под руководством опытных педагогов.'"
                                :imageFile="'learning_11646903'"
                                :imageType="'png'"
                            />
                            <ScheduleCard 
                                :caption="'Группа неполного дня'"
                                :description="'Уютное пространство, где дети проводят время, занимаясь интеллектуальными и творческими заданиями под руководством опытных педагогов.'"
                                :imageFile="'homework_11647164'"
                                :imageType="'png'"
                            />
                            <ScheduleCard 
                                :caption="'Группа неполного дня'"
                                :description="'Уютное пространство, где дети проводят время, занимаясь интеллектуальными и творческими заданиями под руководством опытных педагогов.'"
                                :imageFile="'role-model_11646967'"
                                :imageType="'png'"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>