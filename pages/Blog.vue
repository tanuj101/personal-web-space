<template>
  <div>
    <div v-for="post in data" :key="post.id">
      <nuxt-link class="blog-link" :to="`/${year}/${post.id}`">
        <div class="blog-post">
          <h3 class>{{post.title}}</h3>
          <p>
            {{post.description}}
            <span datetime>{{post.date}}</span>
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Blog",
  props: ["data", "year"],
  methods: {
    view: function(post) {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  display: inline-block;
}
p {
  margin: 7px 0px;
}
h3:after {
  content: "";
  position: relative;
  left: 0;
  display: inline-block;
  width: 100%;
  border-bottom: 2px solid;
  margin-top: -10px;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
}
.blog-post:hover h3:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

span {
  color: rgb(221, 221, 221);
}
a {
  text-decoration: none;
  color: #010101;
}
h3 {
  font-size: 18px;
  margin: 0;
  letter-spacing: -0.0113;
  line-height: 0.45;
}
.blog-post {
  margin-bottom: 38px;
  cursor: pointer;
}
</style>
