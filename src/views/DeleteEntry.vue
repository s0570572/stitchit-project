<template>
  <h3 id="headingpadding"><strong>Delete Entry</strong></h3>
  <div id="textbox">
    <p>What a pity! Are sure you want to delete your stitching scheme?
      If yes, please enter the unique password you created for this particular entry while uploading it on this platform
      in the field below.</p>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Password" aria-label="Kennwort" aria-describedby="basic-addon2">
    </div>
    <button class="btn btn-danger" type="submit" id="button">Delete irrevocably</button>
  </div>
</template>

<script>
export default {
  name: 'DeleteEntry'
}
</script>

<style scoped>
#headingpadding {
  padding-top: 190px;
  padding-bottom: 5px;
}
#textbox {
  align-content: center;
  padding: 5px 150px 173px;
}
.input-group>.form-control, .input-group>.form-select {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
  margin: 10px 450px 5px;
  border: 1px solid #2E3C50;
}
#button {
  margin-top: 5px;
  margin-bottom: 14px;
  margin-right: 15px;
  border: 1px solid #2E3C50;
}
</style>
