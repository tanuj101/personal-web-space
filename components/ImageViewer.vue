<template>
  <div>
    <img :src="src" alt />
  </div>
</template>
<script>
export default {
  props: ["src"]
};
</script>
<style scoped>
img {
  height: 100px;
  width: 100px;
}
</style>