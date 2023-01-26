<template>
  <div class="container">
    <nav class="navbar bg-success navbar-expand-lg navbar-dark py-4 px-4">
      <router-link class="navbar-brand" to="/">  
        <img src="https://logospng.org/download/mercado-livre/logo-mercado-livre-512.png" width="100" height="100" class="d-inline-block" alt="">
      </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav h3">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/produtos">Cadastra Produtos</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/carrinho">Carrinho</router-link>
      </li>
    </ul>
  </div>
</nav>
</div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>