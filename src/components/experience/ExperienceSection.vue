<template>
<section id="experience">
  <transition name="fade">
    <modal-experience v-if="isModalOpen" :data="selected" @close="closeModal"></modal-experience>
  </transition>
  <div class="divider d-top"></div>
  <div class="title-container">
    <h4>Experience</h4>
    <h2>What i've done</h2>
  </div>
  <div class="experience-content">
    <div class="fade-left"></div>
    <div class="fade-right"></div>
    <swiper :options="config">
      <swiper-slide class="slide-item" v-for="(slide, index) in experiences" :key="index">
        <experience-card :experience="slide" @selected="setSelected"></experience-card>
      </swiper-slide>
    </swiper>
    <div class="progress-container">
      <progress-bar></progress-bar>
      <span>Swipe to see more</span>
    </div>
  </div>
  <div class="divider d-bottom"></div>
</section>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import disableScroll from 'disable-scroll'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'ExperienceSection',
  components: {
    swiper,
    swiperSlide,
    ExperienceCard: () => import('@/components/experience/ExperienceCard.vue'),
    ModalExperience: () => import('@/components/experience/ModalExperience.vue'),
    ProgressBar: () => import('@/components/ProgressBar.vue')
  },
  methods: {
    setSelected (data) {
      this.isModalOpen = true
      this.selected = data
      disableScroll.on()
    },
    closeModal () {
      this.isModalOpen = false
      this.selected = {}
      disableScroll.off()
    }
  },
  data: () => ({
    selected: {},
    isModalOpen: false,
    config: {
      direction: 'horizontal',
      slidesPerView: 'auto',
      keyboard: false,
      freeMode: true,
      freeModeMomentumRatio: 1,
      mousewheel: false,
      scrollbar: false,
      navigation: false,
      pagination: false,
      spaceBetween: 25
    },
    experiences: [
      {
        logo: 'controlla.svg',
        title: 'Controlla Technologies',
        description: 'Designed and coded landing pages, worked on specific custom CRM and ERP systems, mobile apps on flutter, REST API usage, synchronized a COMPAQ local database through an electron client to store in the cloud, designed and integrated and interactive map for house selling, web deployment, database managment, general troubleshooting, computer support for company members and video/design for marketing occasionally.',
        url: 'http://controlla.com.mx/',
        from: '12-2018',
        to: '',
        isCurrent: true
      },
      {
        logo: 'XnetW.svg',
        title: 'Xnet Total Solutions',
        description: 'Developed several Landing Pages, contributed on PHP Invoice Systems, added new features to a restaurant order taking system from a big restaurant franchise, created and managed websites through ssh on a Linux server and collaborated with the installation of Access Points on a building in Acapulco, Guerrero.',
        url: 'https://www.xnet.com.mx/',
        from: '07-2018',
        to: '12-2018',
        isCurrent: false
      },
      {
        logo: 'itsncgP.png',
        title: 'ITSNCG',
        description: 'Worked as a photographer, video editor, motion graphics artist and managing social media.',
        url: 'http://itsncg.edu.mx/',
        from: '09-2016',
        to: '05-2018',
        isCurrent: false
      },
      {
        logo: 'unsplash.png',
        title: 'Photographer',
        description: 'I have contributed on Unsplash with more than 80 professional photographies and generated over 44 million views and 350 thousand downloads, placing me under the 1000th most downloaded contributors ever, the pictures have been featured on big platforms like Trello, Adobe Spark, BuzzFeed, PicsArt, Unfold, Invision, Over and more independent businesses.',
        url: 'http://unsplash.com/danielapodaca96',
        from: '03-2017',
        to: '03-2018',
        isCurrent: false
      },
      {
        logo: 'video.svg',
        title: 'Freelance Video Producer',
        description: 'Produced music videos and music for local artists, from recording, editing, mastering and publishing.',
        url: 'http://itsncg.edu.mx/',
        from: '03-2015',
        to: '03-2017',
        isCurrent: false
      },
      {
        logo: 'deskodelogo.png',
        title: 'Deskode',
        description: 'Worked as a motion graphics artists, animating advertising for local city TV\'s.',
        url: 'http://deskode.com/',
        from: '07-2015',
        to: '10-2016',
        isCurrent: false
      },
    ]
  })
}
</script>

<style lang="scss">
#experience {
  min-height: 380px;
  width: 100%;
  background: var(--light-gray);
  padding: 70px 0 70px 0;
  box-sizing: border-box;
  position: relative;
  .experience-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 25px 15px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    .fade-left {
      height: 100%;
      position: absolute;
      background: linear-gradient(to right, var(--light-gray), rgba(255, 255, 255, 0));
      width: 5%;
      top: 0;
      left: 0;
      z-index: 9;
      pointer-events: none;
    }
    .fade-right {
      height: 100%;
      position: absolute;
      top: 0;
      background: linear-gradient(to left, var(--light-gray), rgba(255, 255, 255, 0));
      width: 5%;
      right: 0;
      z-index: 9;
      pointer-events: none;
    }
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
.progress-container {
  max-width: 300px;
  margin: 20px auto 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.swiper-container {
  overflow: initial;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>