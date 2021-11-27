<template>
  <topic-tab></topic-tab>
  <accordeon></accordeon> // eventually move to a different component for the gallery view body with a router and add a padding
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

</style>
