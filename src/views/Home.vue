<template>
  <div id="intro">
    <div id="textbox">
      <p class="text"><em><strong>Hello and welcome to the StitchIt! project!</strong></em></p>
      <p class="text"><em>This is where you can find a cross-stitch scheme of your liking for free. Just don't hesitate to go through all the different topic tabs to look for your favourite motives and choose the difficulty level that you want to tackle.</em></p>
      <p class="text"><em>Do you create schemes of your own and want to share them? Feel free to do so by clicking on the 'add' button on the upper right side of your screen. You will be then guided through a simple uploading procedure.</em></p>
      <p class="text"><em><strong>Now take your time and enjoy the StitchIt! project!</strong></em></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style>
#intro {
  background-image: url("../assets/background.jpg");
  height: 100vh;
}
#textbox {
  background-color: white;
  opacity: 0.4;
}
.text {
  color: black;
  opacity: 100;
}
</style>
