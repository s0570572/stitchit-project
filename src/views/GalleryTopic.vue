<template>
  <topic-tab></topic-tab>
  <accordeon-topic id="intro" v-bind="$route.params.topic">{{ $route.params.topic }}</accordeon-topic>
</template>

<script>

import TopicTab from '../components/TopicTab'
import AccordeonTopic from '../components/AccordeonTopic'

export default {
  name: 'GalleryAnimals',
  inheritAttrs: false,
  components: { TopicTab, AccordeonTopic }
}
</script>

<style scoped>

</style>
