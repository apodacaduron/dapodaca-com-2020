<template>
  <section id="profile">
    <div class="divider d-top"></div>
    <div class="title-container">
      <h4>Profile</h4>
      <h2>Summary</h2>
    </div>
    <div class="profile-content">
      <img src="@/assets/profile/about.svg" alt="">
      <p>I am a Computer Systems Engineer with 3+ years of experience in web development and design, who has developed personal products and for enterprise clients from Mexico and United States. I usually work with custom projects specific to the business needs of a client, anything from Web Applications (Frontend / Backend), Mobile Apps, Database / Server Managment, Web Deployment, Graphic Design and Video Production.</p>
    </div>
    <div class="divider d-bottom"></div>
  </section>
</template>

<script>
export default {
  name: 'ProfileSection',
  data: () => ({})
}
</script>

<style lang="scss" scoped>
#profile {
  min-height: 450px;
  width: 100%;
  padding: 70px 20px 70px 20px;
  box-sizing: border-box;
  position: relative;
  .profile-content {
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
  .profile-content {
    img {
      display: none;
    }
    p {
      width: 100% !important;
    }
  }
}
</style>