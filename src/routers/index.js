
import { createRouter, createWebHistory } from 'vue-router'
import todoRouting from './todo'


const MainPage = () => import("../pages/MainPage.vue")
const AboutPage = () => import("../pages/AboutPage.vue")
const LoginPage = () => import("../pages/LoginPage.vue")
const KioskPage = () => import("../pages/KioskPage.vue");


const routeConfig = createRouter({
  history:createWebHistory(),
  routes: [
    {path: "/" , component: MainPage },
    {path: "/about", component: AboutPage },
    {path: "/login", component: LoginPage},
    {path: "/kiosk", component: KioskPage },
    todoRouting
  ]
})

export default routeConfig