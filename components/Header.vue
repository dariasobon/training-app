<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand href="#">Training app</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-nav pills>
          <b-nav-item><NuxtLink to="/">Home page</NuxtLink></b-nav-item>
          <b-nav-item
            ><NuxtLink to="/create-post">Create post</NuxtLink></b-nav-item
          >
          <b-nav-item><NuxtLink to="/all">All posts</NuxtLink></b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
