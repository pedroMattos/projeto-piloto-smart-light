import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import newPiece from '../views/pages/newPiece';
// import Home from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/solicitar-comodo',
    name: 'newPiece',
    component: newPiece,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
