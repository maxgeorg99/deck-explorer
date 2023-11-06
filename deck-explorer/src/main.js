import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// Import and configure your routes here
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeView.vue';
import Detail from './views/Detail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/card/:id',
    name: 'Detail',
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

app.use(router);

app.mount('#app');
