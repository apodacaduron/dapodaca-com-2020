<template>
<div class="container">
  <div class="w-container m-center space-between">
    <div class="title-container">
      <h1 class="title margin-title">FRAME WORKS</h1>
      <span class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sapiente enim impedit nemo dignissimos ratione iusto, autem voluptate provident voluptatibus quod doloremque.</span>
      <a href="" class="slide-btn-alt contact-btn uppercase display-block">Check out my Work</a>
    </div>
    <div class="framework-container" v-tilt>
      <img class="icon" src="@/assets/angular-icon.svg" alt="">
      <img class="icon" src="@/assets/vue-logo.png" alt="">
      <img class="icon" src="@/assets/laravel-logo.svg" alt="">
      <img class="icon" src="@/assets/ionic.svg" alt="">
    </div>
    <floating-frameworks></floating-frameworks>
  </div>
</div>
</template>

<script>
const FloatingFrameworks = () => import('@/components/FloatingFrameworks.vue')

export default {
  name: 'frameworksSection',
  components: {
    FloatingFrameworks
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 480px;
	user-select: none;
	background: linear-gradient(to right, #071017, #0d202c);
  overflow: hidden;
}
.w-container {
  max-width: 1800px;
	position: relative;
  padding: 80px 7%;
  display: flex;
}
.space-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title-container {
  color: white;
  width: 500px;
  height: 100%;
  z-index: 5;
}
.contact-btn {
  border: 1px solid white;
  border-radius: 2px;
  padding: 10px 25px;
  color: white;
  margin: 15px 0 0 0;
  width: 132px;
}
.contact-btn:hover {
  color: #071017;
}
.framework-container {
  width: 500px;
  height: 500px;
  z-index: 9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  transition: 3s background ease-in-out;
}
.framework-container:hover {
  transform-style: preserve-3d;
  transform: perspective(10000px);
  background: radial-gradient(#ffffffaa, #ffffffaa 5%, #ffffff 50%, #ffffff);
}
.icon {
  height: auto;
  width: 200px;
  position: absolute;
  transform: translateZ(80px);
}

.icon:nth-child(4) {
  animation: xfade 16s 0s infinite;
  opacity: 0;
}
.icon:nth-child(3) {
  animation: xfade 16s 4s infinite;
  opacity: 0;
}
.icon:nth-child(2) {
  animation: xfade 16s 8s infinite;
  opacity: 0;
}
.icon:nth-child(1) {
  animation: xfade 16s 12s infinite;
  opacity: 0;
}

@keyframes xfade{
  17% {
    opacity:1;
  }
  25% {
    opacity:0;
  }
  92% {
    opacity:0;
  }
}

@media screen and (max-width: 910px) {
  .title-container {
    color: white;
    width: 400px;
    height: 100%;
    z-index: 5;
  }
  .framework-container {
    width: 400px;
    height: 400px;
  }
}
@media screen and (max-width: 768px) {
  .title-container {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .framework-container {
    display: none;
  }
}
</style>
