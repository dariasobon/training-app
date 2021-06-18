import { shallowMount, mount } from "@vue/test-utils"
import AppBody from "../../components/AppBody.vue"
import { BJumbotron } from "bootstrap-vue"

describe("App Body Component", () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(AppBody, {
      stubs: {
        BJumbotron
      }
    })
  })

  it("App Body should display what you can create", () => {
    const $p = wrapper.find("p.second");
    expect($p.text()).toBe(
      "You can create new one or see and edit your current employees"
    )
  })


  it("Jumbotron in App Body tells", async () => {
    const $lead = wrapper.find("p")
    expect($lead.classes()).toContain("lead")
    expect($lead.text()).toEqual(
      "This application helps you to manage your employees"
    )
  })
})
