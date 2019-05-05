<template>
  <div v-html="blog"></div>
</template>
<script>
import blog from "./intro-to-chmod.md";
export default {
  name: "intro-to-chmod",
  head:{
    title:"Introduction to chmod",
    meta:[
      {
        hid:"description",name: "description",content:"A Unix/Linux command to change the access permissions of Files and Directories through command line, How can you use it and where will you use it. I never really tried...."
      },
      {
        hid:"og:description",name:"og:description",content:"A Unix/Linux command to change the access permissions of Files and Directories through command line, How can you use it and where will you use it. I never really tried...."
      },{
        hid:"og:url",property:"og:url",content:"www.tanujnagpal.me/2019/intro-to-chmod"
      },{
        hid:"og:type",property:"og:type",content:"article"
      },{
        hid:"og:site_name",property:"og:site_name",content:"tanujnagpal.me"
      },{
        hid:"og:title",property:"og:title",content:"Introduction to chmod for beginners"
      },{
        hid:"Keywords",content:"chmod,unix,shell,linux,shell scripts"
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
