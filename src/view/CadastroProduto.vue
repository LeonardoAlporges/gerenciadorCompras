<template>
    <CadastroProdutoForm ref="cadastroProdutosForm" @refreshList="onRefresh($event)" :productEdit="productEdit" ></CadastroProdutoForm>
    <ProdutoCadastrados :productList="productList" @onRemove="onRemove($event)"  @onEdit="onEdit($event)"></ProdutoCadastrados>
</template>

<script>

import CadastroProdutoForm from '../components/CadastroProdutoForm.vue';
import ProdutoCadastrados from '../components/ProdutoCadastrados.vue'
export default {
    components:{ CadastroProdutoForm,ProdutoCadastrados },

    data() {
        return {
                productList : [],
            }
        },

    methods: {
        onRefresh(newProduct){
                this.productList.map(produto => {
                    if(produto?.codigo === newProduct?.codigo){
                        produto.quantidade++;
                    }
                })

                if(this.productList.filter(produto => produto.codigo == newProduct.codigo).length == 0){
                    this.productList.push(newProduct);
                }
        },

        onRemove(codigo){
            let indexProdutoToRemove = this.productList.filter(produto => produto.codigo === codigo);
            if(indexProdutoToRemove != -1 ){
                this.productList.splice(indexProdutoToRemove,1)
            } 
        },

        onEdit(produto){
            this.$refs.cadastroProdutosForm.onEditProduct(produto);
        }
    }
}
</script>