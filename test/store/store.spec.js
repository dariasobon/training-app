import Vuex from 'vuex'
import Vue from 'vue'
import {shallowMount} from '@vue/test-utils'
import { BTable } from "bootstrap-vue"

import store from '../../store/index'
import AllEmployees from '../../components/AllEmployees'
import actions from '../../store/employees/actions'

Vue.use(Vuex)
const $store = store()
$store.dispatch = jest.fn()
describe("get employees", () => {
  fit('get emp', () => {
    const wrapper = shallowMount(AllEmployees, {
      mocks: {
        $store,
        actions
      },
      stubs: {
        BTable
      }
    })
    actions.getEmployees = jest.fn()
    expect($store.dispatch).toHaveBeenCalled()
    expect($store.dispatch).toHaveBeenCalledWith(actions.getEmployees)
  })
})