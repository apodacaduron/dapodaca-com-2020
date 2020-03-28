<template>
<div class="experience-card" @click="$emit('selected', experience)">
  <div class="logo-container">
    <div class="logo">
      <img :src="require(`@/assets/experiences/${experience.logo}`)" :alt="experience.title">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props: {
    experience: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.experience-card {
  background: white;
  padding: 20px 20px;
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  -webkit-box-shadow: 0px 5px 20px -17px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px 5px 20px -17px rgba(0,0,0,0.5);
  box-shadow: 0px 5px 20px -17px rgba(0,0,0,0.5);
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s all ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  .logo-container {
    height: 80%;
    width: 80%;
    .logo {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        object-fit: cover;
        width: 100%;
      }
    }
  }
}
</style>