<template>
  <div class="about">
    <div>This is an about page</div>
    <ul>
      <li>vue3</li>
      <li>vue-router5</li>
      <li>{{ a }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const a = ref(2)
</script>
<style lang="less" scoped>
.about {
  width: 375px;

  div {
    font-size: 12px;
  }
}
</style>
