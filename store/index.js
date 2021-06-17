import Vue from "vue";
import Vuex from "vuex";

import employees from "@/store/employees";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    modules: {
      employees
    }
  });

export default store;