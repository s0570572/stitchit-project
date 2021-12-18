<template>
  <div class="background">
    <div class="form-check form-check-inline" id="abstand">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked>
      <label class="form-check-label" for="inlineCheckbox1">Show all items</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" checked>
      <label class="form-check-label" for="inlineCheckbox2">Beginner</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" checked>
      <label class="form-check-label" for="inlineCheckbox3">Medium</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" checked>
      <label class="form-check-label" for="inlineCheckbox4">Advanced</label>
    </div>
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
.background {
  background-color: #a1ba8b;
  height: 100%;
}
#abstand {
  padding-bottom: 30px;
}
</style>
