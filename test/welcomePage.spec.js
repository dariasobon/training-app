import { shallowMount, mount } from "@vue/test-utils"
import AppBody from "../components/AppBody.vue"
import { BJumbotron } from 'bootstrap-vue'

describe('Welcome page', () => {
  it('Welcome page should display what you can create', () => {
    const wrapper = shallowMount(AppBody)
    expect(wrapper.find("p").text()).toBe("You can create new one or see and edit your current employees")
  })
  it('has expected default structure', async () => {
    const wrapper = mount(BJumbotron, {
      propsData: {
        lead: 'This application helps you to manage your employees'
      }
    })

    const $lead = wrapper.find('p')
    expect($lead.classes()).toContain('lead')
    expect($lead.text()).toEqual('This application helps you to manage your employees')
  })
})
