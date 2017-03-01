<template>

<div class="bookHisotry">
  <h1>貸し出し履歴</h1>
  isbn :{{ isbn  }}
  <ul>
    <li>xxx さんが借りています</li>
    <li>xxx さんが借りたことがあります</li>
    <li>xxx さんが借りたことがあります</li>
  </ul>
</div>
</template>

<script>

export default {
  name: 'bookHistory',
  props: [ 'isbn' ],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: large;
}
.right {
  float:right;
}
.glyphicon {
  margin-left:1%;
}
</style>
