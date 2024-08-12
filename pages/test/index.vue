<template>
  <h1>Hello, bro!</h1>
  <br>
  <button
      @click="auth.signInWithOAuth({ provider: 'github', options: { redirectTo } })"
  >
    Log In via GitHub
  </button>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`

watchEffect(() => {
  if (user.value) {
    navigateTo('/test/questions')
  }
})
</script>

<style scoped>

</style>