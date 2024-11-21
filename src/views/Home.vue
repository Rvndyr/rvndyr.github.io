<template>
  <div>
    <b-container fluid>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="8 mt-2">
          <b-img class="profilepic" src="images/avatar.jpeg" alt="profilepic" />
          <b-container>
            <div class="socialIcons">
              <a href="https://github.com/Rvndyr/" target="_blank">
                <img
                  class="socials"
                  src="https://img.icons8.com/nolan/48/github.png"
                />
              </a>
              <a href="https://www.linkedin.com/in/randyrod/" target="_blank">
                <img
                  class="socials"
                  src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png"
                />
              </a>
            </div>
          </b-container>
          <div class="descTextBoarder container px-4 px-lg-5">
            <span class="descText" id="header"
              >Welcome! My name is Randy. I'm a Systems Development Engineer at <a href="https://www.jamf.com/" target="_blank"><span style="color:#4F1287">Jamf</span></a>.</span
            >
          </div>

          <!-- <div class="portText3">
            <span class="descText" id="header">Welcome!</span>
          </div> -->
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>

    <div class="container px-4 px-lg-5">
      <h1 class="text-center mt-0">Tech Stack</h1>
      <hr class="divider" />
      <b-container class="skillsIcon">
        <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />

        <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" />

        <img
          src="https://img.icons8.com/color/48/000000/ruby-programming-language.png"
        />

        <img src="https://img.icons8.com/color/48/000000/python--v1.png" />

        <img src="https://img.icons8.com/color/48/000000/vue-js.png" />

        <img src="https://img.icons8.com/color/48/000000/nodejs.png" />

        <img src="https://img.icons8.com/color/48/000000/postgreesql.png" />

        <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />

        <img src="https://img.icons8.com/color/48/000000/git.png" />

        <img
          src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
        />
        <img src="https://img.icons8.com/color/48/000000/jenkins.png" />
        <img src="https://img.icons8.com/color/48/000000/bitbucket.png" />
      </b-container>
    </div>

    <section class="page-section" href="#Projects">
      <div class="container px-4 px-lg-5">
        <h1 class="text-center mt-0">Projects</h1>
        <hr class="divider" />

        <div>
          <b-card-group columns>
            <b-card
              title="Multi-Mon.tv"
              class="bg-transparent text-center"
              img-src="https://media.giphy.com/media/jYNFdVGdIBwRk1p74T/giphy.gif"
              img-alt="Multi-Mon Gif"
              border-variant="secondary"
              img-top
            >
              <b-card-text>
                Twitch Multi-Mon - A utility used to watch multiple streamers
                using the Twitch API
              </b-card-text>
              <b-row class="py-4 text-center m-3">
                <ul class="icon-set">
                  <li>
                    <a
                      href="https://github.com/Rvndyr/MultiMon-frontend"
                      target="_blank"
                    >
                      <b-icon icon="github" scale="2" variant="light"></b-icon>
                    </a>
                  </li>
                  <a href="https://multi-mon.netlify.app/" target="_blank">
                    <li class="text-bold">LIVE</li>
                  </a>
                </ul>
              </b-row>
            </b-card>

            <b-card
              title="JS Framework Watcher"
              class="bg-transparent text-center"
              img-src="https://media.giphy.com/media/YRkHWhZu8OKhibYuJt/giphy.gif"
              img-alt="Framework Table"
              border-variant="secondary"
              img-top
            >
              <b-card-text>
                A simple table that allows you to see how frequent some
                Javascript frameworks are used.
              </b-card-text>
              <b-row class="py-4 text-center m-3">
                <ul class="icon-set">
                  <li>
                    <a
                      href="https://github.com/Rvndyr/framework-watcher"
                      target="_blank"
                    >
                      <b-icon icon="github" scale="2" variant="light"></b-icon>
                    </a>
                  </li>
                  <a
                    href="https://amazing-galileo-550ce6.netlify.app/"
                    target="_blank"
                  >
                    <li class="text-bold">LIVE</li>
                  </a>
                </ul>
             </b-row>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </section>
    <section class="page-section">
      <b-container></b-container>
    </section>
  </div>
</template>
<style>
@import url("https://fonts.google.com/specimen/Roboto+Slab");

.skillsIcon {
  display: flex;
  justify-content: center;
}
.socials {
  margin-top: 30px;
  margin-right: 50px;
  background: transparent;
  border-radius: 50%;

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(209, 208, 209, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
.text-bold {
  font-weight: 600 !important;
}
a {
  color: #fff !important;
  background-color: transparent;
  font-family: "Roboto";
}
a:hover {
  text-decoration: none;
}
.icon-set li {
  display: inline;
  padding-right: 1rem;
  padding-left: 1rem;
}
.border-none {
  border-style: none;
}
.profilepic {
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  margin-top: 30px;
  margin-right: 50px;
}
.descText {
  font-size: 4rem;
}
.descTextBoarder{
  padding-top: 3rem;
  padding-right: 0px;
  padding-bottom: 9rem;
  padding-left: 0px;
}
.icon {
  height: 50px;
  width: 50px;
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media only screen and (max-width: 600px) {
  .skillsIcon {
  flex-wrap: wrap;
  justify-content: center;
}
  .socials {
    margin-top: 30px;
    margin-right: 0px;
    background: transparent;
    border-radius: 50%;

    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: scale(1);
    animation: pulse 2s infinite;
  }
  .descText {
    font-size: 1.5rem;
  }
  .descTextBoarder {

  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .skillsIcon {
    height: 4rem;
    justify-content: space-between;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>
<script>
export default {
  data: function () {
    return {};
  },
  created: function () {
  },
  methods: {},
};
</script>
