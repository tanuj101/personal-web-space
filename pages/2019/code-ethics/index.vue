<template>
  <div>
    <h1 class="blog-heading">Code Ethics</h1>
    <p>One thing that I've learnt from past few weeks is the importance of code readability and some other fairly useful fundamentals.</p>
    <p>You wrote some code and return to that part again after a long time because of some unfortunate events ;) you should not feel like</p>
    <img
      alt="some meme about code readability"
      class="paragraph-img"
      src="../../../assets/poor_comments_meme.jpeg"
    />
    <h3>Motive after code?</h3>
    <p>
      The primary motive behind your code is to compile successfully but you've been wrong the whole time. Believe me anyone can write code that a computer understand, writing code that humans can understand is the way to go. Code that is unreadable by other engineers even if it functions, is bad code.
      <br />
      <br />
      <span class="question">
        <i>If the computer doesn't run it, it's broken. If people can't read it, it will be broken. Soon.</i>
      </span>
      <br />
      <br />You'd really want to write good code now No? There is no accurate definition of good code although there are some constraints that will possibly help in writing good code to some extent
    </p>
    <h2>But how?</h2>
    <h4>Code Splitting</h4>
    <div>
      Making code split in parts can help reader to focus on only what is relevant to them. Here we can mind our good friend
      <b>Abstraction</b>. Let's take some example
      <pre>
      <prism language="python">
        from renderer import methodWithManyLines
        def renderSomeStuff():
          # Some lines
          methodWithManyLines("test")
          # More lines
      </prism>
      </pre>
      <div>
        Here the methodWithManyLines() is abstracted from our main file.
        This code might look simple enough but by splitting the method
        <u>methodWithManyLines</u>
        we are making the code future-safe, confusion-safe and bug-safe. Let me elaborate how.
        <br />
        <p>Now suppose someone wants to add a feature in Some lines(say), they simply don't want to huge see the huge chunk of code which is inside our method methodWithManyLines because it's irrelevant to them. It can cause confusion or maybe scare them :p who knows! we don't have slightest idea know who'd read this code in the future.</p>
      </div>
    </div>
  </div>
</template>
<script>
import FeedbackLink from "@@/components/FeedbackLink.vue";
import Prism from "vue-prismjs";
import "prismjs/themes/prism.css";
export default {
  components: {
    FeedbackLink,
    Prism
  },
  name: "",
  head: {
    title: "Code Ethics | October 2019",
    mata: []
  },
  data() {
    return {
      code: `
      ls ~/test/
      `
    };
  },
  mounted: function() {}
};
</script>
<style scoped>
@import url("@@/node_modules/prismjs/themes/prism.css");
pre {
  padding: 0px !important;
  margin: 4px 0px !important;
}
code {
  background: unset;
}
</style>