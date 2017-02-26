<template>
  <div class="bookPage">
    <ranking></ranking>
    <book-list></book-list>
    <advertisement></advertisement>
  </div>
</template>


<script>
import BookList from '@/components/BookList'
import Advertisement from '@/components/Advertisement'
import Ranking from '@/components/Ranking'

export default {
  name: 'bookPage',
  components: {BookList, Advertisement, Ranking}
}
</script>
