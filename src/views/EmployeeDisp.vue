  <template>
    <h1>社員情報（参照）</h1>

    <table border="1" cellpadding="8">
      <tbody v-if="employee" align="left">
        <tr>
          <th>社員番号</th>
          <td>{{ employee.id }}</td>
        </tr>
        <tr>
          <th>氏名</th>
          <td>{{ employee.name }}</td>
        </tr>
        <tr>
          <th>部署</th>
          <td>{{ employee.busho }}</td>
        </tr>
        <tr>
          <th>年齢</th>
          <td>{{ employee.age }}</td>
        </tr>
        <tr>
          <th>趣味</th>
          <td>{{ employee.hobby }}</td>
        </tr>
        <tr>
          <th>ステータス</th>
          <td>{{ employee.isDeleted ? '退職済み' : '在籍中' }}</td>
        </tr>
      </tbody>
    </table>
    <br />
    <button @click="goEdit">編集</button>
    <br />
    <br />
    <br />
    <button @click="goBack">戻る</button>
    <!--</div>-->


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
const shainNo = route.params.shainNo as string

const employee = ref({
  id: 0,
  shainNo: shainNo,
  name: '',
  busho: '',
  age: 0,
  hobby: '',
  isDeleted: false
})

//IDに紐づく社員情報を取得
onMounted(async () => {
  const res = await fetch(`http://localhost:5075/api/Employee/getByShainNo/${shainNo}`)
  if (!res.ok) {
    errMessage.value = '社員情報の取得に失敗しました'
    return
  }

  //APIから社員情報を取得
  const emp = await res.json()

  //フォームにコピー
  employee.value = {
    id: 0,
    shainNo: emp.shainNo,
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
    const res = await fetch(`http://localhost:5075/api/Employee/update/${shainNo}`, {
      method: 'PUT',
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

//編集
const goEdit = (shainNo: string) => { router.push({ name: 'EmployeeEdit', params: { shainNo } }) } //編集

//戻る
const goBack = () => { router.push('/employeeList') } //戻る
</script>

