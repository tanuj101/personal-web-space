<template>
  <div id="app">
    <nav>
      <nuxt-link class="logo" to="/">
        <h1 title="Home" class="logo-text">T</h1>
      </nuxt-link>
      <ul class="navigation">
        <li>
          <a class="link disabled" title="Coming Soon" @click.prevent>Projects</a>
          <!-- TODO: Add Projects -->
          <!-- <router-link @click.native.prevent to="/projects">Projects</router-li
          nk>-->
        </li>
        <li>
          <nuxt-link title="About me" class="link" to="/about">About</nuxt-link>
        </li>
      </ul>
    </nav>
    <div id="main">
      <transition name="component-fade" mode="out-in">
        <nuxt/>
      </transition>
    </div>
  </div>
</template>
<style scoped>
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
  color: #aaa;
  font-size: 12px;
}
</style>
<style>
.router-link-active {
  color: #333;
}
.logo {
  display: inline-block;
  position: relative;
}
.logo-text {
  font-family: "Cormorant";
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

.link:hover {
  color: #333;
  text-decoration: none;
}
.disabled {
  color: #aaa !important;
}
code {
  background: rgba(0, 0, 0, 0.04);
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
</style>

