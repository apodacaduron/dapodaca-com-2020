<template>

<div class="container">
    <img class="logo" src="@/assets/MainLogoW.svg" alt="">
    <svg class="spinner" width="80px" height="80px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="path" fill="none" stroke-width="1" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
</div>

</template>

<script>

export default {
  name: 'loading',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.logo {
    position: absolute;
    height: 40px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}
.container {
    width: 80px;
    height: 80px;
}
$offset: 187;
$duration: 1.4s;

.spinner {
  animation: rotator $duration linear infinite;
}

@keyframes rotator {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
}

.path {
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  stroke: #ffffff;
  transform-origin: center;
  animation:
    dash $duration ease-in-out infinite;
}

@keyframes dash {
 0% { stroke-dashoffset: $offset; }
 50% {
   stroke-dashoffset: $offset/4;
   transform:rotate(135deg);
 }
 100% {
   stroke-dashoffset: $offset;
   transform:rotate(450deg);
 }
}
</style>
