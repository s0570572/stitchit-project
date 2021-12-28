<template>
  <h3 id="headingpadding"><strong>Upload your cross-stitch scheme here</strong></h3>
  <div class="text">
    <p></p>
    <p>Please specify the title of your work and choose its topic and difficulty level from the drop-down menu. You may
      also add a short description of the piece if you like. For technical reasons, it is only possible to host links to
      external cloud services here so please first upload your jpg-file to your cloud service (e.g. Google Drive, iCloud etc.)
      and then copy the link to the file into the respective field below.</p>
    <p>Compulsory fields are marked with (*).</p>
    <p></p>
    <dl class="row">
      <dt class="col-sm-3">Title(*)</dt>
      <dd class="col-sm-7">
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Please write the title here</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="title">
        </div>
      </dd>

      <dt class="col-sm-3">Description</dt>
      <dd class="col-sm-7">
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default1">Please write a short description</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="description">
        </div>
      </dd>

      <dt class="col-sm-3">Topic(*)</dt>
      <dd class="col-sm-7">
        <div class="input-group mb-3">
          <select id="topic" class="form-select">
            <option value="" selected disabled>Please choose the topic from the dropdown menu</option>
            <option value="ANIMALS">Animals</option>
            <option value="PEOPLE">People</option>
            <option value="LANDSCAPE">Landscape</option>
            <option value="ARCHITECTURE">Architecture</option>
            <option value="STILLLIFE">Still-life</option>
            <option value="MISCELLANEOUS">Miscellaneous</option>
          </select>
        </div>
      </dd>

      <dt class="col-sm-3">Difficulty level(*)</dt>
      <dd class="col-sm-7">
        <div class="input-group mb-3">
          <select id="difficulty" class="form-select">
            <option value="" selected disabled>Please choose the difficulty level from the dropdown menu</option>
            <option value="BEGINNER">Beginner</option>
            <option value="MEDIUM">Medium</option>
            <option value="ADVANCED">Advanced</option>
          </select>
        </div>
      </dd>

      <dt class="col-sm-3">Link(*)</dt>
      <dd class="col-sm-7">
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default2">Please paste the link here</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
      </dd>
    </dl>
    <button type="button" class="btn btn-light" id="button" onclick="location.href='../add-success'">Submit</button>
  </div>

</template>

<script>
export default {
  name: 'AddEntry'
}
</script>

<style scoped>
#headingpadding {
  padding-top: 45px;
  padding-bottom: 3px;
}
.text {
  align-content: center;
  padding: 1px 150px 1px;
}
.col-sm-3 {
  flex: 0 0 auto;
  width: 23%;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin: calc(-.5 * var(--bs-gutter-y)) calc(-.5 * var(--bs-gutter-x)) 1px;
  text-align: left;
  padding: 5px 70px 1px;
}
.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #2E3C50;
  border-radius: 0.25rem;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #2E3C50;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #2E3C50;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
#button {
  margin-bottom: 14px;
}
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
</style>
