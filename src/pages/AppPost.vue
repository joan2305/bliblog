<template>
  <div class="d-flex justify-content-center mt-5">
    <div v-if="ifError == true">
      <div class="alert alert-primary" role="alert">There is an error while we fetch blogs, please try again later.</div>
    </div>
    <div v-else>
      <div class="card" style="width: 30rem">
        <div class="card-body">
          <h5 class="card-title">{{ appPost.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">By {{ appAuthor.name }}</h6>
          <p class="card-text">{{ appPost.body }}</p>
          <h6 class="card-subtitle text-decoration-none d-flex flex-start mb-2 text-muted">Author username : {{ appAuthor.username }}</h6>
        </div>
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
    ...mapGetters(["appPost", "appAuthor", "ifError"]),
  },
  methods: {
    ...mapActions(["fetchPost", "fetchAuthor"]),
  },
  created() {
    this.fetchPost(this.id)
  },
  watch: {
    appPost(value) {
      this.fetchAuthor(value.userId)
    },
  },
}
</script>
<style lang=""></style>
