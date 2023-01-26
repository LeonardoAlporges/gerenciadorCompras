<template>
  <div class="py-5">
    <div class="container">
        <h5>Os nossos produtos são de alta qualidade e projetados para atender às suas necessidades. Oferecemos uma ampla variedade de opções, desde itens essenciais para o dia a dia até produtos inovadores e tecnológicos </h5>
      <div class="row hidden-md-up">
            <div class="col-lg-4 col-md-12 mb-4"  v-for="product in $store.state.productList || []" :key="product"  >
        <div class="card">
            <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img :src=product.foto 
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-primary ms-2">New</span></h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </div>
            </a>
          </div>
          <div class="card-body">
              <h4 class="card-title mb-3">{{product.nome}}</h4>
              <p>{{product.descricao}}</p>
              <h3 class="mb-0 font-weight-semibold">$ {{product.preco}}</h3>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>



</template>

<script>

export default {
    name: 'HomeView',

    mounted(){
        this.getProdutosFirebase();
    },

    methods: {

        async getProdutosFirebase(){
            this.$store.dispatch('refreshProductList')
        },
    }
}
</script>
