<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
// import AppPosts from "./pages/AppPosts.vue"

export default {
  name: "App",
  components: {
    NavBar,
    // AppPosts,
  },
}
</script>

<style>
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
