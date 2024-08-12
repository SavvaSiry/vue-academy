<template>
  <h1>Test SupaBase</h1>

  <section>
    <h2>
      Result is:
    </h2>
    <code>
      {{ data }}
    </code>
    <br>
     <button @click="fetchQuestions">
       Fetch
     </button>
  </section>
</template>

<script setup>
const data = ref('');

const fetchQuestions = async () => {
  data.value = await $fetch('/api/questions/test');
}

</script>

<style scoped>

</style>
