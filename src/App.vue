<template>
  <div>
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>

<style>
body {
  min-height: 100vh;
}
@media (prefers-color-scheme: dark) {
  html,
  template,
  body#color-scheme {
    color: #eee;
    background: #121212;
  }
  a {
    color: #ffffff;
  }
  .nameLogoBlack {
    display: none;
  }
}
@media (prefers-color-scheme: light) {
  html,
  template,
  body#color-scheme {
    color: #121212;
    background: #eee;
  }
  a {
    color: #121212;
  }
  .nameLogoWhite {
    display: none;
  }
}
</style>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "home",
  components: { "nav-bar": NavBar },
};
</script>
