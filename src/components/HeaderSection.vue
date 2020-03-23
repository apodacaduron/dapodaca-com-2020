<template>
<section id="s-header" class="container">
  <nav-desktop></nav-desktop>
  <div class="w-container m-center">
    <div class="title-container">
      <h1 class="title margin-title">DANIEL APODACA</h1>
      <span class="subtitle">I'm a Fullstack Web Developer & Designer</span>

    </div>
    <img class="portrait" src="@/assets/portrait.png" alt="">
  </div>
</section>

</template>

<script>
export default {
  name: 'headerSection',
  components: {
    NavDesktop: () => import('@/components/NavDesktop.vue')
  },
  data: () => ({})
}
</script>

<style lang="scss" scoped>
#s-header {
  width: 100%;
  height: 100vh;
	max-height: 1080px;
  background: white;
  z-index: 1;
	position: relative;
	user-select: none;
  .w-container {
    max-width: 1800px;
    position: relative;
    height: 100%;

    .portrait {
      height: 95%;
      position: absolute;
      right: 0;
      bottom: -20px;
    }
  }
  .m-center {
    margin: 0 auto;
  }
}
.title-container {
  width: 630px;
  position: absolute;
  left: 7%;
  bottom: 13%;
  z-index: 8;
}
.title {
  font-size: 8rem;
  line-height: 8rem;
}
.margin-title {
  margin: 0 0 15px 0;
}
.subtitle {
  display: block;
  font-size: 1.6rem;
}

@media screen and (max-width: 1366px) {
  .title {
    font-size: 7rem;
    line-height: 7rem;
  }
  .subtitle {
    display: block;
    font-size: 1.4rem;
  }
}
@media screen and (max-width: 910px) {
  .title {
    font-size: 5rem;
    line-height: 5rem;
  }
  .subtitle {
    display: block;
    font-size: 1.2rem;
  }
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
