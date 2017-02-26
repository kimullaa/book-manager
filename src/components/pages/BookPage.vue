<template>
  <div class="bookPage container">
    <ranking></ranking>
    <book-list></book-list>
    <advertisement></advertisement>
  </div>
</template>


<script>
import BookList from '@/components/parts/BookList'
import Advertisement from '@/components/parts/Advertisement'
import Ranking from '@/components/parts/Ranking'

export default {
  name: 'bookPage',
  components: {BookList, Advertisement, Ranking}
}
</script>
