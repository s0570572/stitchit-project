<template>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Entry #1
        </button>
      </h2>
      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body"><listalignment></listalignment></div>
      </div>
    </div>
  </div>
</template>

<script>
import Listalignment from './Listalignment'

export default {
  name: 'Accordeon',
  components: {
    Listalignment
  }
}
</script>

<style scoped>
</style>
