<template>
    <CadastroProdutoForm ref="cadastroProdutosForm" :isEdit="isEdit" @cleanCancel="cleanCancel($event)"></CadastroProdutoForm>
    <ProdutoCadastrados @onEdit="onEdit($event)" ></ProdutoCadastrados>
    <CarrinhoCompras></CarrinhoCompras>
</template>

<script>

import CadastroProdutoForm from '../components/CadastroProdutoForm.vue';
import ProdutoCadastrados from '../components/ProdutoCadastrados.vue'
import CarrinhoCompras from '@/components/CarrinhoCompras.vue';

export default {
    components:{ CadastroProdutoForm,ProdutoCadastrados,CarrinhoCompras },

    data() {
        return {
                isEdit : false,
            }
        },

    methods: {
        onEdit(produto){
            this.isEdit = true;
            this.$refs.cadastroProdutosForm.onEditProduct(produto);
        },
        cleanCancel(){
          this.isEdit = false;
        }
    }
}
</script>