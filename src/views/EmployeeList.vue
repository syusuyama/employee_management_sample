<template>
  <div>
    <h1>社員一覧</h1>
  </div>

  <table border="1" cellpadding="8">
    <thead>
      <tr>
        <th>社員番号</th>
        <th>氏名</th>
        <th>部署</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="e in employees" :key="e.id">
        <td><router-link :to="`/employeeEdit/${e.id}`">{{ e.id }}</router-link></td>
        <td>{{ e.name }}</td>
        <td>{{ e.busho }}</td>
      </tr>
    </tbody>
  </table>

  <button @click="goBack">戻る</button>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { employees } from '../data/employees'
  const router = useRouter()

const goBack = () => {router.push('/login')}

</script>

