<template>
  <div>
    <BaseInputSearch
      v-model="userName"
      placeholder="Username in facebook"
      class='name'
    />
    <BaseInputSearch
      v-model="searchText"
      placeholder="What do you want to make?"
      class='query'
    />
    <button class='btn' @click="getRequest">Find teammate!</button>
    <Auth :authOpen="authOpen" @closeModal = "authOpen = $event"/>
    <div v-if="list.length" class="result">
      <SearchListItem v-for="item in list"
        :key="item.id"
        :item="item"/>
    </div>
  </div>
</template>

<script>
import BaseInputSearch from './BaseInputSearch.vue'
import SearchListItem from './SearchListItem.vue'
import Auth from './Auth'

export default {
  components: {
    BaseInputSearch, SearchListItem, Auth
  },
  data () {
    return {
      userName: '',
      searchText: '',
      list: [
      ],
      authOpen: false
    }
  },
  methods: {
    getRequest () {
      this.authOpen = true
      const userName = this.userName.trim()
      const searchText = this.searchText.trim()
      let options = {
        name: userName,
        text: searchText
      }
      return options
    }
  }
}
</script>

<style lang="scss">
  .name, .query  {
    min-width: 280px;
    max-width: 400px;
    margin: 20px 10px;
    padding: 15px 10px;
    border-radius: 4px;
    border: 1px solid rgb(160, 149, 148);
  }
  .query {
    max-width: 600px;
  }

  .btn {
    margin: 20px 10px;
    padding: 15px 30px;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
    font-weight: 600;
    background-color: #ff8a80;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
</style>
