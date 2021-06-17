import Vue from 'vue'
export default {
  setEmployees(state, payload) {
    Vue.set(state, "employees", payload);
  },
}