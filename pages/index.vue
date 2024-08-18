<template>
  <h1>Hello, bro!</h1>
  <br>
  <ClientOnly>
    <code>{{ user }}</code>
  </ClientOnly>
  <br>
  <br>
  <button
      v-if="!user"
      @click="auth.signInWithOAuth({ provider: 'github', options: { redirectTo } })"
  >
    Log In via GitHub
  </button>
  <template v-else>
    <button
      @click="navigateTo('/questions')"
    >
      start
    </button>
    <button
        @click="auth.signOut()"
    >
      Log Out
    </button>
  </template>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const {auth} = useSupabaseClient()

const route = useRoute();
const redirectTo = `${route.fullPath}/confirm`

// watchEffect(() => {
//   if (user.value) {
//     navigateTo('/test/questions')
//   }
// })
</script>

<style scoped>

</style>