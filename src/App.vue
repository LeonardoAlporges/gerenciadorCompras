<template>
  <NavBar></NavBar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar },
  name: 'App',
}
</script>
