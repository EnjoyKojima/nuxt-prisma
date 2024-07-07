<script setup lang="ts">
const { data, signIn, signOut } = useAuth()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>
      <button v-if="data?.users" @click="signIn">Sign in</button>
      <button @click="signOut">Sign out</button>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>
