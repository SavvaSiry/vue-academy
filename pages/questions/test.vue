<template>
  <h1>Test SupaBase</h1>

  <section>
    <h2>
      Result is:
    </h2>
    <code>
      {{ data }}
    </code>
  </section>
</template>

<script setup>
const { data } = useFetch('/api/questions/test');

</script>

<style scoped>

</style>
