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
      <dd class="col-sm-7">Please write the title here:</dd>

      <dt class="col-sm-3">Description</dt>
      <dd class="col-sm-7">Please write a short description:</dd>

      <dt class="col-sm-3">Topic(*)</dt>
      <dd class="col-sm-7">Please choose the topic from the drop-down menu:</dd>

      <dt class="col-sm-3">Difficulty level(*)</dt>
      <dd class="col-sm-7">Please choose the difficulty level from the dropdown menu:</dd>

      <dt class="col-sm-3">Link(*)</dt>
      <dd class="col-sm-7">Please paste the link to your stitching scheme here:</dd>
    </dl>
    <button type="button" class="btn btn-light" id="button">Submit</button>
  </div>

</template>

<script>
export default {
  name: 'AddEntry',
  components: {}
}
</script>

<style scoped>
#headingpadding {
  padding-top: 100px;
  padding-bottom: 15px;
}
.text {
  align-content: center;
  padding: 5px 150px 5px;
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
  padding: 30px 70px 9px;
}
#button {
  margin-bottom: 42px;
}
</style>
