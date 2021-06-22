
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Header from "../../components/Header.vue"
import { BootstrapVue } from 'bootstrap-vue'
import { expect } from "@jest/globals";
const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Test header', () => {
  it('test if All employees button is clickable', async () => {
    const wrapper = shallowMount(Header, {localVue
    })
    const button = wrapper.find('#addEmployees')
    
    await button.trigger('click')
    expect(button).toHaveBeenCalled()
  })
  
})