<template>
    <form class="container mt-3">
        <div class="row form-group">
            <div class="col">
                <label >Código</label>
                <input v-model="product.codigo" :disabled="isEdit" type="text" class="form-control" placeholder="Código">
            </div>
            <div class="col">
                <label >Nome</label>
                <input v-model="product.nome" type="text" class="form-control" placeholder="Nome produto">
            </div>
            <div class="col">
                <label >Preço</label>
                <input v-model="product.preco" type="number" class="form-control" placeholder="Preço">
            </div>
        </div>
        <div  class="row form-group mt-3">
            <div class="col">
                <label >Descrição</label>
                <input v-model="product.descricao" type="text" class="form-control" placeholder="Descrição">
            </div>
            <div class="col">
                <label >URL da foto</label>
                <input v-model="product.foto" type="text" class="form-control" placeholder="URL foto do produto">
            </div>
            <div class="col">
                <label >Quantidade</label>
                <input v-model="product.quantidade" type="number" class="form-control" placeholder="Quantidade">
            </div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-between">
                <button type="submit" v-if="isEdit" @click="saveEditProduct"  class="btn btn-success mt-3">Salvar alteração</button>
                <button type="submit" v-if="!isEdit" @click="salvarProduto"  class="btn btn-success mt-3">Salvar produto</button>
                <button type="submit" v-if="isEdit" @click="cleanCancel"  class="btn btn-warning mt-3 ">Cancelar / Limpar</button>
            </div>
        </div>
    </form>
</template>
  
<script>

import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';

  export default {
    name:'CadastroProdutoForm',

    props: {
       isEdit: Boolean,
    },

    data() {
        return {
            product : {
                codigo : null,
                nome : '',
                descricao : null,
                preco : null,
                foto : null,
                quantidade : null,
            },   
        }
    },

    methods: {

        async salvarProdutoFirestore(){
            await setDoc(doc(db, "produtos", this.product.codigo),{
                codigo: this.product.codigo,
                nome:this.product.nome,
                descricao:this.product.descricao,
                foto:this.product.foto,
                preco:this.product.preco,
                quantidade:this.product.quantidade
            });
            this.$store.dispatch('refreshProductList')
        },

        salvarProduto(event){
            this.salvarProdutoFirestore();
            event.preventDefault();
        },

        onEditProduct(event){
            this.product = event;
        },

        saveEditProduct(event){
            this.salvarProdutoFirestore();
            event.preventDefault();
        },

        cleanCancel(){
            this.product.codigo = null,
            this.product.descricao = null,
            this.product.nome = null,
            this.product.preco = null,
            this.product.quantidade = null,
            this.product.foto = null
            this.$emit('cleanCancel')
        }

    }
  }
  </script>