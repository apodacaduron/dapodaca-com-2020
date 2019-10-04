<template>
<section id="s-header" class="container">
  <nav-desktop></nav-desktop>
  <div class="w-container m-center" data-tilt>
    <div class="title-container">
      <h1 class="title no-margins">DANIEL APODACA</h1>
      <span class="subtitle">I'm a Fullstack Web Developer & Designer</span>
    </div>
    <img class="portrait" src="@/assets/portrait.png" alt="">
  </div>
</section>

</template>

<script>
require('vanilla-tilt/dist/vanilla-tilt.min.js')
const NavDesktop = () => import('@/components/NavDesktop.vue')

export default {
  name: 'headerSection',
  components: {
    NavDesktop
  }
}
</script>

<style scoped>
#s-header {
  width: 100%;
  height: 100vh;
	max-height: 1080px;
  background: white;
  z-index: 1;
	position: relative;
	user-select: none;
}
.w-container {
  max-width: 1800px;
	position: relative;
	height: 100%;
}
.title-container {
	width: 630px;
	position: absolute;
	left: 7%;
	bottom: 13%;
}
.portrait {
  height: 95%;
  position: absolute;
  right: 0;
  bottom: -20px;
}

@media screen and (max-width: 1070px) {
  .portrait {
    right: -100px;
  }
}
@media screen and (max-width: 960px) {
  .portrait {
    right: -150px;
  }
}
@media screen and (max-width: 910px) {
  .portrait {
    right: -150px;
  }
}
@media screen and (max-width: 760px) {
  .portrait {
    right: -200px;
  }
}
@media screen and (max-width: 700px) {
  .portrait {
    bottom: -50px;
    opacity: 0.7;
  }
  .title-container {
    width: 100%;
    z-index: 2;
    position: absolute;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    left: 0;
    bottom: 0;
  }
}

</style>
