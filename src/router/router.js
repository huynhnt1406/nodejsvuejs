import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../pages/user/register/Register.vue'
import UserTodo from '../pages/todos/user-todos/UserTodo.vue'
import AdminTodo from '../pages/todos/admin-todos/AdminTodo.vue'
Vue.use(VueRouter)

const routes = [
    {
        path:'/register',
        component:Register
    },
    {
        path:'/user-todos',
        component:UserTodo
    },
    {
        path:'/admin-todos',
        component:AdminTodo
    }
]
const router = new VueRouter({
    routes,
    mode:'history',
})
export default router