import store from "@/store/main"
import axios from "axios"

// jest.mock("axios", () => ({
//   get: jest.fn(() => Promise.resolve({ data: [] })),
// }))
jest.mock("axios", () => ({
  get: jest.fn(),
}))
// jest.mock("axios")

describe("store.js", () => {
  const state = {
    posts: [
      {
        id: 1,
        title: "Title 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eros pellentesque, interdum felis vitae, porta nisi. Nam sed posuere eros, sit amet consequat nulla. Integer convallis sapien interdum, elementum nisl eu, pharetra ipsum. Praesent iaculis pellentesque felis. Nam nec tempus quam. Nam bibendum dictum lectus. Vestibulum maximus bibendum facilisis. Pellentesque porta metus vel tellus mattis, quis rhoncus dolor egestas. Donec id finibus nisi. Sed ut rutrum ipsum, ut congue tellus.",
        userId: 1,
      },
      {
        id: 2,
        title: "Title 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eros pellentesque, interdum felis vitae, porta nisi. Nam sed posuere eros, sit amet consequat nulla. Integer convallis sapien interdum, elementum nisl eu, pharetra ipsum. Praesent iaculis pellentesque felis. Nam nec tempus quam. Nam bibendum dictum lectus. Vestibulum maximus bibendum facilisis. Pellentesque porta metus vel tellus mattis, quis rhoncus dolor egestas. Donec id finibus nisi. Sed ut rutrum ipsum, ut congue tellus.",
        userId: 1,
      },
    ],
    authors: [
      {
        id: 1,
        name: "Leannes Grahams",
        username: "Brets",
        email: "Sinceres@april.biz",
      },
      {
        id: 2,
        name: "Joseph Andreas",
        username: "josa",
        email: "josandre@yahoo.com",
      },
    ],
    currentPost: {
      id: 1,
      title: "Title 1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eros pellentesque, interdum felis vitae, porta nisi. Nam sed posuere eros, sit amet consequat nulla. Integer convallis sapien interdum, elementum nisl eu, pharetra ipsum. Praesent iaculis pellentesque felis. Nam nec tempus quam. Nam bibendum dictum lectus. Vestibulum maximus bibendum facilisis. Pellentesque porta metus vel tellus mattis, quis rhoncus dolor egestas. Donec id finibus nisi. Sed ut rutrum ipsum, ut congue tellus.",
      userId: 1,
    },
    currentAuthor: {
      id: 1,
      name: "Leannes Grahams",
      username: "Brets",
      email: "Sinceres@april.biz",
    },
    apiError: false,
  }

  it("getters", () => {
    expect(store.getters.appPosts(state)).toEqual([
      {
        id: 1,
        title: "Title 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eros pellentesque, interdum felis vitae, porta nisi. Nam sed posuere eros, sit amet consequat nulla. Integer convallis sapien interdum, elementum nisl eu, pharetra ipsum. Praesent iaculis pellentesque felis. Nam nec tempus quam. Nam bibendum dictum lectus. Vestibulum maximus bibendum facilisis. Pellentesque porta metus vel tellus mattis, quis rhoncus dolor egestas. Donec id finibus nisi. Sed ut rutrum ipsum, ut congue tellus.",
        user: {
          id: 1,
          name: "Leannes Grahams",
          username: "Brets",
          email: "Sinceres@april.biz",
        },
        userId: 1,
      },
      {
        id: 2,
        title: "Title 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eros pellentesque, interdum felis vitae, porta nisi. Nam sed posuere eros, sit amet consequat nulla. Integer convallis sapien interdum, elementum nisl eu, pharetra ipsum. Praesent iaculis pellentesque felis. Nam nec tempus quam. Nam bibendum dictum lectus. Vestibulum maximus bibendum facilisis. Pellentesque porta metus vel tellus mattis, quis rhoncus dolor egestas. Donec id finibus nisi. Sed ut rutrum ipsum, ut congue tellus.",
        user: {
          id: 1,
          name: "Leannes Grahams",
          username: "Brets",
          email: "Sinceres@april.biz",
        },
        userId: 1,
      },
    ])
    expect(store.getters.appAuthors(state)).toEqual([
      {
        id: 1,
        name: "Leannes Grahams",
        username: "Brets",
        email: "Sinceres@april.biz",
      },
      {
        id: 2,
        name: "Joseph Andreas",
        username: "josa",
        email: "josandre@yahoo.com",
      },
    ])
    expect(store.getters.appPost(state)).toEqual({
      id: 1,
      title: "Title 1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eros pellentesque, interdum felis vitae, porta nisi. Nam sed posuere eros, sit amet consequat nulla. Integer convallis sapien interdum, elementum nisl eu, pharetra ipsum. Praesent iaculis pellentesque felis. Nam nec tempus quam. Nam bibendum dictum lectus. Vestibulum maximus bibendum facilisis. Pellentesque porta metus vel tellus mattis, quis rhoncus dolor egestas. Donec id finibus nisi. Sed ut rutrum ipsum, ut congue tellus.",
      userId: 1,
    })
    expect(store.getters.appAuthor(state)).toEqual({
      id: 1,
      name: "Leannes Grahams",
      username: "Brets",
      email: "Sinceres@april.biz",
    })
    expect(store.getters.ifError(state)).toEqual(false)
  })

  it("mutations setPosts", () => {
    const value = [
      {
        id: 1,
        title: "Title 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eros pellentesque, interdum felis vitae, porta nisi. Nam sed posuere eros, sit amet consequat nulla. Integer convallis sapien interdum, elementum nisl eu, pharetra ipsum. Praesent iaculis pellentesque felis. Nam nec tempus quam. Nam bibendum dictum lectus. Vestibulum maximus bibendum facilisis. Pellentesque porta metus vel tellus mattis, quis rhoncus dolor egestas. Donec id finibus nisi. Sed ut rutrum ipsum, ut congue tellus.",
        userId: 1,
      },
      {
        id: 2,
        title: "Title 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eros pellentesque, interdum felis vitae, porta nisi. Nam sed posuere eros, sit amet consequat nulla. Integer convallis sapien interdum, elementum nisl eu, pharetra ipsum. Praesent iaculis pellentesque felis. Nam nec tempus quam. Nam bibendum dictum lectus. Vestibulum maximus bibendum facilisis. Pellentesque porta metus vel tellus mattis, quis rhoncus dolor egestas. Donec id finibus nisi. Sed ut rutrum ipsum, ut congue tellus.",
        userId: 1,
      },
    ]
    const state = {
      posts: [],
    }

    store.mutations.setPosts(state, value)
    expect(state.posts).toEqual(value)
  })

  it("mutations setAuthors", () => {
    const value = [
      {
        id: 1,
        name: "Leannes Grahams",
        username: "Brets",
        email: "Sinceres@april.biz",
      },
      {
        id: 2,
        name: "Joseph Andreas",
        username: "josa",
        email: "josandre@yahoo.com",
      },
    ]
    const state = {
      authors: [],
    }

    store.mutations.setAuthors(state, value)
    expect(state.authors).toEqual(value)
  })

  it("mutations setPost", () => {
    const value = {
      id: 1,
      title: "Title 1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eros pellentesque, interdum felis vitae, porta nisi. Nam sed posuere eros, sit amet consequat nulla. Integer convallis sapien interdum, elementum nisl eu, pharetra ipsum. Praesent iaculis pellentesque felis. Nam nec tempus quam. Nam bibendum dictum lectus. Vestibulum maximus bibendum facilisis. Pellentesque porta metus vel tellus mattis, quis rhoncus dolor egestas. Donec id finibus nisi. Sed ut rutrum ipsum, ut congue tellus.",
      userId: 1,
    }
    const state = {
      currentPost: [],
    }

    store.mutations.setPost(state, value)
    expect(state.currentPost).toEqual(value)
  })
  it("mutations setAuthor", () => {
    const value = {
      id: 1,
      name: "Leannes Grahams",
      username: "Brets",
      email: "Sinceres@april.biz",
    }
    const state = {
      currentAuthor: [],
    }

    store.mutations.setAuthor(state, value)
    expect(state.currentAuthor).toEqual(value)
  })
  it("mutations setError", () => {
    const value = false
    const state = {
      apiError: false,
    }

    store.mutations.setError(state, value)
    expect(state.apiError).toEqual(value)

    const value2 = true
    store.mutations.setError(state, value2)
    expect(state.apiError).toEqual(value2)
  })

  it("is successful actions fetchPosts ", async () => {
    const commit = jest.fn()
    const response = [
      {
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eros pellentesque, interdum felis vitae, porta nisi. Nam sed posuere eros, sit amet consequat nulla. Integer convallis sapien interdum, elementum nisl eu, pharetra ipsum. Praesent iaculis pellentesque felis. Nam nec tempus quam. Nam bibendum dictum lectus. Vestibulum maximus bibendum facilisis. Pellentesque porta metus vel tellus mattis, quis rhoncus dolor egestas. Donec id finibus nisi. Sed ut rutrum ipsum, ut congue tellus.",
        id: 1,
        title: "Title 1",
        userId: 1,
      },
      {
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eros pellentesque, interdum felis vitae, porta nisi. Nam sed posuere eros, sit amet consequat nulla. Integer convallis sapien interdum, elementum nisl eu, pharetra ipsum. Praesent iaculis pellentesque felis. Nam nec tempus quam. Nam bibendum dictum lectus. Vestibulum maximus bibendum facilisis. Pellentesque porta metus vel tellus mattis, quis rhoncus dolor egestas. Donec id finibus nisi. Sed ut rutrum ipsum, ut congue tellus.",
        id: 2,
        title: "Title 2",
        userId: 1,
      },
    ]
    axios.get.mockImplementation(()=>Promise.resolve({data:response}))
    await store.actions.fetchPosts({ commit })
    expect(axios.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/posts")
    expect(commit).toHaveBeenCalledWith("setPosts", response)
    expect(commit).toHaveBeenCalledWith("setError", false)
  })

  it("sets error state when unsuccessful", async () => {
    const commit = jest.fn()
    const err = new Error('Wrong inputs passed in');
    axios.get.mockImplementation(()=>
      Promise.reject()
    )

    await store.actions.fetchPosts({ commit })
    expect(commit).toHaveBeenCalledWith("setError", true)
  })

  it("is successful actions fetchAuthors ", async () => {
    const commit = jest.fn()
    const response = [
      {
        id: 1,
        name: "Leannes Grahams",
        username: "Brets",
        email: "Sinceres@april.biz",
      },
      {
        id: 2,
        name: "Joseph Andreas",
        username: "josa",
        email: "josandre@yahoo.com",
      },
    ]
    axios.get.mockImplementation(()=>Promise.resolve({data:response}))
    await store.actions.fetchAuthors({ commit })
    expect(axios.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users")
    expect(commit).toHaveBeenCalledWith("setAuthors", response)
    expect(commit).toHaveBeenCalledWith("setError", false)
  })

  it("is successful actions fetchPost ", async () => {
    const commit = jest.fn()
    const postId = 1
    const response = {
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eros pellentesque, interdum felis vitae, porta nisi. Nam sed posuere eros, sit amet consequat nulla. Integer convallis sapien interdum, elementum nisl eu, pharetra ipsum. Praesent iaculis pellentesque felis. Nam nec tempus quam. Nam bibendum dictum lectus. Vestibulum maximus bibendum facilisis. Pellentesque porta metus vel tellus mattis, quis rhoncus dolor egestas. Donec id finibus nisi. Sed ut rutrum ipsum, ut congue tellus.",
      id: 1,
      title: "Title 1",
      userId: 1,
    }
    axios.get.mockImplementation(()=>Promise.resolve({data:response}))
    await store.actions.fetchPost({ commit }, postId)
    expect(axios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    expect(commit).toHaveBeenCalledWith("setPost", response)
    expect(commit).toHaveBeenCalledWith("setError", false)
  })
  it("is successful actions fetchAuthor ", async () => {
    const commit = jest.fn()
    const authorId = 1
    const response = {
      id: 1,
      name: "Leannes Grahams",
      username: "Brets",
      email: "Sinceres@april.biz",
    }
    axios.get.mockImplementation(()=>Promise.resolve({data:response}))
    await store.actions.fetchAuthor({ commit }, authorId)
    expect(axios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/${authorId}`)
    expect(commit).toHaveBeenCalledWith("setAuthor", response)
    expect(commit).toHaveBeenCalledWith("setError", false)
  })
})
