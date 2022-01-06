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
      <div class="accordion-item" v-for="entry in entries" :key="entry.entryid">
        <h2 class="accordion-header" :id="'flush-heading' + entry.entryid">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#flush-collapse'+entry.entryid"
            aria-expanded="false"
            :aria-controls="'flush-collapse-'+entry.entryid">
            {{ entry.title }}
          </button>
        </h2>
        <div
          :id="'flush-collapse'+entry.entryid"
          class="accordion-collapse collapse"
          :aria-labelledby="'flush-heading'+entry.entryid"
          data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <dl class="row">
              <dt class="col-sm-3">Title:</dt>
              <dd class="col-sm-8">{{ entry.title }}</dd>

              <dt class="col-sm-3">Description:</dt>
              <dd class="col-sm-9">{{ entry.description }}</dd>

              <dt class="col-sm-3">Topic:</dt>
              <dd class="col-sm-9">{{ entry.topic }}</dd>

              <dt class="col-sm-3">Difficulty level:</dt>
              <dd class="col-sm-9">{{ entry.difficulty }}</dd>

              <dt class="col-sm-3">Link:</dt>
              <dd class="col-sm-9">{{ entry.link }}</dd>

              <router-link class="btn" :to="{name: 'DeleteEntry', params: { entryid: entry.entryid },}"> Delete </router-link>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Accordeon',
  data () {
    return {
      entries: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/entries' + this.$route.params.topic
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(entry =>
        this.entries.push(entry)
      ))
      .catch(error => console.log('error', error))
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
.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #dc3545;
  text-align: left;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>
