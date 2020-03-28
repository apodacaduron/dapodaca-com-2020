<template>
  <section id="skills">
    <div class="divider d-top"></div>
    <div class="title-container">
      <h4>Skills</h4>
      <h2>Tools i know</h2>
    </div>
    <div class="skills-content">
      <software-slider></software-slider>
      <div class="progress-container">
        <progress-bar></progress-bar>
        <span>Swipe to see more</span>
      </div>
    </div>
    <div class="divider d-bottom"></div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  components: {
    SoftwareSlider: () => import('@/components/SoftwareSlider.vue'),
    ProgressBar: () => import('@/components/ProgressBar.vue')
  },
  data: () => ({})
}
</script>

<style lang="scss" scoped>
#skills {
  min-height: 380px;
  width: 100%;
  padding: 70px 0 70px 0;
  box-sizing: border-box;
  position: relative;
  .skills-content {

  }
  .divider {
    width: 100%;
    position: absolute;
    height: 30px;
    left: 0;
    background: url('../../assets/divider.svg');
    background-size: auto 105%;
  }
  .d-top {
    top: 0;
    transform: rotate(180deg);
  }
  .d-bottom {
    bottom: 0;
  }
  .title-container {
    text-align: center;
    margin: 0 0 20px 0;
    h4 {
      font-size: 1.4rem;
      font-weight: lighter;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
}

.progress-container {
  max-width: 300px;
  margin: 20px auto 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>