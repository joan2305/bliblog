import AppPosts from "@/pages/AppPosts.vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
import { createLocalVue, shallowMount } from "@vue/test-utils"

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)
// const flushPromises = () => new Promise(setImmediate)
describe("AppPosts.vue", () => {
  let actions
  let getters
  let store
  let state
  let mutations

  beforeEach(() => {
    getters = {
      appPosts: (state) => state.appPosts,
      ifError: (state) => state.apiError,
    }
    actions = {
      fetchPosts: jest.fn(),
      fetchAuthors: jest.fn(),
    }
    state = {
      apiError: false,
      appPosts: [
        {
          userId: 1,
          id: 1,
          title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          user: {
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
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
          user: {
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
        },
      ],
    }
    mutations = {
      setPosts: (state, posts) => {
        state.posts = posts
      },
      setAuthors: (state, value) => {
        state.authors = value
      },
    }
    store = new Vuex.Store({
      state,
      actions,
      getters,
      mutations,
    })
  })
  it("is vue instance", () => {
    const wrapper = shallowMount(AppPosts, { sync: false, store, localVue })
    expect(wrapper.exists()).toBe(true)
  })

  it("calls created", async () => {
    const fetchPosts = jest.spyOn(AppPosts.methods, "fetchPosts")
    const fetchAuthors = jest.spyOn(AppPosts.methods, "fetchAuthors")
    const wrapper = shallowMount(AppPosts, {
      localVue,
      store,
    })
    expect(wrapper.exists()).toBe(true)
    expect(fetchPosts).toHaveBeenCalled()
    fetchPosts.mockRestore()
    expect(fetchAuthors).toHaveBeenCalled()
    fetchAuthors.mockRestore()
  })

  it("sets computed property", async () => {
    const wrapper = shallowMount(AppPosts, {
      localVue,
      store,
      computed: {
        appPosts: () => [
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
        ],
        apiError:false
      },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.find(".card-title").text()).toBe("Title 1")
    expect(wrapper.find(".card-author").text()).toBe("Author : Leannes Grahams")
    expect(wrapper.find(".card-content").text()).toBe(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eros pellentesque, interdum felis vitae, porta nisi. Nam sed posuere eros, sit amet consequat nulla. Integer convallis sapien interdum, elementum nisl eu, pharetra ipsum. Praesent iaculis pellentesque felis. Nam nec tempus quam. Nam bibendum dictum lectus. Vestibulum maximus bibendum facilisis. Pellentesque porta metus vel tellus mattis, quis rhoncus dolor egestas. Donec id finibus nisi. Sed ut rutrum ipsum, ut congue tellus."
    )
  })
  it('sets error computed propery', async()=>{
    const wrapper = shallowMount(AppPosts, {
      localVue,
      store,
      computed:{
        ifError:()=>true
      }
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.error-alert').text()).toBe("There is an error while we fetch blogs, please try again later.")
  })
})
