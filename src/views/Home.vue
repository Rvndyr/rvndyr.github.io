<template>
  <div>
    <b-container fluid>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="8 mt-2">
          <b-img class="profilepic" src="images/avatar.jpeg" alt="profilepic" />
          <b-container>
            <div>
              <a href="https://github.com/Rvndyr/" target="_blank">
                <img class="socials" src="https://img.icons8.com/nolan/48/github.png" />
              </a>
              <a href="https://www.linkedin.com/in/randyrod/" target="_blank">
                <img class="socials" src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" />
              </a>
            </div>
          </b-container>
          <div class="portText3">
            <span class="descText" id="header">Welcome!</span>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
      <div></div>
    </b-container>

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
                Twitch Multi-Mon - A utility used to watch multiple streamers utilizing the Twitch API
              </b-card-text>
              <b-row class="py-4 text-center m-3">
                <ul class="icon-set">
                  <li>
                    <a href="https://github.com/Rvndyr/MultiMon-frontend" target="_blank">
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
                A simple table that allows you to see how frequent some Javascript frameworks are used.
              </b-card-text>
              <b-row class="py-4 text-center m-3">
                <ul class="icon-set">
                  <li>
                    <a href="https://github.com/Rvndyr/framework-watcher" target="_blank">
                      <b-icon icon="github" scale="2" variant="light"></b-icon>
                    </a>
                  </li>
                  <a href="https://amazing-galileo-550ce6.netlify.app/" target="_blank">
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
.socials {
  margin-top: 30px;
  margin-right: 50px;
}
.text-bold {
  font-weight: 600 !important;
}
a {
  color: #fff !important;
  background-color: transparent;
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
.icon {
  height: 50px;
  width: 50px;
}
.portText1 {
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
  opacity: 1;
  padding: 10px;
}
.portText2 {
  animation: fadeIn 4s;
  -webkit-animation: fadeIn 4s;
  -moz-animation: fadeIn 4s;
  -o-animation: fadeIn 4s;
  -ms-animation: fadeIn 4s;
  opacity: 1;
  padding: 10px;
}
.portText3 {
  animation: fadeIn 6s;
  -webkit-animation: fadeIn 6s;
  -moz-animation: fadeIn 6s;
  -o-animation: fadeIn 6s;
  -ms-animation: fadeIn 6s;
  opacity: 1;
  padding: 10px;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
</style>
<script>
export default {
  data: function () {
    return {};
  },
  created: function () {
    const nameSwitch = () => {
      const header = document.querySelector("#header");
      const engineer = "{Software Engineer}";
      const techLover = "{Tech Lover}";
      if (header.textContent === engineer) {
        header.textContent = techLover;
      } else {
        header.textContent = engineer;
      }
    };

    setInterval(nameSwitch, 8000);
  },
  methods: {},
};
</script>
