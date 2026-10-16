  <template>
    <h1>社員編集</h1>

    <div v-if="form">
      <div>
        <label>氏名</label>
        <input v-model="form.name" />
      </div>

      <div>
        <label>部署</label>
        <input v-model="form.busho" />
      </div>

      <div>
        <label>年齢</label>
        <input v-model="form.age" />
      </div>

      <div>
        <label>趣味</label>
        <input v-model="form.hobby" />
      </div>

      <div>
        <label>ステータス</label>
        <select v-model="form.isDeleted">
          <option :value="false">在籍</option>
          <option :value="true">退職済み</option>
        </select>
      </div>

      <br />
      <br />
      <button @click="save">保存</button>
      <br />
      <br />
      <br />
      <button @click="goBack">戻る</button>
    </div>


    <p v-if="errMessage" style="color:red">
      {{ errMessage }}
    </p>

  </template>



<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const router = useRouter()
const errMessage = ref('')

//URLのIDを取得
const shainNo = route.params.id as string

const form = ref({
  id: shainNo,
  name: '',
  busho: '',
  age: 0,
  hobby: '',
  isDeleted: false
})

//IDに紐づく社員情報を取得
onMounted(async () => {
  const res = await fetch(`http://localhost:5075/api/GetEmployee/${form.value.id}`)
  if (!res.ok) {
    errMessage.value = '社員情報の取得に失敗しました'
    return
  }

  //APIから社員情報を取得
  const emp = await res.json()

  //フォームにコピー
  form.value = {
    id: emp.shainNo,
    name: emp.name,
    busho: emp.busho,
    age: emp.age,
    hobby: emp.hobby,
    isDeleted: emp.isDeleted
  }
})

//保存
const save = async () => {
  try {
    const res = await fetch(`http://localhost:5075/api/Employee/PutEmp/${form.value.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/Json' },
      body: JSON.stringify(form.value)
    })

    if (!res.ok) {
      throw new Error('保存できませんでした')
    }
  } catch (e: any) {
    errMessage.value = e.errMessage
  }

  alert('保存しました')
  router.push('/employeeList')
}

/*
if (index !== -1) {
  employees[index] = { ...form.value } //編集用変数のコピー（formとは別物）
  alert('保存しました')
  router.push('/employeeList')
  }
  else{
  //トランザクション処理（想定）
  alert('予期せぬエラーが発生しました')
  router.push('/employeeList')
  }
}
  */

//戻る
const goBack = () => { router.push('/employeeList') }
</script>

