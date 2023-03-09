import axios from "axios"

export const state = {
  posts: [],
  authors: [],
  currentPost: {},
  currentAuthor: {},
  errorText: "",
}

export const getters = {
  appPosts: (state) => {
    const appPosts = state.posts.map((post) => {
      post.user = state.authors.find((author) => {
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
  errorText: (state) => {
    return state.errorText
  },
}

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setPost(state, post) {
    state.currentPost = post
  },
  setAuthor(state, author) {
    state.currentAuthor = author
  },
  setAuthors(state, value) {
    state.authors = value
  },
  setErrorText(state, value) {
    state.errorText = value
  },
}

export const actions = {
  fetchPosts: ({ commit }) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        commit("setPosts", response.data)
      })
      .catch((error) => {
        commit("setErrorText", error.message)
      })
  },
  fetchPost: ({ commit }, postsId) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postsId}`)
      .then((response) => {
        commit("setPost", response.data)
      })
      .catch((error) => {
        commit("setErrorText", error.message)
      })
  },
  fetchAuthor: ({ commit }, authorId) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${authorId}`)
      .then((response) => {
        commit("setAuthor", response.data)
      })
      .catch((error) => {
        commit("setErrorText", error.message)
      })
  },
  fetchAuthors: ({ commit }) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        commit("setAuthors", response.data)
      })
      .catch((error) => {
        commit("setErrorText", error.message)
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
