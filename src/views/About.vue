<template>
  <div>
    <nav-bar></nav-bar>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "home",
  components: { "nav-bar": NavBar },
  data: function () {
    return {
      message: "",
    };
  },
  created: function () {},
  methods: {},
};
</script>
