<template>
    <form class="container">
        <div class="form-group">
            <label >Código</label>
            <input v-model="product.codigo" type="text" class="form-control" placeholder="Código">
        </div>
        <div class="form-group">
            <label >Nome</label>
            <input v-model="product.nome" type="text" class="form-control" placeholder="Nome produto">
        </div>
        <div class="form-group">
            <label >Descrição</label>
            <input v-model="product.descricao" type="text" class="form-control" placeholder="Descrição">
        </div>
        <div class="form-group">
            <label >Preço</label>
            <input v-model="product.preco" type="number" class="form-control" placeholder="Preço">
        </div>
        <div class="form-group">
            <label >URL da Foto</label>
            <input v-model="product.urlFoto" type="text" class="form-control" placeholder="URL foto do produto">
        </div>
        <button type="submit"  @click="salvarProduto"  class="btn btn-primary">Salvar</button>
    </form>
</template>
  
<script>
  export default {
    name:'CadastroProdutoForm',
    data() {
        return {
            product : {
                codigo : null,
                nome : null,
                descricao : null,
                preco : null,
                urlFoto : null,
                quantidade : 1,
            },
           
            }
        },
    methods: {
        salvarProduto(event){
            event.preventDefault();
            this.$emit('refreshList',JSON.parse(JSON.stringify(this.product)))
        }
    }
  }
  </script>