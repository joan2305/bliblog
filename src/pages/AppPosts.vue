<template lang="">
  <div>
    <template v-for="post in appPosts">
      <div :key="post.id" class="d-flex justify-content-center">
        <div class="card mb-3 mt-3" style="width: 40rem">
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
            <router-link exact :to="{ name: 'Post', params: { id: post.id } }"><a class="btn btn-primary">See Blog</a></router-link>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
// import PostCard from "../components/PostCard.vue"
export default {
  name: "app-posts",
  components: {
    // PostCard,
  },
  computed: {
    posts() {
      console.log(this.$store.state.posts)
      return this.$store.state.posts
    },
    ...mapGetters(["appPosts"]),
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  created() {
    this.fetchPosts()
  },
}
</script>
