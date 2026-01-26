import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import EmployeeList from '../views/EmployeeList.vue'
import EmployeeEdit from '../views/EmployeeEdit.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/employeeList', component: EmployeeList },
  { path: '/employeeEdit/:id', component: EmployeeEdit }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
