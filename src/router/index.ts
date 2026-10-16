import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import EmployeeList from '../views/EmployeeList.vue'
import EmployeeRegister from '../views/EmployeeRegister.vue'
import EmployeeEdit from '../views/EmployeeEdit.vue'
import EmployeeDisp from '../views/EmployeeDisp.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/employeeList', component: EmployeeList },
  { path: '/employeeRegister', component: EmployeeRegister },
  { path: '/employeeEdit/:id', component: EmployeeEdit },
  { path: '/employeeDisp/:id', component: EmployeeDisp },
  { path: '/employee/new', name: 'EmployeeNew', component: EmployeeEdit },
  { path: '/employee/edit/:id', name: 'EmployeeNew', component: EmployeeEdit }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
