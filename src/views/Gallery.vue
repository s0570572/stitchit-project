<template>
  <topic-tab></topic-tab>
  <accordeon id="intro"></accordeon>
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
  padding: 50px 300px 461px;
}
</style>
