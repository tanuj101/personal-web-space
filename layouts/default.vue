<template>
  <div id="app">
    <nav>
      <nuxt-link class="logo" to="/">
        <div title="Home" class="logo-text">T</div>
      </nuxt-link>
      <ul class="navigation">
        <li v-show="!(this.$route.fullPath == '/')">
          <nuxt-link title="Home" class="home" to="/">Home</nuxt-link>
        </li>
        <!-- <li>
          <nuxt-link title="Projects" class="link" to="/projects">Projects</nuxt-link>
        </li>-->
        <li>
          <nuxt-link title="About me" class="link" to="/about">About</nuxt-link>
        </li>
      </ul>
    </nav>
    <div id="main">
      <transition name="component-fade" mode="out-in">
        <nuxt />
      </transition>
    </div>
  </div>
</template>

<script>
// import Prism from "prismjs";
export default {
  components: {},
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Hello. My name is Tanuj Nagpal. I'm an Indian maker-of-software with a passion for technology. During the past 1 year I've worked with....",
    },
    {
      hid: "og:description",
      name: "og:description",
      content:
        "Hello. My name is Tanuj Nagpal. I'm an Indian maker-of-software with a passion for technology. During the past 1 year I've worked with....",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "www.tanujnagpal.tech/about",
    },
    {
      hid: "og:type",
      property: "og:type",
      content: "article",
    },
    {
      hid: "og:site_name",
      property: "og:site_name",
      content: "tanujnagpal.tech",
    },
    {
      "http-equiv": "Content-Type",
      content: "text/html",
      charset: "utf-8",
    },
    {
      "http-equiv": "Content-Type",
      content: "text/html",
      charset: "ISO-8859-1",
    },
  ],
};
</script>

<style scoped>
.home {
  color: rgb(192, 175, 175) !important;
}
.home:hover {
  color: #333 !important;
}
ul {
  flex: 0 0 auto;
  list-style-type: none;
  display: flex;
}
li {
  margin-right: 25px;
}
li a {
  text-decoration: none;
  color: rgb(192, 175, 175);
  font-size: 12px;
}
</style>
<style>
/* @import url("@@/node_modules/prismjs/themes/prism.css"); */
/* @import url("@@/node_modules/prismjs/themes/prism-okaidia.css"); */
.nuxt-link-active {
  color: #000 !important;
}
.logo {
  display: inline-block;
  position: relative;
}
.logo-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12px;
  font-weight: 600;
  font-family: "Cormorant", serif;
  font-size: 2rem;
}
.logo:hover {
  animation: shine 1s;
  text-decoration: none;
  mask-image: linear-gradient(
    -75deg,
    rgba(255, 255, 255, 0.6) 30%,
    rgb(255, 255, 255) 50%,
    rgb(255, 255, 255) 70%
  );
  mask-size: 200%;
  cursor: pointer;
}
@keyframes shine {
  from {
    mask-position: 150%;
  }
  to {
    mask-position: 0%;
  }
}
nav a {
  text-decoration: none;
  color: #333;
  margin: 0;
}
h1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12px;
}
nav {
  display: flex;
  justify-content: space-between;
  height: 50px;
  cursor: default;
}
.question {
  background: #f1f0f0;
  padding: 5px;
  border-left: 3px solid #333;
  margin: 25px 0px;
  word-wrap: break-word;
}
.link:hover {
  color: #000;
  text-decoration: none;
}
.disabled {
  color: rgb(192, 175, 175) !important;
}
code {
  background: rgba(233, 232, 232, 0.973);
}
* {
  font-family: "IBM Plex Sans", sans-serif;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;
}
p {
  font-size: 14.5px;
}
a {
  color: rgba(3, 102, 214, 1);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

body {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}
::-webkit-scrollbar {
  width: 0em;
}
code::-webkit-scrollbar {
  width: unset;
}
#main {
  padding: 0;
  padding-top: 30px;
  margin: 8px 0;
}
#app {
  padding: 15px;
}
.blog-heading {
  font-size: 80px;
  font-weight: 700;
  margin: 30px 0 !important;
}
.blog-list {
  padding: 0;
}
.blog-list > li {
  margin-left: 1.4em;
  margin-top: 0.5em;
}
.paragraph-img {
  height: auto;
  max-width: 100%;
  padding: 35px 0px;
}
@media (max-width: 700px) {
  .blog-heading {
    font-size: 40px;
  }
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
div {
  font-size: 15px;
}
</style>
