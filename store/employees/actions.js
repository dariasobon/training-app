import axios from 'axios'
export default {
  async getEmployees ({ commit }) {
    const employees = await axios.get('http://localhost:5000/employees')
    commit('setEmployees', employees.data)
  }
}