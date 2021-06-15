<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
<style>
/* Set the color scheme of the page according to the users OS settings */
@media (prefers-color-scheme: dark) {
  body {
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
</style>
<script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {},
  methods: {},
};
</script>
