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
      <a class="navbar-brand" href="#">Book Manager</a>
    </div>

    <div class="collapse navbar-collapse" id="navbarEexample2">
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">システム管理<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><router-link to="/system/user" >ユーザ管理</router-link></li>
            <li ><a href="#">図書管理</a></li>
          </ul>
        </li>
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
