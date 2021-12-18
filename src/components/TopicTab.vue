<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-nav">
          <router-link class="nav-link" to="/entries-animals">Animals</router-link>
          <router-link class="nav-link" to="/entries-people">People</router-link>
          <router-link class="nav-link" to="/entries-landscape">Landscape</router-link>
          <router-link class="nav-link" to="/entries-architecture">Architecture</router-link>
          <router-link class="nav-link" to="/entries-still-life">Still-life</router-link>
          <router-link class="nav-link" id="lastitem" to="/entries-miscellaneous">Miscellaneous</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopicTab',
  components: {}
}
</script>

<style scoped>

</style>
