<template>

<div class="inputBook">
  <h1>変更する<span v-on:click="cancel" class="glyphicon right glyphicon-remove"></span></h1>

  <form class="form-horizontal row">
    <div class="form-group">
      <label for="isbn" class="col-sm-1 control-label">isbn</label>
      <div class="col-sm-5">
        <input id="isbn" class="form-control" type="text" :value="book.isbn"></input>
      </div>
      <label for="title" class="col-sm-1 control-label">title</label>
      <div class="col-sm-5">
        <input id="title" class="form-control" type="text" :value="book.title"></input>
      </div>
    </div>

    <div class="form-group">
      <label for="author" class="col-sm-1 control-label">author</label>
      <div class="col-sm-5">
        <input id="author" class="form-control" type="text" :value="book.author"></input>
      </div>
      <label for="publisher" class="col-sm-1 control-label">publisher</label>
      <div class="col-sm-5">
        <input id="publisher" class="form-control" type="text" :value="book.publisher"></input>
      </div>
    </div>

    <div class="form-group">
      <div class="col-sm-offset-10 col-sm-2">
        <button type="button" class="btn">更新</button>
      </div>
    </div>
  </form>

</div>
</template>

<script>

export default {
  name: 'inputBook',
  props: [ 'book', 'isActive' ],
  data () {
    return {
      change: {}
    }
  },
  methods: {
    cancel: function () {
      for (var x in this.book) {
        console.log(x)
      }
      for (var y in this.origin) {
        console.log(y)
      }

      if (this.change.isbn !== this.book.isbn ||
          this.change.title !== this.book.title ||
          this.change.publisher !== this.book.publisher ||
          this.change.author !== this.book.author) {
        console.log('hello')
      } else {
        this.$emit('canceled')
      }
    }
  },
  updated: function () {
    // for (var x in this.book) {
    //   console.log(x)
    // }
    // this.change = Object.assign({}, this.book)
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
