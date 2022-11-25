<template>
        <ol class="list-group list-group mt-5">
            <li v-for="product in productList" :key="product.codigo" class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    {{product.codigo}} 
                </div>
                <div class="ms-2 me-auto">
                    {{product.nome}} 
                </div>
                <div class="ms-2 me-auto">
                    {{product.descricao}} 
                </div>
                <div class="ms-2 me-auto">
                    {{product.preco}} 
                </div>
                <div class="ms-2 me-auto">
                    {{product.urlFoto}} 
                </div>
                <div class="ms-2 me-auto">
                    {{product.quantidade}} 
                </div>
                <button type="button" class="btn btn-danger"> <i class="bi bi-x-lg"></i></button>
            </li>
        </ol>
  </template>
  
  <script>
  export default {
    name:'ProdutoCadastrados',
    props: {
        productList: Array
    },
  }
  </script>