import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import SettingsPage from './pages/SettingsPage'
import PlayPage from './pages/PlayPage'

const routes = [
	{
		path: '/',
		component: SettingsPage
	},
	{
		path: '/play',
		component: PlayPage
	},
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes
})



const app = createApp(App)

app.use(router)
app.mount('#app')
