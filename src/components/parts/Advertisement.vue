<template>
<div class="jumbotron advertisement">
  <p>{{ advertisement.text }}</p>
  <img v-bind:src="advertisement.imageUrl"/>
</div>

</template>

<script>
export default {
  name: 'advertisement',
  data () {
    return {
      advertisement: {}
    }
  },
  created: function () {
    let self = this
    this.$http.get('http://10.133.71.204:3000/advertisement')
      .then(function (response) {
        self.advertisement = response.data
      })
  }
}
</script>


<style scoped>
.jumbotron {
  text-align:center;
  height: 200px;
}

img {
  height:100px;
}

</style>
