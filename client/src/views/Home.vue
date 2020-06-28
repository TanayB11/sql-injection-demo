<template>
  <div id="home">
    <div class="w-1/2 mx-auto mt-24 rounded-lg p-8" id='inventory'>
      <p class="text-center text-2xl">Inventory</p>
      <form class="mt-12" @submit.prevent="submitForm()">
        <input v-model="searchBox"
        type="text" placeholder='search' class="text-center  rounded-lg w-1/2 py-2 px-2">
        <button type="submit" class="mx-2 bg-gray-800 text-gray-200 px-2 py-2 rounded-lg">Submit</button>
      </form>
      <div class="mt-12">
        {{ results }}
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'Home',
  data() {
    return {
      searchBox: '',
      results: 'No results yet. Try a search.'
    }
  },
  methods: {
    submitForm() {
      let searchApi = 'http://localhost:3000/search'
      axios.post(searchApi, {
        query: this.searchBox
      })
      .then(response => this.results = response.data)
      .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
#inventory{
  height: 75vh;
  border: 2px solid rgba(0, 0, 0, 0.6);
}
</style>