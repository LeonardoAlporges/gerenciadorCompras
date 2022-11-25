<template>
    <CadastroProdutoForm @refreshList="onRefresh($event)"></CadastroProdutoForm>
    <ProdutoCadastrados :productList="productList"></ProdutoCadastrados>
</template>

<script>

import CadastroProdutoForm from '../components/CadastroProdutoForm.vue';
import ProdutoCadastrados from '../components/ProdutoCadastrados.vue'
export default {
    components:{ CadastroProdutoForm,ProdutoCadastrados },

    data() {
        return {
            productList : []
            }
        },

    methods: {
        onRefresh(parametro){

                // Logica para caso já tenha um produto na lista ele alterar a quantidade.
                // this.productList = this.productList.map(produto => {
                //     if(produto.codigo === this.product.codigo){
                //         produto.quantidade++;
                //         return produto;
                //     }
                // })

                // Logica para caso o produto seja igual manter somente a adição de quantidade nele, e nao adicionar na lista novamente
                // if(this.productList.filter(produto => produto.codigo === parametro.codigo).length === 0){
                //     
                // }
                this.productList.push(parametro);
            
        }
    }
}
</script>