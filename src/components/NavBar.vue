<template>
  <div>
    <b-img class="nameLogoBlack" left src="images/Randy(Black).png" alt="" width="80" height="70" />
    <b-img class="nameLogoWhite" left src="images/Randy(White).png" alt="" width="80" height="70" />
    <!-- <b-row>
      <b-nav toggleable="lg" type="light" variant="light" class="navbar navbar-expand-sm">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-nav-item to="/" active>Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item>Portfolio</b-nav-item>
          <b-nav-item>Resume</b-nav-item>
        </b-collapse>
      </b-nav>
    </b-row> -->
    <b-navbar toggleable="lg" class="navbar-horizontal">
      <b-navbar-brand></b-navbar-brand>

      <b-navbar-toggle class="<b-icon-border-width>" target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <li class="nav-item">
              <a class="nav-link nav-link-icon">
                <!-- <span class="nav-link nav-link-inner--text" to="/">Home</span> -->
                <b-nav-item class="nav-link nav-link-inner--text" to="/" active>Home</b-nav-item>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon">
                <!-- <span class="nav-link nav-link-inner--text">Portfolio</span> -->
                <b-nav-item class="nav-link nav-link-inner--text" to="/about">About</b-nav-item>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon">
                <!-- <span class="nav-link nav-link-inner--text">Resume</span> -->
                <b-nav-item class="nav-link nav-link-inner--text">Portfolio</b-nav-item>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon">
                <!-- <span class="nav-link nav-link-inner--text" to="/about">About</span> -->
                <b-nav-item class="nav-link nav-link-inner--text">Resume</b-nav-item>
              </a>
            </li>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
