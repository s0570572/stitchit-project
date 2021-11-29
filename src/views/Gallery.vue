<template>
  <topic-tab></topic-tab>
  <div id="intro">
    <accordeon></accordeon>
  </div>
</template>

<script>
import TopicTab from '../components/TopicTab'
import Accordeon from '../components/Accordeon'

export default {
  name: 'Gallery',
  components: { TopicTab, Accordeon }
}
</script>

<style scoped>
#intro {
  background-color: #a1ba8b;
  padding: 5%;
}
</style>
