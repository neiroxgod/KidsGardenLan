<script lang="ts" setup>
  const props = defineProps<{
    aging: {
      capital: String,
      age: String,
    },
    caption: String,
    description: String,
    scheduleDay: {
      first: String,
      second: String,
    },
    scheduleAfternoon: {
      first: String,
      second: String,
    },
    scheduleDescription: {
      firstTitle: String,
      secondTitle: String
    }
  }>();
</script>

<template>
  <div class="relative p-5 shadow-md text-center ml-10 mb-10 rounded w-96 bg-white">

    <div
      class="border border-orange-600 justify-center flex shadow-md mx-auto absolute top-[-40px] left-[0px] rounded-full bg-orange-600 w-20 h-20 items-center align-center text-xl text-white">
      <div class="wrapper">
        <div class="text-lg">{{ aging.capital }}</div>
        <div class="text-center">{{ aging.age }}</div>
      </div>
    </div>

    <div style="font-family: 'Caveat', 'serif';" class="text-3xl text-orange-600"> {{ caption }} </div>

    <div class="text-xl text-left"> {{description}}</div>

    <div class="mt-2 text-xl text-left flex flex-wrap justify-center">
      <div class="mb-2">{{scheduleDay.first}} ☀️</div>
      <div class="mb-2 ml-2">{{scheduleAfternoon.first}} 🌙</div>
      <p class="text-center text-sm ">{{scheduleDescription.firstTitle}}</p>
    </div>

    <div class="mt-2 text-xl text-left flex flex-wrap justify-center">
      <div class="mb-2">{{scheduleDay.first}} ☀️</div>
      <div class="mb-2 ml-2">{{scheduleAfternoon.first}} 🌙</div>
      <p class="text-center text-sm ">{{scheduleDescription.firstTitle}}</p>
    </div>
  </div>
</template>

<style scoped></style>