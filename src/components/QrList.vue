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

<style></style>
