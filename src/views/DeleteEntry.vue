<template>
  <h3 id="headingpadding"><strong>Delete Entry</strong></h3>
  <div id="textbox">
    <p>What a pity! Are sure you want to delete your stitching scheme? </p>
    <p>If yes, please press the button below.</p>
    <button class="btn btn-danger" type="submit" id="button" @click = "deleteEntry" onclick="location.href='../entries'">Delete irrevocably</button>
  </div>
</template>

<script>
export default {
  name: 'DeleteEntry',
  data () {
    return {
      entryid: this.$route.params.entryid
    }
  },
  // props: {
  //  entryid: this.$route.params.entryid
  // },
  methods: {
    deleteEntry () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/entries/' + this.$route.params.entryid // + dynamic variable from the uri

      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
#headingpadding {
  padding-top: 190px;
  padding-bottom: 5px;
}
#textbox {
  align-content: center;
  padding: 5px 150px 227px;
}
#button {
  margin-top: 5px;
  margin-bottom: 14px;
  margin-right: 15px;
  border: 1px solid #2E3C50;
}
</style>
