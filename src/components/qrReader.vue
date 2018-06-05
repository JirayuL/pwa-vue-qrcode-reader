<template>
  <div class="qrReader">
    <qrcode-reader @decode="onDecode" @locate="onLocate" :paused="paused">
      <b>scan qr code via the camera</b>
    </qrcode-reader>
    <router-link to="/" exact><button>Back</button></router-link>
    <qr-list :linkQR="linkQR"></qr-list>
  </div>
</template>

<script>
import QrList from './QrList'

export default {
  name: 'qrReader',
  components: {
    QrList
  },
  data () {
    return {
      linkQR: [],
      paused: false
    }
  },
  methods: {
    onDecode (content) {
      // console.log('onDecode')
      if (content) {
        this.linkQR.push({
          id: Math.random(),
          content: content
        })
        this.$router.push({ name: 'home' })
      }
      // this.paused = true
      // setTimeout(() => {
      //   this.paused = false
      // }, 10)
      // console.log(content)
    },
    onLocate (points) {
      console.log(points)
    }
  }
}
</script>
