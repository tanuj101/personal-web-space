<template>
  <div>
    <p>
      <img
        alt="Tanuj Nagpal"
        align="right"
        class="dp"
        src="../../assets/DSC_0160 (1).jpg"
        width="128"
      />
    </p>
    <p>Hello. My name is Tanuj Nagpal.</p>
    <p>I'm a computer science student.</p>
    <p>
      I'm currently working with Josh Technology Group, previously worked with
      InstantPost as an Intern where my major
      work has been on automation applications.
      <br />
      <!-- Find out more on
      <a href="https://www.linkedin.com/in/tanuj69/">LinkedIn</a>.-->
    </p>
      <nuxt-link to="/about/instantpost">Read more about my work with InstantPost →</nuxt-link>
    <p>
      In my spare time, I enjoy
      <a href="https://github.com/tanuj101" target="_blank"
        >dabbling with softwares</a
      >
      projects, exploring
      <a
        href="https://en.wikipedia.org/wiki/GNU/Linux_naming_controversy"
        target="_blank"
        >GNU/Linux</a
      >, building an application that no one will ever use haha! I also like ricing
      <!-- TODO: Add views on GNU/Linux vs only Linux  -->
      my GNU/Linux environment. Here are my
      <a target="_blank" href="https://github.com/Tanuj101/dotfiles"
        >dotfiles</a
      >
      or configs you may say just in case. I like minimalism on things around me
      so I keep my Desktop environment like this, below is a description
      about it.
    </p>
    <div class="flex-row">
      <img
        alt="Linux customization"
        height="140"
        src="../../assets/rice1.jpeg"
    />
      <img
        alt="Linux customization"
        height="140"
        width="190"
        src="../../assets/ipl.jpeg"
      />
      <a href="https://github.com/Tanuj101/dotfiles" target="_blank">
        <video
          height="140"
          width="190"
          src="../../assets/workspace.mp4"
          controls
          autoplay
          loop
        ></video>
      </a>
    </div>
    <p>
      Here is a glimpse of my workspace ;). I'm using i3wm as my window manager
      to keep everything organized at my desktop so that everything is within reach
      within a minimum keystrokes away,
      <a href="https://github.com/fish-shell/fish-shell" target="_blank"
        >fish</a
      >
      as a replacement to bash because it serves me well and my custom
      <a href="https://github.com/Tanuj101/st" target="_blank">st</a> build as a
      terminal emulator because of it's lightness and speed
    </p>
    <center></center>
    <p>
      I maintain this website as my blog where I can share my experience with
      anything that occurs to me whilst I keep moving forward in the world.
      This is also a side project which I started for fun with
      <a href="https://github.com/nuxt" target="_blank">nuxt.js</a> which is
      built on the top of Vue to get hands-on experience with how server-side
      pages web pages can be generated from a component-based web app with full
      SEO support and client-side routing on front end.
    </p>
    <p style="border-bottom:1px solid #eee;padding-bottom:40px">
      Gaming also used to be a big part of my life but has lately taken a back
      seat as a pastime hobby as I discovered more exciting things. I played
      FPS Games like Call of Duty(Most of the segments), TPP games like Tomb
      Raider, Mad Max, and a strategic game which by far I've played the most
      Clash of Clans.
    </p>
    <h2>etc</h2>
    <ul>
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/tanuj101/"
          >LinkedIn</a
        >
        — say hi
      </li>
      <li>
        <a target="_blank" href="https://github.com/tanuj101">Github</a> — code.
      </li>
    </ul>
  </div>
</template>

<script>
import FeedbackLink from "@@/components/FeedbackLink";
export default {
  components: {
    FeedbackLink,
  },
  name: "About",
  head: {
    title: "About — Tanuj Nagpal",
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
    ],
  },
};
</script>
<style scoped>
.dp {
  border-radius: 12px;
  padding: 10px;
}
ul {
  padding: 0;
}
ul > li {
  margin-left: 1.4em;
  margin-top: 0.5em;
}
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: auto;
}
.flex-row img,
.flex-row video {
  padding: 0px;
  margin: 0px;
  width: 200;
  height: 140;
}
video {
  width: 200;
}
p {
  font-size: 15px;
}
a {
  color: rgba(3, 102, 214, 1);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
