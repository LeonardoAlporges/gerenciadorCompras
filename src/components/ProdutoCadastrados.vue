<template>
        <ol class="list-group list-group mt-5" v-if="productList.length > 0">
            <li  v-for="product in productList || []" :key="product" class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    {{product?.codigo}} 
                </div>
                <div class="ms-2 me-auto">
                    {{product?.nome}} 
                </div>
                <div class="ms-2 me-auto">
                    {{product?.descricao}} 
                </div>
                <div class="ms-2 me-auto">
                    {{product?.preco}} 
                </div>
                <div class="ms-2 me-auto">
                    {{product?.urlFoto}} 
                </div>
                <div class="ms-2 me-auto">
                    {{product?.quantidade}} 
                </div>
                <button type="button" class="btn btn-danger " @click="removeProduct(product.codigo)"> <i class="bi bi-x-lg"></i></button>
                
                <button type="button" class="btn btn-primary " @click="editProduct(product)"> <i class="bi bi-pencil-square"></i></button>
            </li>
        </ol>
        <div class="container text-center mt-5" v-if="productList.length == 0">
            <div class="row">
                <div class="col alert alert-danger" role="alert">
                    Ainda não existem produtos cadastrados no site!
                </div>
            </div>
        </div>
  </template>
  
  <script>
  export default {
    name:'ProdutoCadastrados',
    props: {
        productList: Array
    },

    methods: {
        removeProduct(product){
            this.$emit('onRemove',product)
        },

        editProduct(product){
            this.$emit('onEdit',product)
        }
    }
  }
  </script>