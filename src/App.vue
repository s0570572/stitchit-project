<template id="background">
  <navbar></navbar>
  <picturebar></picturebar>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar'
import Picturebar from './components/Picturebar'

export default {
  name: 'App',
  components: { Navbar, Picturebar }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  padding: 300px;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#background {
  background-color: #a1ba8b;
  height: 100%;
}
</style>
