<template>
<div class="bookList container">
  <table class="table table-striped">
    <thead> 
      <tr>
        <th>isbn</th>
        <th>title</th>
        <th>author</th>
        <th>publisher</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in list" v-bind:todo="todo">
        <td>{{ todo.isbn }}</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
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
        {isbn: 'isbn1'},
        {isbn: 'isbn2'},
        {isbn: 'isbn3'},
        {isbn: 'isbn4'},
        {isbn: 'isbn5'},
        {isbn: 'isbn6'}
      ]
    }
  }
}
</script>


<style scoped>

</style>
