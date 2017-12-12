<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-item">
        <router-link to="/" exact>Home</router-link>
      </div>
      <div class="navbar-item">
        <router-link to="/AnotherOne">About</router-link>
      </div>
    </nav>
    <br/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

