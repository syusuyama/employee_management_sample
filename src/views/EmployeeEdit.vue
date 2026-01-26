<template>
    <div>
      <h1>社員編集</h1>
      <p>社員ID: {{ id }}</p>

    </div>

  <button @click="goBack">戻る</button>

  </template>
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useRouter } from 'vue-router'
  
  const route = useRoute()
  const router = useRouter()


  const id = route.params.id
  const goBack = () => {router.push('/employeeList')}
  </script>

  
  