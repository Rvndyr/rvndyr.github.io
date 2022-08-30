<template>
  <div>
    <b-nav tabs>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
      <b-nav-item
        href="https://docs.google.com/document/d/1SdAqbDNZB9bDLs_ev2EAJ06BXYyr-0qpHBcpI15izZw/edit?usp=sharing"
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
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

.nav-tabs {
  display: flex;
  justify-content: right;
  text-decoration: none;
  border-bottom: none !important;
  font-family: "Lobster", cursive;
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
    font-family: "Lobster", cursive;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .nav-tabs {
    display: flex;
    justify-content: right;
    text-decoration: none;
    border-bottom: none !important;
    font-family: "Lobster", cursive;
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .nav-tabs {
    display: flex;
    justify-content: right;
    text-decoration: none;
    border-bottom: none !important;
    font-family: "Lobster", cursive;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .nav-tabs {
    display: flex;
    justify-content: right;
    text-decoration: none;
    border-bottom: none !important;
    font-family: "Lobster", cursive;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .nav-tabs {
    display: flex;
    justify-content: right;
    text-decoration: none;
    border-bottom: none !important;
    font-family: "Lobster", cursive;
  }
}
</style>
