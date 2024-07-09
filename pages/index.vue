<script setup lang="ts">
const {
  status,
  data,
  lastRefreshedAt,
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
  signOut,
} = useAuth()

const session = await getSession()
const providers = await getProviders()
</script>

<template>
  <div>
    <h1>index.vue</h1>
    <table style="border-spacing: 16px;">
      <tr>
        <th style="white-space: nowrap;">ステータス</th>
        <td>{{ status }}</td>
      </tr>
      <tr>
        <th style="white-space: nowrap;">データ</th>
        <td>{{ data }}</td>
      </tr>
      <tr>
        <th style="white-space: nowrap;">セッション</th>
        <td>{{ session }}</td>
      </tr>
      <tr>
        <th style="white-space: nowrap;">プロバイダー</th>
        <td>{{ providers }}</td>
      </tr>
    </table>
    <button @click="signOut()">Logout</button>
  </div>
</template>