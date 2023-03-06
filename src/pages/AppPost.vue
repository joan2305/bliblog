<template>
  <div class="d-flex justify-content-center mt-5">
    <div class="card" style="width: 30rem">
      <div class="card-body">
        <h5 class="card-title">{{ appPost.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">By {{ appAuthor.name }}</h6>
        <p class="card-text">{{ appPost.body }}</p>
        <router-link :to="{ name: 'AuthorPosts', params: { id: appAuthor.id } }" class="card-subtitle text-decoration-none d-flex flex-start mb-2 text-muted"
          ><h6>Author username : {{ appAuthor.username }}</h6></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
export default {
  name: "app-post",
  props: {
    id: String,
    authorId: String,
  },
  computed: {
    ...mapGetters(["appPost", "appAuthor"]),
  },
  methods: {
    ...mapActions(["fetchPost", "fetchAuthor", "fetchPostandAuthor"]),
  },
  created() {
    this.fetchPost(this.id)
  },
  watch:{
    appPost(value){
      this.fetchAuthor(value.userId)
    }
  }
}
</script>
<style lang=""></style>
