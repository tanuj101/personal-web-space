<template>
  <span>
    <a v-on:click.prevent id="show-modal" @click="bool = true">Show Modal</a>
    <Feedback v-if="bool" @close="bool = false"></Feedback>
  </span>
</template>
<script>
import Feedback from "./Feedback";
export default {
  name: "FeedbackLink",
  components: {
    Feedback
  },
  props: ["showModal"],
  data: function() {
    return {
      bool: false
    };
  }
};
</script>
<style scoped>
#show-modal {
  cursor: pointer;
}
</style>
