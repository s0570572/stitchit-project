<template>
  <h2>Upload your cross-stitch scheme here</h2>
  <p></p>
  <p>Please specify the title of your work and choose its topicId and difficultyEntity level from the drop-down menu. You may
    also add a short description of the piece if you like. For technical reasons, it is only possible to host links to
    external cloud services here so please first upload your jpg-file to your cloud service (e.g. Google Drive, iCloud etc.)
    and then copy the link to the file into the respective field below.</p>
  <p></p>
  <h4>Title*</h4>
  <p>Write the title of your scheme here:</p>
  <!-- typing field -->
  <h4>Description(optional)</h4>
  <p>If you wish, write a short description of your scheme here:</p>
  <!-- typing field -->
  <h4>Topic*</h4>
  <p>Choose the topicId of your scheme from the drop-down menu:</p>
  <!-- drop-down menu -->
  <h4>Difficulty level*</h4>
  <p>Choose the difficultyEntity level of your scheme from the drop-down menu:</p>
  <!-- drop-down menu -->
  <h4>Link*</h4>
  <p>Paste the link to your scheme on GoogleDrive etc. here:</p>
  <!-- typing field -->
  <!-- submit button text="Submit" -->
</template>

<script>
export default {
  name: 'AddEntry'
}
</script>

<style scoped>

</style>
