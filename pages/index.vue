<template>
  <div id="blog-container">
    <div v-for="(post,index) in posts" :key="`post-${index}`">
      <Blog :data="post"></Blog>
    </div>
  </div>
</template>

<script>
import blogEntries from "../static/data/blogs.json";
import Blog from "@@/components/Blog";
export default {
  components: {
    Blog
  },
  data: function() {
    return { posts: blogEntries };
  },
  head: {
    title: "Tanuj Nagpal",
    meta: [
      {
        hid: "og:url",
        property: "og:url",
        content: "www.tanujnagpal.tech"
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
        content: "www.tanujnagpal.tech/"
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
        content: "About — Tanuj Nagpal"
      },
      {
        hid: "Keywords",
        content:
          "Tanuj Nagpal,TanujNagpal,Tanuj nagpal instantpost,intern,instantpost,tanuj,tanuj github,tanuj69,tanuj web instantpost"
      }
    ]
  }
};
</script>

<style>
.blog-link {
  color: #333 !important;
  text-decoration: none !important;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

