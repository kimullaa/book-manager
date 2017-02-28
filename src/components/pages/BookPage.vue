<template>
  <div class="bookPage container">
    <ranking></ranking>
    <book-list v-on:selected="book = $event"></book-list>
    <book-history v-bind:isbn="book.isbn" v-show="Object.keys(book).length !== 0"></book-history>
    <advertisement></advertisement>
  </div>
</template>

<script>
import BookList from '@/components/parts/BookList'
import BookHistory from '@/components/parts/BookHistory'
import Advertisement from '@/components/parts/Advertisement'
import Ranking from '@/components/parts/Ranking'

export default {
  name: 'bookPage',
  data () {
    return {
      book: {}
    }
  },
  components: {BookList, Advertisement, Ranking, BookHistory}
}
</script>
