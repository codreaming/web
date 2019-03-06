<template>
  <div class="home">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <Content/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src

import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Content,
    Footer
  }
}

</script>

<style>
  .home {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('../assets/bg.jpg');
    background-position: center 0;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
