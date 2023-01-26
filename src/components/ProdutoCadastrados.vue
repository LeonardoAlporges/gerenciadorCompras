<template>
    <div class="mt-5">
        <p class="h3">Produtos cadastrados</p>
        <table class="table" v-if="$store.state.productList.length > 0">
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
            <tbody  v-for="product in $store.state.productList || []" :key="product" >
                <tr>
                <th scope="row">{{product?.codigo}}</th>
                <td>{{product?.nome}}</td>
                <td>{{product?.descricao}}</td>
                <td>{{product?.preco}}</td>
                <td>{{product?.foto}}</td>
                <td>{{product?.quantidade}}</td>
                <td> 
                    <div class="d-flex justify-content-around">
                        <button type="button" class="btn btn-danger" @click="removeProduct(product.codigo)"> <i class="bi bi-x-lg"></i></button>
                        <button type="button" class="btn btn-primary " @click="editProduct(JSON.parse(JSON.stringify(product)))"> <i class="bi bi-pencil-square"></i></button>
                        <button type="button"  :disabled="product.quantidade === 0" class="btn btn-primary " @click="addWishList(product)"> <i class="bi bi-cart-plus"></i></button>
                    </div>
                </td>
                </tr>
            </tbody>
        </table>
    
        <div class="container text-center mt-5" v-if="$store.state.productList.length == 0">
            <div class="row">
                <div class="col alert alert-danger" role="alert">
                    Ainda não existem produtos cadastrados no site!
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>

  export default {    
    name:'ProdutoCadastrados',

    mounted(){
        this.getProdutosFirebase();
    },

    methods: {

        async getProdutosFirebase(){
            this.$store.dispatch('refreshProductList')
        },

        async removeProduct(codigo){
            this.$store.dispatch('deleteProductOnList',codigo);
        },

        editProduct(product){
            this.$emit('onEdit',product)
        },

        addWishList(product){
            this.$store.dispatch('addProdutWishList',product);
        }
    }
  }
  </script>