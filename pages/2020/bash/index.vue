<template>
  <div>
    <h1 class="blog-heading">Bash</h1>
    <p>
      Bash is a command language seen in many
      <a
        href="https://en.wikipedia.org/wiki/Unix-like"
        target="_blank"
        rel="noopener noreferrer"
      >unix-like</a>
      systems mostly used as a scripting utility for automation, using existing
      programs to perform tasks. It is this language's interpreter that runs
      when you type on your terminal emulator in most GNU/Linux systems some
      examples are touch, mkdir etc. So in simpler words this bash is used as a
      language which is designed to let you play with various command line
      programs to make them work together to do some even bigger task than these
      programs are originally designed for.
    </p>
    <p>
      We can do a lot with bash. In this instance of writing, an automation for
      downloading an online video stream is demonstrated.
    </p>
    <h3>Finding the resource(video stream) uri</h3>
    <ul>
      <li>Open dev tools in your browser</li>
      <li>Go to the Network tab</li>
      <li>First clear the existing request</li>
      <li>
        Play the video, as you play some network request may appear on the
        screen.
      </li>
      <li>Analyze the URL</li>
      <br />
    </ul>
    <a
      href="https://developers.google.com/web/tools/chrome-devtools/network/reference"
      target="_blank"
      rel="noopener noreferrer"
    >Reference</a>
    for the network tab
    <div style="margin-top:10px">
      Example of a stream url:-
      <div
        class="question"
        style="margin:19px 0px;"
      >https://cdnvideos.geeksforgeeks.org/courses/c9640d9f44fec028c51edd88c2d7acf6gfg-L8-hlsx480p/00000/c9640d9f44fec028c51edd88c2d7acf6gfg-L8-hlsx480p-seg_00020.ts</div>
      <p>
        The key thing here is to look for pattern in urls of all the network
        request going out as the video proceeds. In this example the last part
        just before
        <a
          href="https://en.wikipedia.org/wiki/MPEG_transport_stream"
          target="_blank"
        >
          <code>.ts</code>
        </a>
        i.e 00020 and with seg it made sense for
        <b>segment 20</b> because
        that's how streaming happens, sending over the files broken down into
        segments AKA packets.
      </p>
      <p>
        It is simple enough to see the pattern now that we know the url, the
        next step is to get this request equivalent in
        <a
          href="https://en.wikipedia.org/wiki/CURL"
          target="_blank"
          rel="noopener noreferrer"
        >cURL</a>
        which will be used in the script by right clicking on one of the
        request.
      </p>
      <div style="display:flex;justify-content:center;">
        <img-viewer src="/bash_copy_as_curl.png"></img-viewer>
      </div>
      <div>
        First we need to download all the segments for that we can incorporate a
        simple for loop which will keep on increasing the segment number, this will download only the first 5 segments
        <img-viewer src="/bash_gfg.jpg"></img-viewer>
        <div>
          The
          <code>%04d</code> just adds padding to the segment number because of the url pattern. These are only the segments of that original video, but we need the video in one single piece.
        </div>
        <img-viewer src="/curl_stream_op.jpg"></img-viewer>
        <div>
          To recreate this video in one single piece we will use two of the most commonly used programs found in unix and unix-like systems
          <a
            href="https://en.wikipedia.org/wiki/Xargs"
            target="_blank"
            rel="noopener noreferrer"
          >xargs</a> which is used to literally build commands and
          <a
            href="https://en.wikipedia.org/wiki/Cat_(Unix)"
            target="_blank"
            rel="noopener noreferrer"
          >cat</a> which stands for concatenate meaning to link together.
          <p>
            We can use as simple as
            <br />
            <br />
            <code>cat /tmp/gfg/* > video.mp4</code>
            <br />
            <br />The
            <code>cat</code> just combines the content of files together for eg. if we do
            <code>cat 1.txt 2.txt</code> on a term it will just display the concatenated output with content of both the text files. In the same way we are using
            <code>cat</code> in this case to combine the video streams but the difference is it will not display the content on the terminal but redirect the output to create a new file named video.mp4 which will be the final video.
            Read more about
            <a
              href="https://www.gnu.org/software/bash/manual/html_node/Redirections.html"
              target="_blank"
            >output redirections</a>
          </p>
        </div>
        <p>
          The full script is available
          <a
            href="https://gist.github.com/tanuj101/e4411d718cd1b9e2df34ddf90f3e0a72"
            target="_blank"
            rel="noopener noreferrer"
          >here</a>. You can modify this script to take in argument of the url directly, change the segment number to download all the segments, handle errors to stop running curl when 404s status code arrives. I'll leave all this to you.
        </p>
        <p>
          At last thank you for reading this, feel free to give your feedbacks on the
          <a
            href="https://gist.github.com/tanuj101/e4411d718cd1b9e2df34ddf90f3e0a72"
            target="_blank"
            rel="noopener noreferrer"
          >gist</a> itself.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Prism from "vue-prismjs";
import "prismjs/themes/prism.css";
import FeedbackLink from "@@/components/FeedbackLink.vue";
import ImgViewer from "@@/components/ImageViewer.vue";
export default {
  components: {
    FeedbackLink,
    Prism,
    ImgViewer
  },
  name: "",
  head: {
    title: "Bash your way through"
  }
};
</script>
<style scoped></style>
