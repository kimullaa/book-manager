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
.bookHistory {
  animation: fadeIn 0.3s ease 0s 1 normal;
  -webkit-animation: fadeIn 0.3s ease 0s 1 normal;
}

@keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
}

@-webkit-keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
}

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
