<template>
  <div>
    <section class="page-section" href="#Home">
      <b-container>
        <div>
          <b-img class="profilepic" src="images/avatar.jpeg" alt="profilepic" />
        </div>
      </b-container>
      <b-container>
        <div class="portText1">
          <span class="descText">Hi.</span>
        </div>
        <div class="portText2">
          <span class="descText">My name is Randy.</span>
        </div>
        <div class="portText3">
          <span class="descText">I am a software engineer.</span>
        </div>
      </b-container>
    </section>
    <section class="page-section" href="#Skills">
      <div class="container px-4 px-lg-5">
        <h2 class="text-center mt-0">Skills</h2>
        <hr class="divider" />
        <div class="row gx-4 gx-lg-5">
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" />
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <img src="https://img.icons8.com/color/96/000000/css3.png" />
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <img src="https://img.icons8.com/color/96/000000/javascript.png" />
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <img src="https://img.icons8.com/color/96/000000/nodejs.png" />
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <img src="https://img.icons8.com/color/96/000000/vue-js.png" />
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <img src="https://img.icons8.com/color/96/000000/ruby-programming-language.png" />
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <img src="https://img.icons8.com/color/96/000000/red-hat.png" />
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <img src="https://img.icons8.com/color/96/000000/git.png" />
            </div>
          </div>

          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <img src="https://img.icons8.com/color/96/000000/postgreesql.png" />
            </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <img src="https://img.icons8.com/color/96/000000/github-2.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page-section" href="#Projects">
      <div class="container px-4 px-lg-5">
        <h2 class="text-center mt-0">Projects</h2>
        <hr class="divider" />

        <div>
          <b-card-group deck>
            <b-card title="Exchangagram" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
              <b-card-text>
                This is a Instagram clone collaborated project built in Html, CSS, and Javascript. On the front-end
              </b-card-text>
              <template #footer>
                <small class="text-muted">Last updated 3 mins ago</small>
              </template>
            </b-card>

            <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
              <b-card-text>This card has supporting text below as a natural lead-in to additional content.</b-card-text>
              <template #footer>
                <small class="text-muted">Last updated 3 mins ago</small>
              </template>
            </b-card>

            <b-card
              title="Title"
              class="bg-dark"
              img-src="https://picsum.photos/300/300/?image=41"
              img-alt="Image"
              img-top
            >
              <b-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card
                has even longer content than the first to show that equal height action.
              </b-card-text>
              <template #footer>
                <small class="text-muted">Last updated 3 mins ago</small>
              </template>
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
  created: function () {},
  methods: {},
};
</script>
