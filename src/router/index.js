// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home  from "@/views/Home"
import SendCode from "@/views/SendCode.vue";
import Dashboard from "@/views/dashboard"
import MobileLayout from "@/layouts/MobileLayout.vue";

const routes = [
  {
    path: "/",
    component: MobileLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: '/sendcode',
        name: 'SendCode',
        component: SendCode,
    
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
