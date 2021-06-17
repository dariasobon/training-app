<template>
  <div>
    <b-table striped hover :items="employees" :fields="fields"></b-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      fields: ["id", "firstName", "lastName", "email"]
    }
  },
  computed: {
    ...mapGetters({
      employees: "employees/getEmployees"
    })
  },
  async mounted() {
    await this.$store.dispatch('employees/getEmployees')
  }
};
</script>

<style lang="scss" scoped></style>
