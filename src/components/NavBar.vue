<template>
  <div>
    <!-- <nav class="navbar navbar-expand-lg navbar-light py-3" id="mainNav">
      
      <div class="container px-4 px-lg-5">
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto my-2 my-lg-0">
            <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>

            <li class="nav-item">
              <a
                class="nav-link"
                href="https://docs.google.com/document/d/1SdAqbDNZB9bDLs_ev2EAJ06BXYyr-0qpHBcpI15izZw/edit?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->

    <b-nav tabs align="right" small>
      <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
      <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
      <b-nav-item
        href="https://docs.google.com/document/d/1SdAqbDNZB9bDLs_ev2EAJ06BXYyr-0qpHBcpI15izZw/edit?usp=sharing"
        target="_blank"
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
.nav-tabs {
  text-decoration: none;
  border-bottom: none !important;
}
/* .nav-tabs li:hover {
  opacity: 50%;
} */

/* a {
  color: green;
  background-color: transparent;
}
a:hover {
  color: purple;
  background-color: transparent;
} */
.form-inline li {
  padding: 5px;
}
/* #mainNav {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  transition: background-color 0.2s ease;
}
#mainNav .navbar-brand {
  font-family: "Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  color: #212529;
}
#mainNav .navbar-nav .nav-item .nav-link {
  color: #6c757d;
  font-family: "Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.75rem 0;
}
#mainNav .navbar-nav .nav-item .nav-link:hover,
#mainNav .navbar-nav .nav-item .nav-link:active {
  color: #f4623a;
}
#mainNav .navbar-nav .nav-item .nav-link.active {
  color: #f4623a !important;
}
@media (min-width: 992px) {
  #mainNav {
    box-shadow: none;
    background-color: transparent;
  }
  #mainNav .navbar-brand {
    color: rgba(255, 255, 255, 0.7);
  }
  #mainNav .navbar-brand:hover {
    color: #fff;
  }
  #mainNav .navbar-nav .nav-item .nav-link {
    color: rgba(255, 255, 255, 0.7);
    padding: 0 1rem;
  }
  #mainNav .navbar-nav .nav-item .nav-link:hover {
    color: #fff;
  }
  #mainNav .navbar-nav .nav-item:last-child .nav-link {
    padding-right: 0;
  }
  #mainNav.navbar-shrink {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    background-color: #fff;
  }
  #mainNav.navbar-shrink .navbar-brand {
    color: #212529;
  }
  #mainNav.navbar-shrink .navbar-brand:hover {
    color: #f4623a;
  }
  #mainNav.navbar-shrink .navbar-nav .nav-item .nav-link {
    color: #212529;
  }
  #mainNav.navbar-shrink .navbar-nav .nav-item .nav-link:hover {
    color: #f4623a;
  }
}
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #f4623a;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
.nav-link:hover,
.nav-link:focus {
  color: #c34e2e;
}
.nav-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}
.nav-tabs .nav-link {
  margin-bottom: -1px;
  background: none;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
  isolation: isolate;
}
.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;

  border-color: #dee2e6 #dee2e6 #fff;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  background: none;
  border: 0;
  border-radius: 0.25rem;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #f4623a;
}

.nav-fill > .nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified > .nav-link,
.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  width: 100%;
}

.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-sm,
.navbar > .container-md,
.navbar > .container-lg,
.navbar > .container-xl,
.navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
}
.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}
.navbar-nav .dropdown-menu {
  position: static;
}

.navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: box-shadow 0.15s ease-in-out;
} */
/* @media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
} */

@media (min-width: 375px) {
  .nav-tabs {
    text-decoration: none;
    border-bottom: none !important;
    display: flex;
    justify-content: center;
  }
}
@media (min-width: 768px) {
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
@media (min-width: 1400px) {
}
</style>
