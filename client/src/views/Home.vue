<template>
  <div id="home">
    <div class="w-3/4 mx-auto mt-24 rounded-lg p-8" id='inventory'>
      <p class="text-center text-2xl">Inventory</p>
      <form class="mt-12" @submit.prevent="submitForm()">
        <input v-model="searchBox"
        type="text" placeholder='search' class="text-center rounded-lg w-1/2 py-2 px-2">
        <button type="submit" class="mx-2 bg-gray-800 text-gray-200 px-2 py-2 rounded-lg">Submit</button>
      </form>
      <div class="mt-12">
        <div v-if="results">
          <div class="grid grid-cols-3 my-3 font-bold">
            <div class="col-span-1">ID</div>
            <div class="col-span-1">Name</div>
            <div class="col-span-1">Price</div>
          </div>
          <div v-for="(n, i) in results" :key='i.key' class="mt-5">
            <div class="grid grid-cols-3 my-3">
              <div class="col-span-1">{{ results[i].id }}</div>
              <div class="col-span-1">{{ results[i].name }}</div>
              <div class="col-span-1">${{ results[i].price }}</div>
            </div>
          </div>
        </div>
        <div v-else>
          No results yet. Try a search.
        </div>
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
      results: ''
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
  border: 2px solid rgba(0, 0, 0, 0.6);
}
</style>