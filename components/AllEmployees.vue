<template>
  <div>
    <b-table class="text-center" striped hover :items="employees" :fields="fields">
      <template #cell(edit)="row">
        <b-button variant="info" size="sm" @click="row.toggleDetails" class="mr-2">
          Edit
        </b-button>
      </template>
      <template #cell(delete)="row">
        <b-button variant="danger" size="sm" @click="row.toggleDetails" class="mr-2">
          Delete
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      fields: [
          {
            key: 'id',
            label: 'ID'
          },
          {
            key: 'firstName',
            label: "First name",
            sortable: true
          },
          {
            key: 'lastName',
            label: 'Last name',
            sortable: true
          },
          {
            key: 'email',
            label: 'Email'
          },
          {
            key: 'contractType',
            label: 'Contract type'
          },
          {
            key: 'employment',
            label: 'Employment'
          },
          {
            key: 'age',
            label: 'Person age'
          },
          {
            key: 'edit',
            label: "Edit"
          },
          {
            key: 'delete',
            label: 'Delete'
          }
        ],
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
