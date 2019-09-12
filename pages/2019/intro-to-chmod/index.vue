<template>
  <div>
    <div v-html="blog"></div>Now Let's now make our own shell script and see chmod in action.
    Create a file named test.sh. Fill in its content with
    <br />
    <br />
    <code>echo "First shell script"</code>
    <br />
    <br />then just give the executable permission to our script
    <br />
    <br />
    <code>chmod +x test.sh</code>
    <br />
    <p>Boom your very first shell script is ready, run it with</p>
    <br />
    <code>./test.sh</code>
    You will now see the output on the command line :)
    <br />
    <br />Kudos on your first ever shell script!. That should be enough for introduction.
    <p>
      At last thank you for reading this and if you have any kind of feedback feel free to hit on this anonymous
      <FeedbackLink />link.
    </p>
  </div>
</template>
<script>
import FeedbackLink from "@@/components/FeedbackLink.vue";
import blog from "./intro-to-chmod.md";
export default {
  name: "intro-to-chmod",
  components: {
    FeedbackLink
  },
  head: {
    title: "Introduction to chmod",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "A Unix/Linux command to change the access permissions of Files and Directories through command line, Before the actual understanding I never really tried how chmod works but I've used it nevertheless for various purposes like running a shell script , changing permissions of an..."
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "A Unix/Linux command to change the access permissions of Files and Directories through command line, Before the actual understanding I never really tried how chmod works but I've used it nevertheless for various purposes like running a shell script , changing permissions of an..."
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "www.tanujnagpal.tech/2019/intro-to-chmod"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "article"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "tanujnagpal.tech"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Introduction to chmod for beginners"
      },
      {
        hid: "Keywords",
        content: "chmod,unix,shell,linux,shell scripts"
      }
    ]
  },
  computed: {
    blog() {
      return blog;
    }
  }
};
</script>
