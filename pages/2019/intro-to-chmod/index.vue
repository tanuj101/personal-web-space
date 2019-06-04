<template>
<div>
   <div v-html="blog">
  </div>
  Now Let's now make our own shell script and see chmod in action.
  Create a file named test.sh. Fill in its content with 
  <br><br>
  <code>echo "First shell script"</code><br><br>
  then just give the executable permission to our script<br><br>
  <code>chmod +x test.sh</code><br><br>


</div>
 
</template>
<script>
import blog from "./intro-to-chmod.md";
export default {
  name: "intro-to-chmod",
  components:{
  },
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
