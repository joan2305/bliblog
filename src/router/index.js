import Vue from "vue"
import Router from "vue-router"
import AppPosts from "@/pages/AppPosts.vue"
import AppPost from "@/pages/AppPost.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/posts",
      name: "Posts",
      component: AppPosts,
    },
    {
      path: "/posts/:id",
      name: "Post",
      props: true,
      component: AppPost,
    },
  ],
  mode: "history",
})
