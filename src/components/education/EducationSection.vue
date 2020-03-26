<template>
  <section id="education">
    <div class="divider d-top"></div>
    <div class="title-container">
      <h4>Education</h4>
      <h2>Where i come from</h2>
    </div>
    <div class="education-content">
    </div>
    <div class="divider d-bottom"></div>
  </section>
</template>

<script>
export default {
  name: 'EducationSection',
  components: {
  },
  data: () => ({})
}
</script>

<style lang="scss" scoped>
#education {
  min-height: 380px;
  width: 100%;
  padding: 70px 0 70px 0;
  box-sizing: border-box;
  position: relative;
  .education-content {

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

@media screen and (max-width: 768px) {
  .education-content {

  }
}
</style>