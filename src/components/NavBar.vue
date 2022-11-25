<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/"> <button  class=" btn btn-primary">Home</button> </router-link>
    <router-link to="/cadastroProduto"> <button  class=" btn btn-primary">Cadastrar Produto</button> </router-link>
    <router-link to="/listagemProduto"> <button  class=" btn btn-primary">Lista de produtos</button></router-link>
</nav>
  </div>
 

  
</template>

<script>
export default {
    name:'NavBar'
}
</script>