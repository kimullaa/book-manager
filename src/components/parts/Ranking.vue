<template>
<div class="ranking">
  <h1>人気ランキング</h1>
  <div class="row">
    <a href="#" class="carousel left">
      <span class="glyphicon glyphicon-chevron-left"/>
    </a>
    <div v-for="item in list" v-bind:item="item" class="col-xs-6 col-md-3">
      <h2>{{item.ranking}}位</h2>
      <router-link :to="item.isbn" class="thumbnail">
        <img v-bind:src="item.link">
      </router-link>
      <p>{{item.title}}</p>
    </div>
    <a href="#" class="carousel right">
      <span class="glyphicon glyphicon-chevron-right"/>
    </a>
  </div>
</div>
</template>


<script>

export default {
  name: 'ranking',
  data () {
    return {
      list: [
       {link: 'http://chigai-allguide.com/wp-content/uploads/2340786913.jpg', ranking: 1, title: 'ふくろうの生態', isbn: 'isbn1'},
        {link: 'http://chigai-allguide.com/wp-content/uploads/2340786913.jpg', ranking: 2, title: 'ふくろうの生態 その２', isbn: 'isbn2'},
        {link: 'http://chigai-allguide.com/wp-content/uploads/2340786913.jpg', ranking: 3, title: 'ふくろうの生態 その３', isbn: 'isbn3'},
        {link: 'http://chigai-allguide.com/wp-content/uploads/2340786913.jpg', ranking: 4, title: 'ふくろうの生態 その４', isbn: 'isbn4'}
      ]
    }
  }
}
</script>

<style scoped>
h2 {
  font-size:large;
}

.row {
  position:relative;
}
.carousel {
  top:45%;
  text-align:center;
  opacity: .5;
  position: absolute;
  font-size:x-large;
  width: 5%;
}

.left {
  left: -50px;
  right: auto;
}

.right {
  left:auto;
  right:-50px;
}
</style>
