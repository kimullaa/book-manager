<template>
<div class="bookList">
  <h1>書籍一覧</h1>

  <ul class="nav nav-tabs">
    <li role="presentation" class="active"><a href="#">図書一覧</a></li>
    <li role="presentation"><a href="#">貸し出し</a></li>
  </ul>
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
      <tr v-for="book in list" v-bind:book="book" v-on:click="$emit('selected', book)">
        <td>{{ book.isbn }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.publisher }}</td>
        <td>{{ book.remaining === 0 ? 'ng' : 'ok' }} </td>
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
