<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/"> <button  class=" btn btn-outline-primary m-3">Home</button> </router-link>
      <router-link to="/cadastroProduto"> <button  class=" btn btn-outline-primary m-3">Cadastrar Produto</button> </router-link>
      <router-link to="/listagemProduto"> <button  class=" btn btn-outline-primary m-3">Lista de produtos</button></router-link>
    </nav>
  </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>