import AppPost from "@/pages/AppPost.vue"
import { createLocalVue, shallowMount } from "@vue/test-utils"
import Vuex from "vuex"
import VueRouter from "vue-router"

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
describe("appPost.vue", () => {
  let actions
  let getters
  let state
  let mutations
  let store

  beforeEach(() => {
    getters = {
      appPost: (state) => state.currentPost,
      appAuthor: (state) => state.currentAuthor,
      ifError: (state) => state.apiError,
    }
    actions = {
      fetchPost: jest.fn(),
      fetchAuthor: jest.fn(),
    }
    mutations = {
      setPost(state, post) {
        state.currentPost = post
      },
      setAuthor(state, author) {
        state.currentAuthor = author
      },
      setError(state, value) {
        state.apiError = value
      },
    }
    state = {
      currentPost: {
        id: 1,
        title: "Title 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eros pellentesque, interdum felis vitae, porta nisi. Nam sed posuere eros, sit amet consequat nulla. Integer convallis sapien interdum, elementum nisl eu, pharetra ipsum. Praesent iaculis pellentesque felis. Nam nec tempus quam. Nam bibendum dictum lectus. Vestibulum maximus bibendum facilisis. Pellentesque porta metus vel tellus mattis, quis rhoncus dolor egestas. Donec id finibus nisi. Sed ut rutrum ipsum, ut congue tellus.",
        userId: 1,
      },
      currentAuthor: {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
      apiError:false
    }
    store = new Vuex.Store({
      state,
      actions,
      getters,
      mutations,
    })
  })

  it("is vue instance", () => {
    const wrapper = shallowMount(AppPost, {
      localVue,
      store,
    })

    expect(wrapper.exists()).toBe(true)
  })
})
