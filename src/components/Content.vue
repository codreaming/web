<template>
  <div class='wrapper'>
    <h1 class='title'>Codreaming</h1>
    <p  class='subtitle'>Write you wish and find teammate to reach it together</p>
    <SearchBlock />
  </div>
</template>

<script>
import SearchBlock from './SearchBlock.vue'

export default {
  components: {
    SearchBlock
  }
}
</script>

<style>
  .wrapper {
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 10vh;
    box-sizing: border-box;
  }

  .title {
    font-family: 'Staatliches', cursive;
    color: rgb(141, 110, 107);
    font-size: 55px;
    text-align: center;
    margin: 0;
  }

  .subtitle {
    padding: 15px 10px;
    color: rgb(110, 98, 97);
    font-size: 20px
  }
</style>
