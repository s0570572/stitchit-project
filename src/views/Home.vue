<template>
  <div id="intro">
    <hello-world></hello-world>
  </div>
</template>

<script>

import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
#intro {
  background-color: #a1ba8b;
  height: 80%;
}
</style>
