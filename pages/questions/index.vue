<template>
  <header>
    <button
        @click="navigateTo('/questions/create')"
    >
      К генератору вопросов
    </button>
    <button
      @click="navigateTo('/')"
    >
      Профиль
    </button>
  </header>
  <h2>База вопросов</h2>

  <section>
    <ol>
      <li v-for="question in questions">
        <h5>{{ question.question }}</h5>
        <h6>{{ question.answer }}</h6>
      </li>
    </ol>

  </section>

</template>

<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();

let { data: questions, error } = await client
    .from('Questions')
    .select('*');


</script>

<style scoped>

</style>