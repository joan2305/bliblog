<template lang="">
  <header>
    <nav class="navbar navbar-expand-lg" :style="{ background: bgSecondary }">
      <div class="container">
        <a class="navbar-brand" href="#">BliBlog</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/"><a aria-current="page">Blogs</a></router-link>
            </li>
            
          </ul>
          <!-- <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-dark" type="submit">Search</button>
          </form> -->
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "nav-bar",
  data() {
    return {
      bgSecondary: "#E0B4A4",
    }
  },
  computed: {},
  methods: {},
}
</script>
<style scoped></style>
