<template>
  <header>
    <button
        @click="navigateTo('/questions')"
    >
      К базе вопросов
    </button>
    <button
        @click="navigateTo('/')"
    >
      Профиль
    </button>
  </header>
  <h2>Генератор вопросов</h2>

  <section>
    <div>
      <h3><b>Вопрос:</b></h3>
      <textarea v-model="question"/>
    </div>

    <div>
      <h3><b>Ответ:</b></h3>
      <textarea v-model="answer"/>
    </div>

    <br>

    <button @click="askChatGpt">
      Следующий вопрос
    </button>
    <button @click="addQuestion">
      Сохранить вопрос
    </button>

  </section>


</template>

<script setup>
const question = ref('');
const answer = ref('');

const client = useSupabaseClient();

const addQuestion = async () => {
  const {data, error} = await client
      .from('Questions')
      .insert([
        {question: question.value, answer: answer.value},
      ])
      .select()

  question.value = '';
  answer.value = '';
}


// const askChatGpt = async () => {
//   try {
//     const res = await fetch('/api/chatgpt', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ question: question.value }),
//     });
//
//     const data = await res.json();
//     if (data.success) {
//       response.value = JSON.stringify(data.data, null, 2);
//     } else {
//       response.value = `Error: ${data.error}`;
//     }
//   } catch (error) {
//     response.value = `Error: ${error.message}`;
//   }
// };


</script>

<style scoped>

</style>