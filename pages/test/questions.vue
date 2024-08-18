<template>
  <h1>Answer test</h1>
  <code>{{ QuestionsResults }}</code>
  <br>
  <br>
  <button @click="answer">
    answer
  </button>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseClient();

let { data: QuestionsResults, error } = await client
    .from('QuestionsResults')
    .select('*');


const answer = async () => {

  const {data} = await client
      .from('QuestionsResults')
      .insert([
        {user_id: user.value.id, status_id: '2', questions_id: '13'},
      ])
      .select()

  console.log(data);
}

</script>

<style scoped>

</style>