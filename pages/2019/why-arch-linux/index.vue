<template>
  <div>
    <h1 class="blog-heading">Why Arch Linux?</h1>
    <p>
      In general Distros
      <strong>do not</strong> matter when you usually talk about GNU/Linux but all things considered I think there is one distribution that I think is a little special and that is
      <a
        target="_blank"
        href="https://www.archlinux.org/"
      >Arch Linux</a>.
    </p>

    <p>Despite the fact the initial hurdles in the manual installation process which actually does a good favour(Which is discussed later) to you, Arch Linux does better than any linux Distributions avoiding the pain that you might have to put in managing any kind of system be it Windows or any other Distribution</p>
    <br />
    <img src="../../../assets/arch_meme.jpg" width="100%" alt="Arch meme" title="Arch Linux meme" />
    <br />
    <p>
      Another thing that makes Arch extremely an exceptionally great distro something that is in the heart of those who use it(I might be exaggerating but its true more or less) i.e. it has the potential to change the way how you think about Linux Distros
      <br />Partially because it is one of those distros that you install manually and you go through the process compared with other distros like for example
      <a
        target="_blank"
        href="https://www.gentoo.org/"
      >Gentoo</a> when you are making your own
      <a
        target="_blank"
        href="https://wiki.gentoo.org/wiki/Handbook:X86/Installation/Kernel"
      >kernel and compiling it</a>. Arch is easier comparetively but it also gives you exactly what you need to really understand how your system works
    </p>
    <p>
      For Instance lets ignore the installing process. Let's talk about managing a system, Every program in the world is basically available to you I know this would sound unimportant, so what's my point? Think about this way. I take this forgranted as an Arch user. but when someone comes to me with a problem it often is in format of
      <br />
    </p>
    <div
      class="question"
    >Why there are so many different ways of installing softwares to your Linux system?</div>or I can't install this xyz program. They themselves have to figure out how to get it off GIT a or whatever and compile it themselves.
    <p>
      Thing about Arch is way different because it has its own repositories and the
      <a
        target="_blank"
        href="https://aur.archlinux.org"
      >AUR</a>. It is very easy for even an introductory user, its not in the case of other distros for example in Ubuntu if you want to install any fancy software. There is no universal method to install softwares in Linux sometimes you'd have to download the Debian package(that .deb file) and install it with
      <a
        target="_blank"
        href="https://unix.stackexchange.com/questions/159094/how-to-install-a-deb-file-by-dpkg-i-or-by-apt"
      >DPKG</a> , sometimes you'd have to get the source code from Github or something and build it yourself. Now with Arch with package managers like
      <a
        target="_blank"
        href="https://github.com/Jguer/yay"
      >yay</a> it's super easy just type
      <br />
      <span class="code">
        yay
        <i>name of software</i>
      </span> and you'd know what to do next. That is the universal way to install softwares for me atleast.
    </p>

    <h2>Installation?</h2>
    <p id="benifit">
      Now coming back to the installation process which can be
      <b>benificial</b>, which might strike you when you are thinking about using Arch Linux is that "Installing it manually is
      <b>JUST STUPID</b>" or "WHY CAN'T YOU HAVE AN AUTOMATIC INSTALLER". Why not just use
      <b>Ubuntu</b> or anything like that. which is fine. If you wanna do that but there's a big difference that makes you think about system.
    </p>
    <p>If you install everything from the desktop manager or a window manager or what display manager to install or the boot loader. You'd read up on it in the process of installing it then you know whats on your system, you know where the pieces are going together so what happens is hypothatically if something breaks on your system (which frankly on Arch, things don't spontanously break) if you have gone through that minimal install process you know whats going on you dont have to look it up on stackoverflow or something and it's not a big problem if something happens in a way you don't expect.</p>
    <p>
      Another great thing about Arch is the
      <a
        target="blank"
        href="https://wiki.archlinux.org/"
      >Arch Wiki</a> where you can find solution to literally every problem. Also maintained by Arch users they are just like greatest in the universe you can be just like that ;D. It's just that all of them have gone through that process.
    </p>
    <p>I know all the Linux Distros are the same I hold by that, I am not telling anyone to switch to Arch Linux. Doesn't matter what you use Doesn't mean it makes a difference. If you're used to using whatever system you use, that's fantastic. Just dont't fall for the meme it is not a difficult to use distro. Arch is literally where I stopped distro hopping which I used to to because I found a distro where I didn't have to think about what I'm running I just think about what i've installed on my computer and how easily I can change.</p>
    <p></p>
    <p>
      At last thank you for reading this and if you have any kind of feedback feel free to hit on this
      <i>anonymous</i>
      <FeedbackLink />link.
    </p>
    <b>TL;DR</b>
    <ul class="blog-list">
      <li>
        Arch is probably the best and easiest to use distro if you try to install from the official
        <a
          target="_blank"
          href="https://wiki.archlinux.org/index.php/Installation_guide"
        >Arch Wiki Installation Guide</a>. if you have hardness for more than 9 hours while installing consult your Doctor, consult the Arch wiki
      </li>
      <li>Ignoring the distro structure, the process of installing a system from bottom-up is a very educational experience</li>
    </ul>
  </div>
</template>
<script>
import FeedbackLink from "@@/components/FeedbackLink";
export default {
  components: {
    FeedbackLink
  },
  name: "",
  head: {
    title: "Why Arch Linux?",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "In general Distros matter when you usually talk about GNU/Linux but all things considered I think there is one distribution that I think is a little special and that is Arch Linux, Despite the fact the initial hurdles in the manual installation process which actually does a good favour(Which is discussed later) to you"
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "In general Distros do not matter when you usually talk about Linux but all things considered I think there might be one particular distro that I think is a litle special and that is Arch Linux, Despite the fact the initial hurdles in the manual installation process which actually does a good favour(Which is discussed later) to you"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "www.tanujnagpal.tech/2019/why-arch-linux"
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
        content: "why arch linux"
      },
      {
        hid: "Keywords",
        name: "keywords",
        content:
          "Linux,Arch Linux,how to install Arch,Unix,GNU/Linux,why install arch?,should I install arch?"
      }
    ]
  }
};
</script>