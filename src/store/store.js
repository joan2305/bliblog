import Vue from "vue"
import Vuex from "vuex"
import "es6-promise/auto"
import axios from "axios"

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    posts: [],
    authors: [],
    currentPost: {},
    currentAuthor: {},
  },
  getters: {
    appPosts: (state) => {
      // console.log(state.posts.data)
      return state.posts
    },
    appPost: (state) => {
      return state.currentPost
    },
    appAuthor: (state) => {
      return state.currentAuthor
    },
    postAuthorId: (state) => {
      return state.currentPost.userId
    }
    // authorList:(state)=>{
    //   return state.
    // }
  },
  actions: {
    fetchPosts: (state) => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          // console.log(response.data);
          state.commit("setPosts", response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    fetchPost: ({ commit }, postsId) => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postsId}`)
        .then((response) => {
          // console.log(response)
          commit("setPost", response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    fetchAuthor: ({ commit }, authorId) => {
      console.log(authorId)
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${authorId}`)
        .then((response) => {
          console.log(response)

          commit("setAuthor", response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    fetchPostandAuthor: ({ commit }, postsId) => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postsId}`)
        .then((response) => {
          console.log(response.data)
          commit("setPost", response.data)
          axios
            .get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`)
            .then((response) => {
              console.log(response)
              commit("setAuthor", response.data)
            })
            .catch((error) => {
              console.log(error)
            })
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setPost(state, post) {
      state.currentPost = post
    },
    setAuthor(state, author) {
      state.currentAuthor = author
    },
  },
})
