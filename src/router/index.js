import Vue from "vue"
import Router from "vue-router"
import AppPosts from "@/pages/AppPosts.vue"
import AppPost from "@/pages/AppPost.vue"
import AuthorPosts from "@/pages/AuthorPosts.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/posts",
      name: "Posts",
      component: AppPosts,
      // children: [
      //   {

      //   },
      // ],
    },
    {
      path: "/posts/:id",
      name: "Post",
      props: true,
      component: AppPost,
    },
    {
      path: "/authors/:id",
      name: "AuthorPosts",
      component: AuthorPosts,
    },
    // {
    //     path:'/friends/:id/:age/:weight',
    //     props:true,
    //     name:'Friends',
    //     component: Friends
    // },
    // {
    //     path:'/contact',
    //     name:'Contact',
    //     component: Contact
    // },
    // {
    //     path:'/account',
    //     name:'Account',
    //     component: Account
    // }
  ],
  mode: "history",
})
