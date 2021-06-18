import { shallowMount, mount } from "@vue/test-utils";
import AppBody from "../../components/AppBody.vue";
import { BJumbotron } from "bootstrap-vue";

describe("App Body Component", () => {
  it("App Body should display what you can create", () => {
    const wrapper = shallowMount(AppBody);
    expect(wrapper.find("p").text()).toBe(
      "You can create new one or see and edit your current employees"
    );
  });
  it("Jumbotron in App Body tells", async () => {
    const wrapper = mount(AppBody, {
      stubs: {
        BJumbotron
      },
      propsData: {
        lead: "This application helps you to manage your employees"
      }
    });

    const $lead = wrapper.find("p");
    expect($lead.classes()).toContain("lead");
    expect($lead.text()).toEqual("This application helps you to manage your employees");
  });
});
