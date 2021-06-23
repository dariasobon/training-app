
import { shallowMount, createLocalVue, RouterLinkStub  } from "@vue/test-utils";
import Header from "../../components/Header.vue"
import { BootstrapVue } from 'bootstrap-vue'
import NuxtLink from '../../.nuxt/components/nuxt-link.server.js'
import { beforeEach, expect, it } from "@jest/globals";
import Vue from 'vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Test header', () => {
  Header.components = Header.components || {};
  Header.components.NuxtLink = NuxtLink;
  let wrapper
  let $router
  let $route
  beforeEach(() => {
    $route = {
      name: "/add-employee"
    }
    wrapper = shallowMount(Header, {
      localVue,
      mocks: {
        $router,
        $route: { name: '/add-employee' },
      },
      components: {
        NuxtLink: new Vue()
      },
      stubs: {
        NuxtLink: true,
        // Any other component that you want stubbed
      },
      
    })
  })
  it('test if there are 3 nav links', async () => {
    const link = wrapper.findAllComponents(NuxtLink).length
    expect(link).toEqual(3)
  })
  it('checks if navs display proper text', () => {
    const link = wrapper.findAllComponents(NuxtLink)
    expect(link.at(0).text()).toBe('Home page')
    expect(link.at(1).text()).toBe('Add employee')
    expect(link.at(2).text()).toBe('All employees')
  })

  it('check if clicked nav redirects to a good page', () => {
    
    
    expect(wrapper.vm.$route.name).toBe('/add-employee')
  })
})