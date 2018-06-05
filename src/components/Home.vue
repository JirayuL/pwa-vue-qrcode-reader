<template>
  <div class="home">
    <p>Hello</p>
    <!-- <ul>
      <li v-for="(item, index) in linkQR" :key="index">
        {{ item }}
      </li>
    </ul> -->
    <router-link to="/qr-scanner" exact><button>Scan</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
