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
        <th>年齢</th>
        <th>趣味</th>
        <th>ステータス</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="e in employeesList" :key="e.id">
        <td><router-link :to="`/employeeDisp/${e.shainNo}`">{{ e.shainNo }}</router-link></td>
        <td>{{ e.name }}</td>
        <td>{{ e.busho }}</td>
        <td>{{ e.age }}</td>
        <td>{{ e.hobby }}</td>
        <td>{{ e.isDeleted ? '退職済み' : '在籍中' }}</td>

      </tr>
    </tbody>
  </table>

  <p v-if="errMessage" style="color:red">
    {{ errMessage }}

  </p>
  <br />
  <br />
  <button @click="goResister">新規登録</button>
  <br />
  <br />
  <button @click="goBack">戻る</button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const employeesList = ref<any[]>([])
const errMessage = ref('')

//ボタン
const goResister = () => { router.push('/employeeRegister') } //新規登録
const goBack = () => { router.push('/login') } //戻る

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:5075/api/Employee/getAll')

    if (!res.ok) {
      throw new Error('社員情報が取得できませんでした')
    }
    employeesList.value = await res.json()
  } catch (e) {
    errMessage.value =
    e instanceof Error ? e.message : '予期しないエラーが発生しました'
  }
})

</script>
