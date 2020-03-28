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
        icon: 'vueOG.png',
        name: 'Vue',
        url: 'https://vuejs.org/'
      },
      {
        icon: 'flutterOG.png',
        name: 'Flutter',
        url: 'https://flutter.dev/'
      },
      {
        icon: 'node.svg',
        name: 'Express.js',
        url: 'https://expressjs.com/'
      },
      {
        icon: 'mongo.png',
        name: 'MongoDB',
        url: 'https://www.mongodb.com/'
      },
      {
        icon: 'node.svg',
        name: 'Node.js',
        url: 'https://nodejs.org/'
      },
      {
        icon: 'react.svg',
        name: 'React.js',
        url: 'https://reactjs.org'
      },
      {
        icon: 'cpanel.svg',
        name: 'CPanel',
        url: 'https://cpanel.net/'
      },
      {
        icon: 'mysql.png',
        name: 'MySQL',
        url: 'https://www.mysql.com/'
      },
      {
        icon: 'github.svg',
        name: 'Github',
        url: 'https://github.com/'
      },
      {
        icon: 'npm.png',
        name: 'NPM',
        url: 'https://npmjs.com/'
      },
      {
        icon: 'lighthouse.svg',
        name: 'SEO',
        url: 'https://developers.google.com/web/tools/lighthouse'
      },
      {
        icon: 'angularOG.svg',
        name: 'Angular',
        url: 'https://angular.io/'
      },
      {
        icon: 'ionic.png',
        name: 'Ionic',
        url: 'https://ionicframework.com/'
      },
      {
        icon: 'laravel.svg',
        name: 'Laravel',
        url: 'https://laravel.com/'
      },
      {
        icon: 'vscode.png',
        name: 'VS Code',
        url: 'https://code.visualstudio.com/'
      },
      {
        icon: 'blender.png',
        name: 'Blender',
        url: 'https://www.blender.org/'
      },
      {
        icon: 'linux-logo.svg',
        name: 'Linux',
        url: 'https://www.archlinux.org/'
      },
      {
        icon: 'apple.png',
        name: 'MacOS',
        url: 'https://www.apple.com/'
      },
      {
        icon: 'postman.png',
        name: 'Postman',
        url: 'https://www.getpostman.com/'
      },
      {
        icon: 'ae.png',
        name: 'After Effects',
        url: 'https://www.adobe.com/mx/products/aftereffects.html'
      },
      {
        icon: 'au.png',
        name: 'Audition',
        url: 'https://www.adobe.com/mx/products/audition.html'
      },
      {
        icon: 'illustrator.png',
        name: 'Illustrator',
        url: 'https://www.adobe.com/mx/products/illustrator.html'
      },
      {
        icon: 'photoshop.png',
        name: 'Photoshop',
        url: 'https://www.adobe.com/mx/products/photoshop.html'
      },
      {
        icon: 'premiere.png',
        name: 'Premiere',
        url: 'https://www.adobe.com/mx/products/premiere.html'
      },
      {
        icon: 'encoder.png',
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
  user-select: none;
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
  max-width: 100px;
  height: 50px;
  width: auto;
  z-index: 8;
}
.reset-anchor {
  color: inherit;
}

</style>
