<template>
  <div>
    <b-nav tabs>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
      <b-nav-item
        href="https://docs.google.com/document/d/1DNbo8vkPXNfWDvhhjZxe1DMqNCM0DrV0/edit?usp=sharing&ouid=117550818261684372414&rtpof=true&sd=true"
        target="_blank"
        v-b-popover.hover.bottomleft="{
          variant: 'info',
          content: 'This opens a new tab to Google Docs',
        }"
      >
        Resume
      </b-nav-item>
    </b-nav>
  </div>
</template>
<script>
export default {};
</script>
<style>
@import url("https://fonts.google.com/specimen/Roboto+Slab");

.nav-tabs {
  display: flex;
  justify-content: right;
  text-decoration: none;
  border-bottom: none !important;
  font-family: "Roboto";
}

.form-inline li {
  padding: 5px;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .nav-tabs {
    display: flex !important;
    justify-content: space-between !important;
    font-size: 2rem;
    text-decoration: none;
    border-bottom: none !important;
    font-family: "Roboto";
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .nav-tabs {
    display: flex;
    justify-content: right;
    text-decoration: none;
    border-bottom: none !important;
    font-family: "Roboto";
    font-size: 1.5rem;
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .nav-tabs {
    display: flex;
    justify-content: right;
    text-decoration: none;
    border-bottom: none !important;
    font-family: "Roboto";
    font-size: 1.5rem;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .nav-tabs {
    display: flex;
    justify-content: right;
    text-decoration: none;
    border-bottom: none !important;
    font-family: "Roboto";
    font-size: 1.5rem;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .nav-tabs {
    display: flex;
    justify-content: right;
    text-decoration: none;
    border-bottom: none !important;
    font-family: "Roboto";
    font-size: 1.5rem;
  }
}
</style>
