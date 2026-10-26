  <template>
    <h1>社員登録</h1>

    <div v-if="form">
      <div>
        <label>氏名</label>
        <input type="text" v-model="form.name" />
      </div>

      <div>
        <label>部署</label>
        <input type="text" v-model="form.busho" />
      </div>

      <div>
        <label>年齢</label>
        <input type="number" v-model="form.age" />
      </div>

      <div>
        <label>趣味</label>
        <input type="text" v-model="form.hobby" />
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
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()
const errMessage = ref('')


const form = ref({
  id: 0,
  name: '',
  busho: '',
  age: 0,
  hobby: '',
  isDeleted: false
})

//保存
const save = async () => {
  try {
    const res = await fetch(`http://localhost:5075/api/Employee/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/Json' },
      body: JSON.stringify(form.value)
    })

    if (!res.ok) {
      throw new Error('保存できませんでした')
    }
    alert('保存しました')
    router.push('/employeeList')

  } catch (e) {
    errMessage.value =
    e instanceof Error ? e.message : '予期しないエラーが発生しました'
  }
}


//戻る
const goBack = () => { router.push('/employeeList') }
</script>

