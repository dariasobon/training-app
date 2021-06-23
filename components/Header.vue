<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand href="#">Employees app</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-nav pills>
          <b-nav-item><NuxtLink to="/">Home page</NuxtLink></b-nav-item>
          <b-nav-item><NuxtLink to="/add-employee" id="addEmployees">Add employee</NuxtLink></b-nav-item>
          <b-nav-item><NuxtLink to="/all">All employees</NuxtLink></b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
