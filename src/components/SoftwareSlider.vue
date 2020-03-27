<template>
<div class="swiper-container">
  <div class="fade-left"></div>
  <div class="fade-right"></div>
  <swiper :options="config">
    <swiper-slide class="slide-item" v-for="(slide, index) in softwareUsed" :key="index">
      <div class="icon-container text-center">
        <a class="reset-anchor" target="_blank" :href="slide.url">
          <img class="icon" :src="require(`@/assets/tools/${slide.icon}`)" :alt="slide.name">
          <span class="text">{{ slide.name }}</span>
        </a>
      </div>
    </swiper-slide>
  </swiper>
</div>

</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'SoftwareSlider',
  components: {
    swiper,
    swiperSlide
  },
  data: () => ({
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
    softwareUsed: [
      {
        icon: 'vue-logo.png',
        name: 'Vue',
        url: 'https://vuejs.org/'
      },
      {
        icon: 'vue-logo.png',
        name: 'Flutter',
        url: 'https://vuejs.org/'
      },
      {
        icon: 'vue-logo.png',
        name: 'Express.js',
        url: 'https://vuejs.org/'
      },
      {
        icon: 'vue-logo.png',
        name: 'MongoDB',
        url: 'https://vuejs.org/'
      },
      {
        icon: 'vue-logo.png',
        name: 'Node.js',
        url: 'https://vuejs.org/'
      },
      {
        icon: 'vue-logo.png',
        name: 'React.js',
        url: 'https://vuejs.org/'
      },
      {
        icon: 'vue-logo.png',
        name: 'CPanel',
        url: 'https://vuejs.org/'
      },
      {
        icon: 'vue-logo.png',
        name: 'MySQL',
        url: 'https://vuejs.org/'
      },
      {
        icon: 'vue-logo.png',
        name: 'Github',
        url: 'https://vuejs.org/'
      },
      {
        icon: 'vue-logo.png',
        name: 'NPM',
        url: 'https://vuejs.org/'
      },
      {
        icon: 'vue-logo.png',
        name: 'SEO',
        url: 'https://vuejs.org/'
      },
      {
        icon: 'angular-icon.svg',
        name: 'Angular',
        url: 'https://angular.io/'
      },
      {
        icon: 'ionic.svg',
        name: 'Ionic',
        url: 'https://ionicframework.com/'
      },
      {
        icon: 'laravel-logo.svg',
        name: 'Laravel',
        url: 'https://laravel.com/'
      },
      {
        icon: 'vscode-logo.svg',
        name: 'VS Code',
        url: 'https://code.visualstudio.com/'
      },
      {
        icon: 'blender-logo.png',
        name: 'Blender',
        url: 'https://www.blender.org/'
      },
      {
        icon: 'linux-logo.svg',
        name: 'Linux',
        url: 'https://www.archlinux.org/'
      },
      {
        icon: 'linux-logo.svg',
        name: 'MacOS',
        url: 'https://www.archlinux.org/'
      },
      {
        icon: 'postman-logo.svg',
        name: 'Postman',
        url: 'https://www.getpostman.com/'
      },
      {
        icon: 'after-effects.svg',
        name: 'After Effects',
        url: 'https://www.adobe.com/mx/products/aftereffects.html'
      },
      {
        icon: 'audition.svg',
        name: 'Audition',
        url: 'https://www.adobe.com/mx/products/audition.html'
      },
      {
        icon: 'illustrator.svg',
        name: 'Illustrator',
        url: 'https://www.adobe.com/mx/products/illustrator.html'
      },
      {
        icon: 'adobe-photoshop.svg',
        name: 'Photoshop',
        url: 'https://www.adobe.com/mx/products/photoshop.html'
      },
      {
        icon: 'premier.svg',
        name: 'Premiere',
        url: 'https://www.adobe.com/mx/products/premiere.html'
      },
      {
        icon: 'media-encoder.svg',
        name: 'Media Encoder',
        url: 'https://www.adobe.com/mx/products/media-encoder.html'
      }
    ]
  }),
}
</script>

<style scoped>
.fade-left {
  height: 100%;
  position: absolute;
  background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  width: 5%;
  left: 0;
  z-index: 9;
  pointer-events: none;
}
.fade-right {
  height: 100%;
  position: absolute;
  background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  width: 5%;
  right: 0;
  z-index: 9;
  pointer-events: none;
}
.swiper-container {
  margin: 8px auto 0 auto;
  max-width: 1024px;
}
.slide-item {
  width: auto;
  padding: 10px 0;
}
.icon-container {
  width: 90px;
  transition: 0.1s all ease-in-out;
}
.icon-container:hover {
  transform: scale(1.1);
  opacity: 0.8;
}
.icon {
  height: 50px;
  width: auto;
  z-index: 8;
}
.reset-anchor {
  color: inherit;
}

</style>
