<template>
  <section id="footer-container">
    <div class="divider d-top"></div>
    <div class="title-container">
      <h4>Footer</h4>
      <h2>What i've done</h2>
    </div>
    <div class="footer-content">
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterSection',
  components: {
  },
  data: () => ({})
}
</script>

<style lang="scss" scoped>
#footer-container {
  min-height: 380px;
  width: 100%;
  background: var(--dark);
  padding: 70px 0 70px 0;
  box-sizing: border-box;
  position: relative;
  .footer-content {

  }
  .divider {
    width: 100%;
    position: absolute;
    height: 30px;
    left: 0;
    background: url('../../assets/dividerB.svg');
    background-size: auto 105%;
  }
  .d-top {
    top: -10px;
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
  .footer-content {

  }
}
</style>