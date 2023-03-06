<template>
  <div>
    <div v-if="ifError == true">
      <div class="alert alert-primary" role="alert">There is an error while we fetch blogs, please try again later.</div>
    </div>
    <div v-else>
      <div v-for="post in appPosts" v-bind:key="post.id" class="d-flex justify-content-center">
        <div class="card mb-3 mt-3" style="width: 40rem">
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
            <router-link exact :to="{ name: 'Post', params: { id: post.id } }"><a class="btn btn-primary">See Blog</a></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "app-posts",
  computed: {
    ...mapGetters(["appPosts", "ifError"]),
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  created() {
    this.fetchPosts()
  },
}
</script>
