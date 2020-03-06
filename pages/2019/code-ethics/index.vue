<template>
  <div>
    <h1 class="blog-heading">Code Ethics</h1>
    <p>
      One thing that I've learnt from past few weeks is the importance of code
      readability and some other fairly useful fundamentals.
    </p>
    <p>
      The widely ignored factor whilst coding a program is readability. Code is
      for humans afterall. The Code should be pleasing to read not a burden.
      There's no point in having concise code if people don't understand it,
      particularly when working with multiple people (which is the case most of
      the time)
    </p>
    <h3>Motive after code?</h3>
    <div>
      The primary motive behind your code is to compile successfully but what
      you've been told is wrong apparently. Believe me anyone can write code
      that a computer understand, writing code that humans can understand is the
      way to go. Code that is unreadable by other engineers even if it
      functions, is bad code.
      <br />
      <div class="question">
        If the computer doesn't run it, it's broken. If people can't read it, it
        will be broken. Soon.
      </div>
      You'd really want to write good code now No? There is no accurate
      definition of good code although there are some constraints that will
      possibly help in writing good code to some extent
    </div>
    <h2>But how?</h2>
    <h4>Self-documenting code</h4>
    <div>
      What
      <b>I</b> mean by
      <a
        title="wiki to abstraction"
        target="_blank"
        href="https://en.wikipedia.org/wiki/Self-documenting_code"
        >Self-documenting code</a
      >
      --
      <i
        >thou should use techniques such as clear and und'rstandable variable
        names</i
      >
      <p>
        Example - Instead of n or count, it is better to use a readable
        self-explanatory name such as
        <em>blog.numberOfWords</em>. That is a minimalist's documentation. Not
        only for variable names whether of modules, objects or programs even for
        function arguments, should be encouraged. The code must always have a
        clear and clean structure so that a human reader can easily understand
        it.
        <br />
        <br />
        <i>Choosing variable names is more of an art.</i> Ask yourself if
        someone were looking at the name for the first time what would they make
        of it? Will they understand its purpose?
      </p>
      <div class="question">
        “Master programmers think of systems as stories to be told rather than
        programs to be written”
        <br />—
        <a
          href="https://en.wikipedia.org/wiki/Robert_C._Martin"
          target="_blank"
          title="Robert C. Martin"
          rel="noopener noreferrer"
          >Uncle Bob</a
        >.
      </div>
      <p>
        Always try to use Pronounceable names -- If you can't pronounce it there
        will be difficulty in discussing the code with your fellows
      </p>
      <p>What is it that we achieve with self documenting code?</p>
      <ul>
        <li>Minimize use of comments</li>
        <li>Source code easier to read and understand</li>
        <li>Minimized effort required to maintain the code</li>
      </ul>
    </div>
    <h4>But what about comments?</h4>
    <div>For inline-comments, they don't make sense to me most of the time</div>
    <pre style="height:110px">
    <prism style="height:70px" language="javascript">
      sentences[i] = sentences[i] + "." // Add fullstop to ith element of sentences
    </prism>
    </pre>
    <div>
      Such comments often get further truncated or lost as the code began to
      grow. If you're going to write a comment, give it at least a full line or
      better, give it more space as you need but as I've mentioned
      self-documenting code
      <b>does not</b> fully eliminate comments from your source code but
      minimize their use. Again, I'm not saying you should not comment, just
      keep in mind that in self-documenting you don't have to explain every line
      in comments.
    </div>

    <h4>Code splitting</h4>
    <div>
      Making code split in parts can help reader to focus on only what is
      relevant to them. Here we can mind our good friend
      <b>Abstraction</b>. It makes the code really maintainable and readable
      you'll see in the example.
      <div class="question">
        The essence of abstractions is preserving information that is relevant
        in a given context, and forgetting information that is irrelevant in
        that context.
      </div>

      <div>
        Let's take some example, here the method doSomeComplexCalculations() is
        abstracted from our main file. This code might look simple but by
        splitting the method
        <u>doSomeComplexCalculations</u>
        we are making the code future-safe, confusion-safe and bug-safe. Let me
        elaborate how.
        <br />
        <pre>
          <prism language="python">
    from renderer import doSomeComplexCalculations
    def renderSomeStuff():
      # Some lines
      doSomeComplexCalculations("test")
      # More lines
          </prism>
        </pre>
        <div>
          Now suppose someone wants to make a change in
          <b>#Some lines</b>(say), they just don't want to huge see the huge
          chunk of code which is inside our method doSomeComplexCalculations
          because it's really irrelevant to them in this case. Seeing it might
          cause confusion or maybe scare them :p who knows! we don't have
          slightest idea who'd deal with the code in future.
        </div>
      </div>
    </div>
    <p>
      Following these methodologies will definitely help you code better I
      think.
    </p>
    <p>
      This is not an end. I will try to write about more ways to clean the code!
    </p>
    <p>
      At last thank you for reading this and if you have any kind of feedback
      feel free to hit on this
      <i>anonymous</i>
      <FeedbackLink />link.
    </p>
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
    title: "Code Ethics",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "The primary motive behind your code is to compile successfully but what you've been told is wrong apparently. Believe me anyone can write code that a computer understand, writing code that humans can understand is the way to go."
      },

      {
        hid: "og:description",
        name: "og:description",
        content:
          "The primary motive behind your code is to compile successfully but what you've been told is wrong apparently. Believe me anyone can write code that a computer understand, writing code that humans can understand is the way to go."
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "www.tanujnagpal.tech/2019/code-ethics"
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
        content: "Code Ethics"
      },
      {
        hid: "Keywords",
        name: "keywords",
        content:
          "coding,learn coding,documentation,code documentation,code readablity,self-documenting code,uncle bob"
      }
    ]
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
.test {
  height: 60px;
}
</style>
