<template>
    <div>
      <h1>ログイン</h1>
      <button @click="login">ログイン</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const login = () => {
    router.push('/employeeList')
  }
  </script>
  