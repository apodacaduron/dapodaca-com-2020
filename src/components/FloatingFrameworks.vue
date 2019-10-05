<template>
<div class="icon-container">
  <!-- <img class="icon" :key="index" v-for="(framework, index) in frameworks" :src="require(`@/assets/${framework.icon}`)" alt=""> -->
  <ul class="floating-icons">
    <li class="drift drift-1 delay-1"><div class="float float-1"><img class="icon-sm" src="@/assets/angular-icon.svg" alt=""></div></li>
    <li class="drift drift-2 delay-3"><div class="float float-2"><img class="icon-lg" src="@/assets/vue-logo.png" alt=""></div></li>
    <li class="drift drift-3"><div class="float float-3"><img class="icon-lg" src="@/assets/laravel-logo.svg" alt=""></div></li>
    <li class="drift drift-4 delay-2"><div class="float float-4"><img class="icon-md" src="@/assets/ionic.svg" alt=""></div></li>
    <li class="drift drift-5"><div class="float float-5"><img class="icon-lg" src="@/assets/angular-icon.svg" alt=""></div></li>
    <li class="drift drift-6 delay-2"><div class="float float-6"><img class="icon-md" src="@/assets/vue-logo.png" alt=""></div></li>
    <li class="drift drift-7"><div class="float float-7"><img class="icon-sm" src="@/assets/laravel-logo.svg" alt=""></div></li>
    <li class="drift drift-8 delay-5"><div class="float float-8"><img class="icon-lg" src="@/assets/ionic.svg" alt=""></div></li>
    <li class="drift drift-9 delay-5"><div class="float float-9"><img class="icon-lg" src="@/assets/angular-icon.svg" alt=""></div></li>
    <li class="drift drift-10 delay-3"><div class="float float-10"><img class="icon-md" src="@/assets/vue-logo.png" alt=""></div></li>

    <li class="drift drift-2 delay-5"><div class="float float-3"><img class="icon-sm" src="@/assets/ionic.svg" alt=""></div></li>
    <li class="drift drift-5 delay-4"><div class="float float-7"><img class="icon-md" src="@/assets/laravel-logo.svg" alt=""></div></li>
    <li class="drift drift-3 delay-1"><div class="float float-9"><img class="icon-sm" src="@/assets/vue-logo.png" alt=""></div></li>
  </ul>
</div>

</template>

<script>
export default {
  name: 'floatingFrameworks',
  components: {
  },
  data: () => ({
    frameworks: [
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
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.icon-container {
  z-index: 3;
  width: 90%;
  height: 100%;
  position: absolute;
  left: -80px;
  top: 0;
	user-select: none;
}
.icon-lg {
  height: 50px;
  width: auto;
  opacity: 0.5;
}
.icon-md {
  height: 32px;
  width: auto;
  opacity: 0.5;
}
.icon-sm {
  height: 16px;
  width: auto;
}


@-webkit-keyframes drift {
  0% {
  opacity: 1;
  -webkit-transform: translateX(120%);
  transform: translateX(120%);
  }
  100% {
  opacity: 1;
  -webkit-transform: translateX(-5%);
  transform: translateX(-5%);
  }
}
@keyframes drift {
  0%{
  opacity: 1;
  transform: translateX(120%);
  }
  100% {
  opacity: 1;
  transform: translateX(-5%);
  }
}
/* Float 1 */
@-webkit-keyframes float-1 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(140%);
	transform: translateY(140%);
  }
}
@keyframes float-1 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(140%);
	transform: translateY(140%);
  }
}
/* Float 2 */
@-webkit-keyframes float-2 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(-110%);
	transform: translateY(-110%);
  }
}
@keyframes float-2 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(-110%);
	transform: translateY(-110%);
  }
}

/* Float 3 */
@-webkit-keyframes float-3 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(-80%);
	transform: translateY(-80%);
  }
}
@keyframes float-3 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(-80%);
	transform: translateY(-80%);
  }
}

/* Float 4 */
@-webkit-keyframes float-4 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(135%);
	transform: translateY(135%);
  }
}
@keyframes float-4 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(135%);
	transform: translateY(135%);
  }
}

/* Float 5 */
@-webkit-keyframes float-5 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(95%);
	transform: translateY(95%);
  }
}
@keyframes float-5 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(95%);
	transform: translateY(95%);
  }
}

/* Float 6 */
@-webkit-keyframes float-6 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(125%);
	transform: translateY(125%);
  }
}
@keyframes float-6 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(125%);
	transform: translateY(125%);
  }
}

/* Float 7 */
@-webkit-keyframes float-7 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(80%);
	transform: translateY(80%);
  }
}
@keyframes float-7 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(80%);
	transform: translateY(80%);
  }
}

/* Float 8 */
@-webkit-keyframes float-8 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(110%);
	transform: translateY(110%);
  }
}
@keyframes float-8 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(110%);
	transform: translateY(110%);
  }
}

/* Float 9 */
@-webkit-keyframes float-9 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(160%);
	transform: translateY(160%);
  }
}
@keyframes float-9 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(160%);
	transform: translateY(160%);
  }
}

/* Float 10 */
@-webkit-keyframes float-10 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(70%);
	transform: translateY(70%);
  }
}
@keyframes float-10 {
  0%, 100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
  }
  50% {
	-webkit-transform: translateY(70%);
	transform: translateY(70%);
  }
}

.drift {
	-webkit-animation-name: drift;
	animation-name: drift;
	-webkit-animation-timing-function: cubic-bezier(0.12, 0.32, 0.92, 0.63);
	animation-timing-function: cubic-bezier(0.12, 0.32, 0.92, 0.63);
	-webkit-animation-direction: normal; 
	animation-direction: normal;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
	-webkit-animation-fill-mode: forwards;
	animation-fill-mode: forwards;
}
.drift-1 {
	-webkit-animation-duration: 8s;
	animation-duration: 8s;
}
.drift-2 {
	-webkit-animation-duration: 9.7s;
	animation-duration: 9.7s;
}
.drift-3 {
	-webkit-animation-duration: 7.5s;
	animation-duration: 7.5s;
}
.drift-4 {
	-webkit-animation-duration: 9.3s;
	animation-duration: 9.3s;
}
.drift-5 {
	-webkit-animation-duration: 6.5s;
	animation-duration: 6.5s;
}
.drift-6 {
	-webkit-animation-duration: 8.5s;
	animation-duration: 8.5s;
}
.drift-7 {
	-webkit-animation-duration: 11s;
	animation-duration: 11s;
}
.drift-8 {
	-webkit-animation-duration: 10s;
	animation-duration: 10s;
}
.drift-9 {
	-webkit-animation-duration: 7s;
	animation-duration: 7s;
}
.drift-10 {
	-webkit-animation-duration: 12.5s;
	animation-duration: 12.5s;
}
.float {
	-webkit-animation-timing-function: cubic-bezier(0.50, 0, 0.50, 1);
	animation-timing-function: cubic-bezier(0.50, 0, 0.50, 1);
	-webkit-animation-direction: normal; 
	animation-direction: normal;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
	-webkit-animation-fill-mode: forwards;
	animation-fill-mode: forwards;
}
.float-1 {
	-webkit-animation-name: float-1;
	animation-name: float-1;
	-webkit-animation-duration: 9s;
	animation-duration: 9s;
}
.float-2 {
	-webkit-animation-name: float-2;
	animation-name: float-2;
	-webkit-animation-duration: 12s;
	animation-duration: 12s;
}
.float-3 {
	-webkit-animation-name: float-3;
	animation-name: float-3;
	-webkit-animation-duration: 10s;
	animation-duration: 10s;
}
.float-4 {
	-webkit-animation-name: float-4;
	animation-name: float-4;
	-webkit-animation-duration: 11s;
	animation-duration: 11s;
}
.float-5 {
	-webkit-animation-name: float-5;
	animation-name: float-5;
	-webkit-animation-duration: 7s;
	animation-duration: 7s;
}
.float-6 {
	-webkit-animation-name: float-6;
	animation-name: float-6;
	-webkit-animation-duration: 13s;
	animation-duration: 13s;
}
.float-7 {
	-webkit-animation-name: float-7;
	animation-name: float-7;
	-webkit-animation-duration: 12s;
	animation-duration: 12s;
}
.float-8 {
	-webkit-animation-name: float-8;
	animation-name: float-8;
	-webkit-animation-duration: 13s;
	animation-duration: 13s;
}
.float-9 {
	-webkit-animation-name: float-9;
	animation-name: float-9;
	-webkit-animation-duration: 8s;
	animation-duration: 8s;
}
.float-10 {
	-webkit-animation-name: float-10;
	animation-name: float-10;
	-webkit-animation-duration: 8s;
	animation-duration: 8s;
}

/* Animation Delays */
.delay-1 {
	-webkit-animation-delay: 1s;
	animation-delay: 1s;
}
.delay-2 {
	-webkit-animation-delay: 2s;
	animation-delay: 2s;
}
.delay-3 {
	-webkit-animation-delay: 3s;
	animation-delay: 3s;
}
.delay-4 {
	-webkit-animation-delay: 4s;
	animation-delay: 4s;
}
.delay-5 {
	-webkit-animation-delay: 5s;
	animation-delay: 5s;
}

section#animated-cta-bar {
	position: relative;
	overflow: hidden;
	padding: 50px 15px;
	background: #000428;
	background: -webkit-linear-gradient(to left, #000428, #004e92);
	background: linear-gradient(to left, #000428, #004e92);
  height: 100vh;

	ul.floating-icons {
		margin: 0;
		padding: 0;
		list-style: none;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color: #fff;
		opacity: 0.06;

		li {
			opacity: 0;
			position: absolute;
			display: block;
			right: 0;
			width: 100%;
			text-align: left;

			i {

				&.sm {
					font-size: 14px;
					@media (min-width: 550px) {font-size: 16px;}
					@media (min-width: 768px) {font-size: 18px;}
					@media (min-width: 992px) {font-size: 20px;}
				}
				&.md {
					font-size: 20px;
					@media (min-width: 550px) {font-size: 23px;}
					@media (min-width: 768px) {font-size: 26px;}
					@media (min-width: 992px) {font-size: 29px;}
				}
				&.lg {
					font-size: 30px;
					@media (min-width: 550px) {font-size: 42px;}
					@media (min-width: 768px) {font-size: 53px;}
					@media (min-width: 992px) {font-size: 66px;}
				}
			}

			&:nth-of-type(1) {top: 27%;}
			&:nth-of-type(2) {top: 92%;}
			&:nth-of-type(3) {top: 22%}
			&:nth-of-type(4) {top: -20%;}
			&:nth-of-type(5) {top: 55%;}
			&:nth-of-type(6) {top: 9%;}
			&:nth-of-type(7) {top: 78%;}
			&:nth-of-type(8) {top: 40%;}
			&:nth-of-type(9) {top: 33%;}
			&:nth-of-type(10) {top: 70%;}
			&:nth-of-type(11) {top: 18%;}
			&:nth-of-type(12) {top: 48%;}
			&:nth-of-type(13) {top: -2%;}
			&:nth-of-type(14) {top: 90%;}
			&:nth-of-type(15) {top: 40%;}
		}
	}
}
</style>
