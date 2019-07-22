<template>
  <div>
    <p>Hello. My name is Tanuj Nagpal.</p>
    <p>I'm an Indian developer with a passion for technology.</p>
    <p>
      During the past 1 year I've worked with
      <a
        target="_blank"
        href="https://instantpost.in"
      >InstantPost</a> as an Intern writing an
      <a
        target="_blank"
        href="https://youtu.be/hxY01RQR69w?t=853"
      >automation software</a>.
      <!-- Find out more on
      <a href="https://www.linkedin.com/in/tanuj69/">LinkedIn</a>.-->
    </p>
    <p>
      <nuxt-link to="/about/instantpost">Read more about my work with InstantPost →</nuxt-link>
    </p>
    <p>
      In my spare time I enjoy
      <a
        href="https://github.com/tanuj69"
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
        href="https://github.com/Tanuj69/dotfiles"
      >dotfiles</a> just in case.
    </p>
    <div class="flex-row">
      <a title="Old Rice" target="_blank" href="https://github.com/Tanuj69/dotfiles">
        <img src="../../assets/rice1.jpeg" alt>
      </a>
      <a title="Cricket update notifier" target="_blank" href="https://github.com/Tanuj69/IPL-Live-updates">
        <img src="../../assets/ipl.jpeg" alt>
      </a>
    </div>
    <p
      style="border-bottom:1px solid #eee;padding-bottom:40px"
    >Gaming used to be a big part of my life, but has lately taken a back seat as a past time hobby. I played FPS Games like Call of Duty(Most of the segments), TPP games like Tomb Raider, Mad Max and some strategic games like Clash of Clans.</p>
    <h2>etc</h2>
    <ul>
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/tanuj69/">LinkedIn</a> — say hi
      </li>
      <li>
        <a target="_blank" href="https://github.com/tanuj69">Github</a> — code.
      </li>
      <li>
        <a href="https://novoresume.com/a/tanujnagpal999.1" target="_blank">CV</a> — know more
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Abou",
  head:{
    title:"About — Tanuj Nagpal",
    meta:[
      {
        hid:"description",name: "description",content:"Hello. My name is Tanuj Nagpal. I'm an Indian maker-of-software with a passion for technology. During the past 1 year I've worked with...."
      },
      {
        hid:"og:description",name:"og:description",content:"Hello. My name is Tanuj Nagpal. I'm an Indian maker-of-software with a passion for technology. During the past 1 year I've worked with...."
      },{
        hid:"og:url",property:"og:url",content:"www.tanujnagpal.me/about"
      },{
        hid:"og:type",property:"og:type",content:"article"
      },{
        hid:"og:site_name",property:"og:site_name",content:"tanujnagpal.me"
      }
    ]
  }
};
</script>
<style scoped>
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
}
.flex-row img {
  padding: 0px;
  margin: 0px;
  width: 95%;
  height: auto;
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
