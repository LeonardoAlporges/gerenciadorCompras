<template>
    <div class="mt-5">
        <p class="h3">Carrinho</p>
        <table class="table" v-if="$store.state.productWishList.length > 0">
            <thead>
                <tr>
                <th scope="col">Código</th>
                <th scope="col">Nome</th>
                <th scope="col">Descição</th>
                <th scope="col">Preço</th>
                <th scope="col">Foto do produto</th>
                <th scope="col">Quantidade Disponivel</th>
                <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="product in $store.state.productWishList || []" :key="product">
                    <th scope="row">{{product?.codigo}}</th>
                        <td >{{product?.nome}}</td>
                        <td>{{product?.descricao}}</td>
                        <td>{{product?.preco}}</td>
                        <td>{{product?.urlFoto}}</td>
                        <td>{{product?.quantidade}}</td>
                        <td> 
                            <button type="button" class="btn btn-danger" @click="removeWishList(product)"> <i class="bi bi-dash"></i></button>
                        </td>
                </tr>
                <tr><td colspan="7"></td></tr>
                <tr>              
                        <td colspan="3"><h4>Quantidade de itens: {{$store.state.quantidadeProdutos}}</h4></td>
                        <td colspan="3"><h4>Valor total: {{$store.state.valorTotal}}</h4></td>           
                        <td colspan="4"></td>        
                </tr>
            </tbody>
        </table>

        <div class="container text-center mt-5" v-if="$store.state.productWishList.length == 0">
            <div class="row">
                <div class="col alert alert-danger" role="alert">
                    Ainda não existem produtos no carrinho!
                </div>
            </div>
        </div>
        </div>
  </template>
  
  <script>
  export default {
    name:'CarrinhoCompras',

    mounted(){
        this.getProdutosFirebase();
    },
   
    methods: {
        async getProdutosFirebase(){
            this.$store.dispatch('refreshWishList')
        },
   
        removeWishList(product){
            this.$store.dispatch('removeProdutWishList',product);
        },
    }
  }
  </script>