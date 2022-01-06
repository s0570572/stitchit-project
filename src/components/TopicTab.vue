<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-nav">
          <router-link class="nav-link" :to="{name: 'GalleryTopic', params: { topic: 'ANIMALS' },}">Animals</router-link>
          <router-link class="nav-link" :to="{name: 'GalleryTopic', params: { topic: 'PEOPLE' },}">People</router-link>
          <router-link class="nav-link" :to="{name: 'GalleryTopic', params: { topic: 'LANDSCAPE' },}">Landscape</router-link>
          <router-link class="nav-link" :to="{name: 'GalleryTopic', params: { topic: 'ARCHITECTURE' },}">Architecture</router-link>
          <router-link class="nav-link" :to="{name: 'GalleryTopic', params: { topic: 'STILLLIFE' },}">Still-life</router-link>
          <router-link class="nav-link" :to="{name: 'GalleryTopic', params: { topic: 'MISCELLANEOUS' },}">Miscellaneous</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'TopicTab'
}
</script>

<style scoped>

</style>
