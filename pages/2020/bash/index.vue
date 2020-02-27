<template>
  <div>
    <h1 class="blog-heading">Bash</h1>
    <p>
      Bash is a command language seen in many
      <a
        href="https://en.wikipedia.org/wiki/Unix-like"
        target="_blank"
        rel="noopener noreferrer"
      >unix-like</a> systems mostly used as a scripting utility for automation viz using existing programs to perform tasks.
    </p>
    <p>We can do a lot with bash, in this instance of writing, an automation for downloading an online video stream is demonstrated. This is just for education purposes only.</p>
    <h3>Finding the resource(video stream) uri</h3>
    <ul>
      <li>Open dev tools in your browser</li>
      <li>Go to the Network tab</li>
      <li>First clear the existing request</li>
      <li>Play the video, as you play some network request may appear on the screen.</li>
      <li>Analyze the URL</li>
      <br />
    </ul>
    <a
      href="https://developers.google.com/web/tools/chrome-devtools/network/reference"
      target="_blank"
      rel="noopener noreferrer"
    >Reference</a> for the network tab
    <div style="margin-top:10px">
      Example of a stream url:-
      <div
        class="question"
        style="margin-top:3px;margin-bottom:5px"
      >https://cdnvideos.geeksforgeeks.org/courses/c9640d9f44fec028c51edd88c2d7acf6gfg-L8-hlsx480p/00000/c9640d9f44fec028c51edd88c2d7acf6gfg-L8-hlsx480p-seg_00020.ts</div>
      <p>
        The key thing here is to look for pattern in urls of all the network request going out as the video proceeds. In this example I notices the last part just before
        <code>.ts</code> i.e 00020 and with seg it made sense for
        <b>segment 20</b> because that's how streaming happens! sending over the files in segments or packets.
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
  head: {}
};
</script>