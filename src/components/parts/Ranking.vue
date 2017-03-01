<template>
<div class="ranking">
  <h1>人気ランキング</h1>
  <span v-show="isLoading" class="glyphicon glyphicon-refresh"></span>
  <div class="row">
    <a v-on:click="decrement" class="carousel left">
      <span class="glyphicon glyphicon-chevron-left"/>
    </a>
    <div v-for="item in list" v-bind:item="item" class="col-xs-6 col-md-3">
      <h2>{{item.ranking}}位</h2>
      <router-link :to="item.isbn" class="thumbnail">
        <img v-bind:src="item.link">
      </router-link>
      <p>{{item.title}}</p>
    </div>
    <a v-on:click="increment" class="carousel right">
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
      list: [],
      page: 1,
      isLoading: false
    }
  },
  methods: {
    increment: function () {
      if (this.isLoading) {
        return
      }
      this.page++
      this.fetch()
    },
    decrement: function () {
      if (this.isLoading) {
        return
      }
      if (this.page > 1) {
        this.page--
        this.fetch()
      }
    },
    fetch: function () {
      const self = this
      self.isLoading = true
      self.$http.get(`http://10.133.71.204:3000/ranking?_page=${self.page}&_limit=4`)
      .then(function (response) {
        if (response.data.length === 0) {
          self.page--
        } else {
          self.list = response.data
        }
      }).then(function () {
        self.isLoading = false
      })
    }
  },
  created: function () {
    this.fetch()
  }
}
</script>

<style scoped>
h1 {
  display: inline
}
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
