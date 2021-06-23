<template>
  <div>
    <b-img class="nameLogoBlack" left src="images/Randy(Black).png" alt="" width="80" height="70" />
    <b-img class="nameLogoWhite" left src="images/Randy(White).png" alt="" width="80" height="70" />

    <b-navbar toggleable="lg" class="navbar-horizontal">
      <b-navbar-brand></b-navbar-brand>

      <b-navbar-toggle class="<b-icon-border-width>" target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form class="d-flex justify-content-end mb-3">
            <li class="nav-item">
              <a class="nav-link nav-link-icon">
                <b-nav-item class="nav-link nav-link-inner--text" to="/" active>Home</b-nav-item>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon">
                <b-nav-item class="nav-link nav-link-inner--text">Portfolio</b-nav-item>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon">
                <b-nav-item class="nav-link nav-link-inner--text">About</b-nav-item>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon">
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
<style>
.form-inline li {
  padding: 5px;
}
</style>
