<template>
<div class="rentalList">

  <table class="table table-striped">
    <thead>
      <tr>
        <th>title</th>
        <th>借りてる人</th>
        <th>レンタル開始期間</th>
        <th>日数</th>
        <th>催促する</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in list" v-bind:record="record">
        <td>{{ record.title }}</td>
        <td>{{ record.username }}</td>
        <td>{{ record.start }}</td>
        <td>{{ passed }}日借りています</td>
        <td><button type="button" class="btn">催促</button> </td>
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
      list: []
    }
  },
  created: function () {
    let self = this
    this.$http.get('http://10.133.71.204:3000/rentals')
      .then(function (response) {
        self.list = response.data
      })
  },
  computed: {
    passed: function () {
      return '1'
    }
  }
}
</script>


<style scoped>

</style>
