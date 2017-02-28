<template>
  <div class="bookPage container">
    <ranking></ranking>
    <book-list v-on:selected="showInputBook($event)"></book-list>
    <input-book v-bind:book="book" v-show="isActive"></input-book>
    <advertisement></advertisement>
  </div>
</template>

<script>
import InputBook from '@/components/parts/InputBook'
import BookList from '@/components/parts/BookList'
import Advertisement from '@/components/parts/Advertisement'
import Ranking from '@/components/parts/Ranking'

export default {
  name: 'bookPage',
  data () {
    return {
      book: {},
      isActive: false
    }
  },
  methods: {
    showInputBook (book) {
      this.isActive = true
      this.book = book
    }
  },
  components: {BookList, Advertisement, Ranking, InputBook}
}
</script>
