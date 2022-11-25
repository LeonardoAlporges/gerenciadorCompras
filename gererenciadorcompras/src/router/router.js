import { createRouter,createWebHistory } from 'vue-router'

import CadastroProduto from '../view/CadastroProduto.vue'
import ListagemProduto from '../view/ListagemProduto.vue'
import HomeApp from '../view/HomeApp.vue'

const routes = [
    {
        path: '/',
        name:'Home',
        component: HomeApp
    },
    {
        path: '/cadastroProduto',
        name:'CadastroProdutos',
        component: CadastroProduto
    },
    {
        path: '/listagemProduto',
        name : 'ListagemProdutos',
        component: ListagemProduto
    },

]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;

