<template>
    <div class="mt-5">
        <p class="h3">Produtos cadastrados</p>
        <table class="table" v-if="productList.length > 0">
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
            <tbody  v-for="product in productList || []" :key="product" >
                <tr>
                <th scope="row">{{product?.codigo}}</th>
                <td>{{product?.nome}}</td>
                <td>{{product?.descricao}}</td>
                <td>{{product?.preco}}</td>
                <td>{{product?.urlFoto}}</td>
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
    
        <div class="container text-center mt-5" v-if="productList.length == 0">
            <div class="row">
                <div class="col alert alert-danger" role="alert">
                    Ainda não existem produtos cadastrados no site!
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    import { collection, getDocs } from "firebase/firestore";
    import { db } from '../firebase';
  export default {

    
    name:'ProdutoCadastrados',
    // props: {
    //     productList: Array
    // },
    data() {
        return {
            productList: []
           
            }
    },

    mounted(){
        this.getProdutosFirebase();
    },

    methods: {

        async getProdutosFirebase(){
            const querySnapshot = await getDocs(collection(db, "produtos"));
                querySnapshot.forEach((doc) => {
                    this.productList.push(doc.data())
        });
        },

        removeProduct(product){
            this.$emit('onRemove',product)
        },

        editProduct(product){
            this.$emit('onEdit',product)
        },

        addWishList(product){
            this.$emit('addWishList',JSON.parse(JSON.stringify(product)))
        }
    }
  }
  </script>