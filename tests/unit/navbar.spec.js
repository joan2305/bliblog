import { createLocalVue, shallowMount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter)

describe('NavBar.vue', ()=>{
  it('navbar exists', ()=>{
    const wrapper = shallowMount(NavBar, {
      localVue,
      router
    });
    expect(wrapper.exists()).toBe(true);
  })
})


