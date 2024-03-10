<template>
  <h1>This is page with id: {{ id }}</h1>
  <section>
    <h2>{{ data.question }}</h2>
    <h3>{{ data.answer }}</h3>
  </section>
</template>

<script setup>
const router = useRoute();
const id = router.params.id;

const {data} = useFetch(`/api/questions/${id}`);
</script>

<style scoped>

</style>
