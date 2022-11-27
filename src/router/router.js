import { createRouter,createWebHistory } from 'vue-router'

import CadastroProduto from '../view/CadastroProduto.vue'

const routes = [
    {
        path: '/',
        name:'Home',
        component: CadastroProduto
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;

