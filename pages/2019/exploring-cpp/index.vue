<template>
  <div>
    <h1 class="blog-heading">Exploring C++</h1>
    <p>My first programming language was The infamous JavaScript. Don't blame me for that. It all started way back in my first semester. I never really developed any interest in C which was being taught at that time, I had my reasons. Somehow got into web development and In web you can't just avoid JavaScript.</p>
    <br />
    <div>
      I've been working with JavaScript for more than a year now, I really liked JavaScript but While I was in some programming communities(
      <a
        target="_blank"
        href="https://discordapp.com/invite/programming"
      >Discord</a>/
      <a target="_blank" href="https://www.reddit.com/r/ProgrammerHumor/">Reddit</a>) I always saw one or other ranting about JS that it just sucks and I honestly just kept wondering but why'd you say that? Ofcourse I didn't know about the basics of programming languages like
      <a
        href="https://en.wikipedia.org/wiki/Strong_and_weak_typing#Static_type-checking"
        target="_blank"
      >typing</a>,
      <a href="https://en.wikipedia.org/wiki/Type_safety" target="_blank">type safety</a>, speed etc. and never cared about anything like that. I literally never wondered
      <p class="question">Why there are errors which are difficult to debug?</p>There are times when you can't narrow down the problem so you have to shoot log statements to see to where the problem starts. Indeed one has to be really careful while writing JavaScript code the
      <a
        href="https://trello.com/c/5TzQwzMJ/80-what-is-asynchronous-programming-and-why-is-it-important-in-javascript"
        target="_blank"
      >asynchronous</a> code can cause a lot of
      <code>undefined(s)</code>. Well these were my personal annoyances.
      <img
        alt="some meme about arch Linux"
        class="paragraph-img"
        src="../../../assets/cpp_meme.jpg"
      />
      <p>
        Some might say why I'm so against JavaScript but here is the thing I might be wrong but it's my personal opinion it is what I think. Now I'm not very intrested in learning programming languages without
        <a
          href="https://stackoverflow.com/questions/805168/what-is-a-strictly-typed-language"
          target="_blank"
        >strict type system</a> after I got to know C++.
      </p>
      <p>
        Just pause reading for a second and try
        <code>"3" + 4</code> in either a node environment or in a browser console. Just think about what you get in the output, Just think for a second. This is exactly what's wrong with JavaScript.
      </p>
      <h2>Enough about Javascript</h2>
      <p>I kept on going and going with it without any second thoughts until one day I discovered C++ during this summer break June-July 2019. Honestly speaking one wouldn't like JavaScript who knows about C++ or any C-look-a-likes Java,Rust etc.. Although we can't compare C++ and JavaScript because they simply come into use in different cases and it is not really fair to compare them But I'm talking about elegancy of a general programming language, C++ is very elegant in terms of generalizing all the programming languages and I think that it should be the programming language one should learn first but that's my opinion if you're working with something different that is totally fine.</p>
      <p>
        Maybe I'm still a beginner to it but so far my experience have been great . It is certainly a big language but new comers should just ignore the more advanced features those can come later. Learning about the
        <a
          href="http://www.cplusplus.com/reference/stl/"
          target="_blank"
        >stl</a> should be enough until you get familiar to the syntax.
      </p>
      <p>
        Another thing how C++ did a good thing to me is adding up a little chore to my daily task list, solving problems on
        <a
          href="https://codechef.com"
          target="_blank"
        >CodeChef</a>
        which I found fun and important you might as well say that, as you get to know about designing algorithms too. I feel this helps me to improve my problem solving ability to a great extent while also telling me more about the language itself but anyway I only started C++ as I found it intresting I try any random problem whenever I'm free. This way I get to know more features of C++ as well. Who knows in near future I get to work with C++ in a real software or something like that.
      </p>
      <p>
        At last thank you for reading this and if you have any kind of feedback feel free to hit on this
        <i>anonymous</i>
        <FeedbackLink />link.
      </p>
    </div>
  </div>
</template>
<script>
import FeedbackLink from "@@/components/FeedbackLink.vue";
export default {
  components: {
    FeedbackLink
  },
  name: "",
  head: {
    title: "Exploring C++",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "My first programming language was The infamous JavaScript. Don't blame me for that. It all started way back in my first semester. I never really developed any interest in C which was being taught at that time, I had my reasons. Somehow got into web development and In web you can't just avoid JavaScript"
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "My first programming language was The infamous JavaScript. Don't blame me for that. It all started way back in my first semester. I never really developed any interest in C which was being taught at that time, I had my reasons. Somehow got into web development and In web you can't just avoid JavaScript"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "www.tanujnagpal.tech/2019/exploring-cpp"
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
        content: "Exploring C++"
      },
      {
        hid: "Keywords",
        content:
          "is cpp worth it?,learn c++,learning cpp worth it?,cpp 2019,c++ 2019,C++ 2019,C++17,C++ vs js,C++ vs JavaScript,exploring CPP"
      }
    ]
  }
};
</script>