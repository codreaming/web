<template>
  <li class='item'>
    {{ item.text }}
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
  .result {
    width: 100%;
    padding: 0 10px;
    color: rgb(110, 98, 97);
  }
  .result ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .item {
    margin: 0;
    padding: 0;
    margin-bottom: 15px;
  }
</style>
