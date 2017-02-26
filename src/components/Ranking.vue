<template>
  <div class="ranking">
    <div class="row">
      <div v-for="item in list" v-bind:item="item" class="col-xs-6 col-md-3">
        <a href="#" class="thumbnail">
          <img v-bind:src="item.link">
        </a>
          <p>{{item.ranking}}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ranking',
  data: {
    list: [
     {link: 'http://chigai-allguide.com/wp-content/uploads/2340786913.jpg', ranking: 1},
      {link: 'http://chigai-allguide.com/wp-content/uploads/2340786913.jpg', ranking: 2},
      {link: 'http://chigai-allguide.com/wp-content/uploads/2340786913.jpg', ranking: 3},
      {link: 'http://chigai-allguide.com/wp-content/uploads/2340786913.jpg', ranking: 4}
    ]
  }
}
</script>
