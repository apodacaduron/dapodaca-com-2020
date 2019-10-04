<template>
<section id="s-software">
  <div class="w-container m-center">
    <div class="title-container">
      <span class="subtitle">Tools i've used</span>
    </div>
    <div class="swiper-container">
      <div class="fade-left"></div>
      <div class="fade-right"></div>
      <swiper :options="config">
        <swiper-slide class="slide-item" v-for="(slide, index) in softwareUsed" :key="index">
          <div class="icon-container text-center">
            <a class="reset-anchor" target="_blank" :href="slide.url">
              <img class="icon" :src="require(`@/assets/${slide.icon}`)" :alt="slide.name">
              <span class="text">{{ slide.name }}</span>
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</section>

</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'softwareSection',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      config: {
        direction: 'horizontal',
        slidesPerView: 'auto',
        keyboard: false,
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        mousewheel: false,
        scrollbar: false,
        navigation: false,
        pagination: false,
        spaceBetween: 25
      },
      softwareUsed: [
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
          icon: 'angular-icon.svg',
          name: 'Angular',
          url: 'https://angular.io/'
        },
        {
          icon: 'vue-logo.png',
          name: 'Vue',
          url: 'https://vuejs.org/'
        },
        {
          icon: 'laravel-logo.svg',
          name: 'Laravel',
          url: 'https://laravel.com/'
        },
        {
          icon: 'ionic.svg',
          name: 'Ionic',
          url: 'https://ionicframework.com/'
        },
        {
          icon: 'vscode-logo.svg',
          name: 'VS Code',
          url: 'https://code.visualstudio.com/'
        },
        {
          icon: 'atom-logo.png',
          name: 'Atom',
          url: 'https://atom.io/'
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
          icon: 'media-encoder.svg',
          name: 'Media Encoder',
          url: 'https://www.adobe.com/mx/products/media-encoder.html'
        },
        {
          icon: 'postman-logo.svg',
          name: 'Postman',
          url: 'https://www.getpostman.com/'
        },
        {
          icon: 'premier.svg',
          name: 'Premiere',
          url: 'https://www.adobe.com/mx/products/premiere.html'
        },
      ]
    }
  },
}
</script>

<style scoped>
#s-software {
  width: 100%;
  padding: 50px 0;
  margin-top: 20px;
  height: 250px;
  box-sizing: border-box;
	max-height: 1080px;
  z-index: 1;
	position: relative;
	user-select: none;
}
.w-container {
  max-width: 1800px;
	position: relative;
	height: 100%;
}
.title-container {
	width: 100%;
  text-align: center;
}
.fade-left {
  height: 100%;
  position: absolute;
  background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  width: 100px;
  left: 50px;
  z-index: 9;
  pointer-events: none;
}
.fade-right {
  height: 100%;
  position: absolute;
  background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  width: 100px;
  right: 50px;
  z-index: 9;
  pointer-events: none;
}
.swiper-container {
  padding: 0 50px;
  margin: 8px 0 0 0;
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
