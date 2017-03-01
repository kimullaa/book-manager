<template>
  <div class="bookPage container">
    <ranking></ranking>
    <ul class="nav nav-tabs">
      <li role="presentation" v-bind:class="{active: ($route.path === '/book/booklist')}"><router-link to="booklist">図書一覧</router-link></li>
      <li role="presentation" v-bind:class="{active: $route.path === '/book/rentallist'}"><router-link to="rentallist">貸し出し状況</router-link></li>
    </ul>
    <router-view></router-view>
    <advertisement></advertisement>
  </div>
</template>

<script>
import BookList from '@/components/parts/BookList'
import RentalList from '@/components/parts/RentalList'
import Advertisement from '@/components/parts/Advertisement'
import Ranking from '@/components/parts/Ranking'

export default {
  name: 'bookPage',
  data () {
    return {
    }
  },
  components: {BookList, Advertisement, Ranking, RentalList}
}
</script>
