<template>
  <div id="textbox">
    <h3 id="headingpadding"><strong>Hello and welcome to the StitchIt! project!</strong></h3>
    <p class="text"><em>{{ msg }}This is where you can find a cross-stitch scheme of your liking for free. Just don't hesitate to go through all the different topic tabs to look for your favourite motives and choose the difficulty level that you want to tackle.</em></p>
    <p class="text"><em>Do you create schemes of your own and want to share them? Feel free to do so by clicking on the dark green 'add' button in the upper right corner. You will be then guided through a simple uploading procedure.</em></p>
    <p class="text"><em><strong>Now take your time and enjoy the StitchIt! project!</strong></em></p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style>
#textbox {
  align-content: center;
  padding: 175px 150px 170px;
}
.text {
  align-content: center;
  padding: 5px;
}
#headingpadding {
  padding-bottom: 20px;
}
</style>
