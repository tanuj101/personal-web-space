<template>
  <div>
    <h1 class="blog-heading">Bash</h1>
    <p>
      Bash is a command language seen in many
      <a
        href="https://en.wikipedia.org/wiki/Unix-like"
        target="_blank"
        rel="noopener noreferrer"
      >unix-like</a> systems mostly used as a scripting utility for automation, using existing programs to perform tasks. It is this language's interpreter that runs when you type on your terminal emulator in most GNU/Linux systems some examples are touch, mkdir etc. So in simpler words this bash is used as a language which is designed to let you play with various command line programs to make them work together to do some even bigger task than these programs are originally designed for.
    </p>
    <p>We can do a lot with bash. In this instance of writing, an automation for downloading an online video stream is demonstrated.</p>
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
        style="margin:19px 0px;"
      >https://cdnvideos.geeksforgeeks.org/courses/c9640d9f44fec028c51edd88c2d7acf6gfg-L8-hlsx480p/00000/c9640d9f44fec028c51edd88c2d7acf6gfg-L8-hlsx480p-seg_00020.ts</div>
      <p>
        The key thing here is to look for pattern in urls of all the network request going out as the video proceeds. In this example the last part just before
        <a
          href="https://en.wikipedia.org/wiki/MPEG_transport_stream"
          target="_blank"
        >
          <code>.ts</code>
        </a> i.e 00020 and with seg it made sense for
        <b>segment 20</b> because that's how streaming happens, sending over the files broken down into segments AKA packets.
      </p>
      <p>Now what do you need to do inorder to this whole video?</p>
      
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