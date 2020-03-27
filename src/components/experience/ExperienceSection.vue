<template>
  <section id="experience">
    <div class="divider d-top"></div>
    <div class="title-container">
      <h4>Experience</h4>
      <h2>What i've done</h2>
    </div>
    <div class="experience-content">
      <swiper :options="config">
        <swiper-slide class="slide-item" v-for="(slide, index) in experiences" :key="index">
          <experience-card :experience="slide"></experience-card>
        </swiper-slide>
      </swiper>
    </div>
    <div class="divider d-bottom"></div>
  </section>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'ExperienceSection',
  components: {
    swiper,
    swiperSlide,
    ExperienceCard: () => import('@/components/experience/ExperienceCard.vue')
  },
  data: () => ({
    config: {
      direction: 'horizontal',
      slidesPerView: 'auto',
      keyboard: false,
      mousewheel: false,
      centeredSlides: true,
      scrollbar: false,
      navigation: false,
      pagination: false,
      spaceBetween: 25,
      initialSlide: -1
    },
    experiences: [
      {
        logo: 'controllaW.png',
        title: 'Controlla - Connecting Dots',
        description: 'Designed and coded landing pages, worked on specific custom CRM and ERP systems, mobile apps on flutter, REST API usage, synchronized a COMPAQ local database through an electron client to store in the cloud, designed and integrated and interactive map for house selling, web deployment, database managment, general troubleshooting, computer support for company members and video/design for marketing occasionally.',
        url: 'http://controlla.com.mx/'
      },
      {
        logo: 'XnetW.svg',
        title: 'Xnet',
        description: 'Developed several Landing Pages, contributed on PHP Invoice Systems, added new features to a restaurant order taking system from a big restaurant franchise, created and managed websites through ssh on a Linux server and collaborated with the installation of Access Points on a building in Acapulco, Guerrero.',
        url: 'https://www.xnet.com.mx/'
      },
      {
        logo: 'itsncgP.png',
        title: 'Instituto Tecnologico Superior de Nuevo Casas Grandes',
        description: 'Worked as a photographer, video editor, motion graphics artist and social media manager.',
        url: 'http://itsncg.edu.mx/'
      },
      {
        logo: 'itsncgP.png',
        title: 'Freelance Photographer',
        description: 'Worked on the weekends getting hired for personal photography sessions and events.',
        url: 'http://itsncg.edu.mx/'
      },
      {
        logo: 'itsncgP.png',
        title: 'Freelance Video Producer',
        description: 'Produced music videos and music for local artists, from recording, editing, mastering and publishing.',
        url: 'http://itsncg.edu.mx/'
      },
      {
        logo: 'itsncgP.png',
        title: 'Deskode',
        description: 'Worked as a motion graphics artists, animating advertising for local city TV\'s.',
        url: 'http://itsncg.edu.mx/'
      },
    ]
  })
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
    max-width: 800px;
    margin: 0 auto;
    padding: 25px 0;
    overflow: hidden;
    box-sizing: border-box;
    .slide-item {
      width: auto;
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
.swiper-container {
  overflow: initial;
}
</style>