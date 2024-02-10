<script setup lang="ts">
  const groups = ['Группа неполного дня для детей 3-6 лет', 'Обустройство домашней среды', 'Школа родителя'];
</script>

<template>
  <section class="w-full bg-orange-100">
    <div class="container lg mx-auto w-2/5 p-6 flex flex-wrap justify-evenly">
      <div class="w-2/5">
        <h2 class="text-orange-600 text-6xl">Записаться</h2>
        <p class="font-header text-slate-500 text-3xl">на пробное занятие</p>
      </div>
      <div class="w-3/5">
        <UForm class="text-center">
          <UInput placeholder="Email" icon="i-heroicons-envelope" class="mb-0.5" />
          <UInput placeholder="Номер телефона" icon="i-heroicons-phone" class="mb-0.5" />
          <UInput placeholder="Ваше имя" icon="i-heroicons-user" class="mb-0.5" />
          <UInput placeholder="Возраст ребёнка" icon="i-heroicons-calendar" class="mb-0.5" />
          <USelect placeholder="Выберите группу" icon="i-heroicons-user-group" class="mb-0.5" :options="groups" />
          <UButton color="amber">Отправить</UButton>
        </UForm>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>