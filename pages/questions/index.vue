<template>
  <header>
    <button>
      К базе вопросов
    </button>
    <button>
      Профиль
    </button>
    <button>
      Рандомайзер
    </button>
  </header>
  <h2>Генератор вопросов</h2>

  <section>
    <h3></h3>

    <h4><b>Вопрос:</b> {{ question }}</h4>
    <p>
      <b>Ответ:</b> {{ response }}
    </p>

    <button @click="askChatGpt">
      Следующий вопрос
    </button>
    <button>
      Сохранить вопрос
    </button>

  </section>



</template>

<script setup>
const question = ref('');
const response = ref(null);

const askChatGpt = async () => {
  try {
    const res = await fetch('/api/chatgpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: question.value }),
    });

    const data = await res.json();
    if (data.success) {
      response.value = JSON.stringify(data.data, null, 2);
    } else {
      response.value = `Error: ${data.error}`;
    }
  } catch (error) {
    response.value = `Error: ${error.message}`;
  }
};


</script>

<style scoped>

</style>