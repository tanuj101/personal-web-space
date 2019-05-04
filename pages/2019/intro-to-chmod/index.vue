<template>
  <div v-html="blog"></div>
</template>
<script>
import blog from "./intro-to-chmod.md";
export default {
  name: "intro-to-chmod",
  computed: {
    blog() {
      return blog;
    }
  }
};
</script>
