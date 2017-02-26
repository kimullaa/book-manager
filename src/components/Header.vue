<template>
<nav class="header navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarEexample2">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">
        <img alt="Brand" src="../assets/brandImage.png" style="height: 20px;">
      </a>
    </div>

    <div class="collapse navbar-collapse" id="navbarEexample2">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">図書を管理する</a></li>
        <li><a href="#">システム管理</a></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
    }
  }
}
</script>


<style scoped>

</style>
