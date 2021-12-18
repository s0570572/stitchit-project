<template>
  <dl class="row">
    <dt class="col-sm-3">Title:</dt>
    <dd class="col-sm-8">Placeholder for the title.</dd>

    <dt class="col-sm-3">Description:</dt>
    <dd class="col-sm-9">Placeholder for the description.</dd>

    <dt class="col-sm-3">Topic:</dt>
    <dd class="col-sm-9">Placeholder for the topic.</dd>

    <dt class="col-sm-3">Difficulty level:</dt>
    <dd class="col-sm-9">Placeholder for the difficulty level.</dd>

    <dt class="col-sm-3">Link:</dt>
    <dd class="col-sm-9">Placeholder for the link.</dd>
  </dl>
</template>

<script>
export default {
  name: 'Listalignment'
}
</script>

<style scoped>
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-.5 * var(--bs-gutter-x));
  margin-left: calc(-.5 * var(--bs-gutter-x));
  text-align: left;
}
</style>
