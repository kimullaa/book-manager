<template>
<div class="jumbotron advertisement container">
  <p>{{ text }}</p>
  <img v-bind:src="imageUrl"/>
</div>

</template>

<script>
export default {
  name: 'advertisement',
  data () {
    return {
      text: 'awesome javascript framework',
      imageUrl: 'https://jp.vuejs.org/images/logo.png'
    }
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
