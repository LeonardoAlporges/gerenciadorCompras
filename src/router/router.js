import { createRouter,createWebHistory } from 'vue-router'

import CadastroProduto from '../view/CadastroProduto.vue'
import CarrinhoView from '../view/CarrinhoView.vue'
import HomeView from '../view/HomeView.vue'

const routes = [
    {
        path: '/',
        name:'HomeView',
        component: HomeView
    },
    {
        path: '/carrinho',
        name:'CarrinhoView',
        component: CarrinhoView
    },
    {
        path: '/produtos',
        name:'Home',
        component: CadastroProduto
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;

