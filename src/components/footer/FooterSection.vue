<template>
<div>
  <section id="contact">
    <div class="divider d-top"></div>
    <div class="title-container">
      <h4>Social Media</h4>
    </div>
    <div class="footer-content">
      <div class="links">
        <a aria-label="Linkedin" href="https://www.linkedin.com/in/danielapodaca96/" rel="noreferrer" target="_blank">
          <v-icon name="linkedin" baseClass="icon"></v-icon>
        </a>
        <a aria-label="Instagram" href="https://www.instagram.com/danielapodaca96/" rel="noreferrer" target="_blank">
          <v-icon name="instagram" baseClass="icon"></v-icon>
        </a>
        <a aria-label="Unsplash" href="https://unsplash.com/@danielapodaca96" rel="noreferrer" target="_blank">
          <v-icon name="camera" baseClass="icon"></v-icon>
        </a>
        <a aria-label="Facebook" href="https://www.facebook.com/Daniel.Apodaca.Duron" rel="noreferrer" target="_blank">
          <v-icon name="facebook" baseClass="icon"></v-icon>
        </a>
        <a aria-label="Mail to apodacaduron@gmail.com" href="mailto:apodacaduron@gmail.com?subject=Website Contact">
          <v-icon name="mail" baseClass="icon"></v-icon>
        </a>
      </div>
    </div>
  </section>
  <div class="copyright">
    © {{ getYear }} Daniel Apodaca
  </div>
</div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'FooterSection',
  components: {},
  computed: {
    getYear () {
      return moment().format('YYYY');
    }
  },
  data: () => ({})
}
</script>

<style lang="scss" scoped>
#contact {
  min-height: 110px;
  width: 100%;
  background: var(--dark);
  padding: 40px 0 60px 0;
  box-sizing: border-box;
  position: relative;
  .title-container {
    text-align: center;
    margin: 0 0 20px 0;
    color: white;
    h4 {
      font-size: 1.4rem;
      font-weight: lighter;
    }
  }
  .footer-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .links {
      display: flex;
      align-items: center;
      max-width: 350px;
      min-width: 250px;
      justify-content: space-between;
      a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        flex-direction: column;
        .icon {
          width: 30px;
          color: white;
        }
      }
    }
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
}
.copyright {
  color: white;
  text-align: center;
  background: #050c11;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>