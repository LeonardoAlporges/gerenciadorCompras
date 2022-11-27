<template>
    <CadastroProdutoForm ref="cadastroProdutosForm" :isEdit="isEdit" @refreshList="onRefresh($event)" @saveEditProduct="saveEditProduct($event)" @cleanCancel="cleanCancel($event)"></CadastroProdutoForm>
    <ProdutoCadastrados :productList="productList" @onRemove="onRemove($event)"  @onEdit="onEdit($event)" @addWishList="addWishList($event)" ></ProdutoCadastrados>
    <CarrinhoCompras :productWishList="productWishList" :quantidadeProdutos="quantidadeProdutos" :valorTotal="valorTotal"  @removeWishList="removeWishList($event)" ></CarrinhoCompras>
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
                productList : [],
                productWishList:[],
                quantidadeProdutos:0,
                valorTotal:0,
            }
        },

    methods: {
        onRefresh(newProduct){
                this.productList.map(produto => {
                    if(produto?.codigo === newProduct?.codigo){
                        produto.nome = newProduct.nome
                        produto.preco = newProduct.preco
                        produto.descricao = newProduct.descricao
                        produto.urlFoto = newProduct.urlFoto
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
            
            let indexProdutoToRemoveWishList = this.productWishList.filter(produto => produto.codigo === codigo);
            if(indexProdutoToRemoveWishList != -1 ){
                this.productWishList.splice(indexProdutoToRemoveWishList,1)
            }
        },

        onEdit(produto){
            this.isEdit = true;
            this.$refs.cadastroProdutosForm.onEditProduct(produto);
        },

        addWishList(newProduct){
            this.productList.map(produto => {
                if(produto?.codigo === newProduct?.codigo){
                    produto.quantidade--;
                }
            })

            this.productWishList.map(produto => {
                if(produto?.codigo === newProduct?.codigo){
                    produto.quantidade++;
                }
            })

            newProduct.quantidade = 1;

            this.quantidadeProdutos +=1;
            this.valorTotal += Number(newProduct?.preco);

            if(this.productWishList.filter(produto => produto.codigo == newProduct.codigo).length == 0){
                this.productWishList.push(newProduct);
            }
        },

        removeWishList(produto){
            this.productList.map(produtc => {
                if(produtc?.codigo === produto?.codigo){
                    this.quantidadeProdutos -= produto?.quantidade;
                    let valorTotalProduto = produto.quantidade * produto.preco
                    this.valorTotal = this.valorTotal - valorTotalProduto;
                    produtc.quantidade += produto?.quantidade;
                }
            })

            let indexProdutoToRemoveWishList = this.productWishList.filter(produtc => produtc.codigo === produto.codigo);
            if(indexProdutoToRemoveWishList != -1 ){
                this.productWishList.splice(indexProdutoToRemoveWishList,1)
            }
            
        },

        saveEditProduct(product){
            this.isEdit = false;
            this.productList.map(produto => {
                if(produto?.codigo === product?.codigo){
                    produto.nome = product.nome
                    produto.preco = product.preco
                    produto.descricao = product.descricao
                    produto.urlFoto = product.urlFoto
                }
             })

             this.productWishList.map(produto => {
                if(produto?.codigo === product?.codigo){
                    let valorTotalAnteriorProduto = produto.preco * produto.quantidade;

                    produto.nome = product.nome
                    produto.preco = product.preco
                    produto.descricao = product.descricao
                    produto.urlFoto = product.urlFoto
              
                    this.valorTotal = this.valorTotal - valorTotalAnteriorProduto;
                    let novoValorTotal  = product.preco * produto.quantidade;
                    this.valorTotal = this.valorTotal + novoValorTotal;
                }
             })
        },

        cleanCancel(){
          this.isEdit = false;
        }
       
    }
}
</script>