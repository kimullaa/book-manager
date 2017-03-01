<template>
<div class="bookList">

  <table class="table table-striped">
    <thead>
      <tr>
        <th>isbn</th>
        <th>title</th>
        <th>author</th>
        <th>publisher</th>
        <th>貸与可否</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in list" v-bind:book="book" v-on:click="showHistory(book)">
        <td>{{ book.isbn }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.publisher }}</td>
        <td>{{ book.remaining === 0 ? 'ng' : 'ok' }} </td>
      </tr>
    </tbody>
  </table>
  <transition name="fade">
  <book-history key="selectedIsbn" v-bind:isbn="selectedIsbn" v-if="selectedIsbn !== ''"></book-history>
  </transition>
</div>
</template>

<script>
import BookHistory from '@/components/parts/BookHistory'

export default {
  name: 'bookList',
  data () {
    return {
      list: [],
      selectedIsbn: ''
    }
  },
  methods: {
    showHistory: function (book) {
      this.selectedIsbn = book.isbn
    }
  },
  components: {BookHistory},
  created: function () {
    let self = this
    this.$http.get('http://10.133.71.204:3000/books')
      .then(function (response) {
        for (let book of response.data) {
          self.list.push(book)
        }
        console.log(self.list)
      })
  }
}
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
