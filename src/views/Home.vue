<template>
  <div>
    <div class="container">
      <div>
        <b-img class="img-fluid profilepic" src="images/avatar.jpeg" alt="profilepic" />
      </div>
    </div>
    <div class="container">
      <div class="portText1">
        <span class="descText">Hi.</span>
      </div>
      <div class="portText2">
        <span class="descText">My name is Randy.</span>
      </div>
      <div class="portText3">
        <span class="descText">I am a software engineer.</span>
      </div>
    </div>
  </div>
</template>
<style>
.profilepic {
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  margin-top: 100px;
  margin-right: 50px;
}
.descText {
  font-size: 4rem;
}
.portText1 {
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
  opacity: 1;
}
.portText2 {
  animation: fadeIn 4s;
  -webkit-animation: fadeIn 4s;
  -moz-animation: fadeIn 4s;
  -o-animation: fadeIn 4s;
  -ms-animation: fadeIn 4s;
  opacity: 1;
}
.portText3 {
  animation: fadeIn 6s;
  -webkit-animation: fadeIn 6s;
  -moz-animation: fadeIn 6s;
  -o-animation: fadeIn 6s;
  -ms-animation: fadeIn 6s;
  opacity: 1;
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
