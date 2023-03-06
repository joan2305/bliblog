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
    apiError: false,
  },
  getters: {
    appPosts: (state) => {
      const appPosts = state.posts.map(post => {
        post.user = state.authors.find(author => {
          return post.userId === author.id
        })
        return post
      })
      return appPosts
    },
    appAuthors: (state) => {
      return state.authors
    },
    appPost: (state) => {
      return state.currentPost
    },
    appAuthor: (state) => {
      return state.currentAuthor
    },
    postAuthorId: (state) => {
      return state.currentPost.userId
    },
    ifError: (state) => {
      return state.apiError
    },
  },
  actions: {
    fetchPosts: (state) => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          state.commit("setPosts", response.data)
          state.commit("setError", false)
        })
        .catch(() => {
          state.commit("setError", true)
        })
    },
    fetchPost: ({ commit }, postsId) => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postsId}`)
        .then((response) => {
          commit("setPost", response.data)
          commit("setError", false)
        })
        .catch(() => {
          commit("setError", true)
        })
    },
    fetchAuthor: ({ commit }, authorId) => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${authorId}`)
        .then((response) => {
          commit("setAuthor", response.data)
          commit("setError", false)
        })
        .catch(() => {
          commit("setError", true)
        })
    },
    fetchAuthors: ({ commit }) => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/`)
        .then((response) => {
          commit("setAuthors", response.data)
          commit("setError", false)
        })
        .catch(() => {
          commit("setError", true)
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
    setError(state, value) {
      state.apiError = value
    },
    setAuthors(state, value) {
      state.authors = value
    },
  },
})
