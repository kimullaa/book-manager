<template>
<div class="rentalList">

  <table class="table table-striped">
    <thead>
      <tr>
        <th>title</th>
        <th>借りてる人</th>
        <th>レンタル開始期間</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in list" v-bind:book="book">
        <td>{{ book.isbn }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
      </tr>
    </tbody>
  </table>

</div>
</template>

<script>

export default {
  name: 'bookList',
  data () {
    return {
      list: [
      {isbn: 'isbn1', title: 'title1', publisher: 'publisher1', author: 'author1', remaining: 1},
      {isbn: 'isbn2', title: 'title2', publisher: 'publisher2', author: 'author2', remaining: 1},
      {isbn: 'isbn3', title: 'title3', publisher: 'publisher3', author: 'author3', remaining: 0},
      {isbn: 'isbn4', title: 'title4', publisher: 'publisher4', author: 'author4', remaining: 2},
      {isbn: 'isbn5', title: 'title5', publisher: 'publisher5', author: 'author5', remaining: 2}
      ]
    }
  }
}
</script>


<style scoped>

</style>
