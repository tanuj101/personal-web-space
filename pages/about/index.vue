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
      I'm working with
      <a target="_blank" href="https://instantpost.in">InstantPost</a> as an Intern where my major work have been on an automation software so far.
      <br />
      <b>[UPDATES]</b> - I'd expectantly be joining fulltime by end of my graduation
      <!-- Find out more on
      <a href="https://www.linkedin.com/in/tanuj69/">LinkedIn</a>.-->
    </p>
    <!-- <p>
      <nuxt-link to="/about/instantpost">Read more about my work with InstantPost →</nuxt-link>
    </p>-->
    <p>
      In my spare time I enjoy
      <a
        href="https://github.com/tanuj101"
        target="_blank"
      >dabbling with softwares</a> projects, exploring about
      <a
        href="https://en.wikipedia.org/wiki/GNU/Linux_naming_controversy"
        target="_blank"
      >GNU/Linux</a> , building application that no one will ever use haha! I also like
      ricing
      <!-- TODO: Add views on GNU/Linux vs only Linux  -->
      my GNU/Linux environment. Here are my
      <a
        target="_blank"
        href="https://github.com/Tanuj101/dotfiles"
      >dotfiles</a> or configs you may say just in case. My laptop is not top notch or high config and also I like minimalism to things around me so I keep my Desktop environment like this, below is some description about it.
    </p>
    <div class="flex-row">
      <a title="Old Rice" target="_blank" href="https://github.com/Tanuj101/dotfiles">
        <img alt="Linux customization" height="140" src="../../assets/rice1.jpeg" />
      </a>
      <a
        title="Cricket update notifier"
        target="_blank"
        href="https://github.com/Tanuj101/IPL-Live-updates"
      >
        <img alt="Linux customization" height="140" width="190" src="../../assets/ipl.jpeg" />
      </a>
      <a href="https://github.com/Tanuj101/dotfiles" target="_blank">
        <video height="140" width="190" src="../../assets/workspace.mp4" controls autoplay loop></video>
      </a>
    </div>
    <p>
      Here is a glimpse of my workspace ;). I'm using i3wm as my window manager to keep everything organized at my dekstop so that everything is in reach within a minimum key strokes away,
      <a
        href="https://github.com/fish-shell/fish-shell"
        target="_blank"
      >fish</a> as a replacement to bash because it serves me well and my custom
      <a
        href="https://github.com/Tanuj101/st"
        target="_blank"
      >st</a> build as a terminal because of it's lightness and speed
    </p>
    <center></center>
    <p>
      I maintain this website as my blog where I can share my experience with anything that occurs to me whilst I keep moving forward in the world . This is also a side project which I started for fun with
      <a
        href="https://github.com/nuxt"
        target="_blank"
      >nuxt.js</a> which is built on the top of Vue to get hands on experience with how server side pages web pages can be generated from a component-based web app with full SEO support and client side routing on front-end only as it is hosted on github pages. Anyway if you have any kind of feedback feel free to click on this
      <i>anonymous</i>
      <FeedbackLink />link.
    </p>
    <p
      style="border-bottom:1px solid #eee;padding-bottom:40px"
    >Gaming also used to be a big part of my life, but has lately taken a back seat as a past time hobby as I discovered more exciting things. I played FPS Games like Call of Duty(Most of the segments), TPP games like Tomb Raider, Mad Max and a strategic game which by far I've played the most Clash of Clans.</p>
    <h2>etc</h2>
    <ul>
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/tanuj101/">LinkedIn</a> — say hi
      </li>
      <li>
        <a target="_blank" href="https://github.com/tanuj101">Github</a> — code.
      </li>
      <li>
        <a href="https://drive.google.com/file/d/1urdPtCT0KUFpC5yaJM28ZS-N3Y0kp9gZ/view?usp=sharing" target="_blank">Resume</a> — know more
      </li>
    </ul>
  </div>
</template>

<script>
import FeedbackLink from "@@/components/FeedbackLink";
export default {
  components: {
    FeedbackLink
  },
  name: "About",
  head: {
    title: "About — Tanuj Nagpal",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Hello. My name is Tanuj Nagpal. I'm an Indian maker-of-software with a passion for technology. During the past 1 year I've worked with...."
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Hello. My name is Tanuj Nagpal. I'm an Indian maker-of-software with a passion for technology. During the past 1 year I've worked with...."
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "www.tanujnagpal.tech/about"
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
      }
    ]
  }
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
