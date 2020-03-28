<template>
  <section id="education">
    <div class="divider d-top"></div>
    <div class="title-container">
      <h4>Education</h4>
      <h2>Summary</h2>
    </div>
    <div class="education-content">
      <img src="@/assets/education/education.svg" alt="">
      <p></p>
    </div>
    <div class="divider d-bottom"></div>
  </section>
</template>

<script>
export default {
  name: 'EducationSection',
  data: () => ({})
}
</script>

<style lang="scss" scoped>
#education {
  min-height: 450px;
  width: 100%;
  padding: 70px 20px 70px 20px;
  box-sizing: border-box;
  position: relative;
  .education-content {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    img {
      width: 50%;
    }
    p {
      width: 50%;
      padding: 0 50px;
      font-size: 1rem;
    }
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
    img {
      display: none;
    }
    p {
      width: 100% !important;
    }
  }
}
</style>