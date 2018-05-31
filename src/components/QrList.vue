<template>
  <div class="listLink">
    <ul id="listLink">
      <li v-for="(item, index) in linkQR" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['linkQR'],
  name: 'listLink'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
} */
</style>
