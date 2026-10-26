import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import EmployeeList from '../views/EmployeeList.vue'
import EmployeeRegister from '../views/EmployeeRegister.vue'
import EmployeeEdit from '../views/EmployeeEdit.vue'
import EmployeeDisp from '../views/EmployeeDisp.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/employeeList', name:'EmployeeList', component: EmployeeList },
  { path: '/employeeRegister', name:'EmployeeRegister', component: EmployeeRegister },
  { path: '/employeeEdit/:shainNo', name:'EmployeeEdit', component: EmployeeEdit },
  { path: '/employeeDisp/:shainNo', name:'EmployeeDisp', component: EmployeeDisp },
  //{ path: '/employee/new', name: 'EmployeeNew', component: EmployeeEdit },
  //{ path: '/employee/edit/:shainNo', name: 'EmployeeEdit', component: EmployeeEdit }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
