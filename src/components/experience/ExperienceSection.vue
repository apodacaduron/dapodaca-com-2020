<template>
  <section id="experience">
    <div class="divider d-top"></div>
    <div class="title-container">
      <h4>Experience</h4>
      <h2>What i've done</h2>
    </div>
    <div class="experience-content">
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  components: {
  },
  data: () => ({})
}
</script>

<style lang="scss" scoped>
#experience {
  min-height: 380px;
  width: 100%;
  background: var(--light-gray);
  padding: 70px 0 70px 0;
  box-sizing: border-box;
  position: relative;
  .experience-content {

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
</style>