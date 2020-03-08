<template>
  <div>
    <div @click="fullWidthImage = !fullWidthImage" :class="{'viewer-container':fullWidthImage}">
      <img :class="{ full: fullWidthImage,'expand-img':1 }" :src="src" alt />
    </div>
    <img @click="fullWidthImage = !fullWidthImage" :src="src" class="paragraph-img" alt />
  </div>
</template>
<script>
export default {
  props: ["src"],
  data() {
    return {
      fullWidthImage: false
    };
  }
};
</script>
<style scoped>
.viewer-container {
  position: fixed;
  overflow: scroll;
  height: 100%;
  height: 100%;
  width: auto;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  right: 0;
  z-index: 2;
}
.expand-img {
  display: none;
  height: 100%;
  width: 100%;
}
.viewer-container img {
  max-height: 60vh;
  max-width: 100vw;
  width: auto;
  display: block !important;
}
.full {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
}
img:hover {
  cursor: pointer;
}
</style>