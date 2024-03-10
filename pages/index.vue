<template>
  <h1>
    Questions
  </h1>

  <section>
    <h2>Случайный вопрос</h2>
    <div v-if="!pending">
      <h3>{{ randomQuestion.question }}</h3>
      <div>{{ randomQuestion.answer }}</div>
      <br>
      <button @click="getRandomQuestion()">Поменять вопрос</button>
    </div>
    <div v-else>
      ...
    </div>
  </section>

  <section>
    <h2>Лист вопросов</h2>
    <ul>
      <li v-for="qes in data.questions" :key="qes.id">
        <h3>{{ qes.question }}</h3>
        <div>{{ qes.answer }}</div>
        <NuxtLink :to="`/questions/${qes.id}`">К вопросу</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
const {data} = useFetch('/api/questions');

const {data: randomQuestion, pending} = useFetch('/api/questions/random', {
  lazy: true,
})

async function getRandomQuestion() {
  randomQuestion.value = await $fetch('/api/questions/random');
}


</script>

<style scoped>

</style>
