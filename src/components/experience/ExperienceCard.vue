<template>
<div class="experience-card">
  <div class="logo-container">
    <div class="logo">
      <img :src="require(`@/assets/experiences/${experience.logo}`)" :alt="experience.title">
    </div>
  </div>
  <div class="info-container">
    <h2 class="title">{{ experience.title }}</h2>
    <div class="description">{{ experience.description }}</div>
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
  -webkit-box-shadow: 0px 5px 20px -17px rgba(0,0,0,1);
  -moz-box-shadow: 0px 5px 20px -17px rgba(0,0,0,1);
  box-shadow: 0px 5px 20px -17px rgba(0,0,0,1);
  width: 400px;
  .logo-container {
    width: 40px;
    .logo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #dddddd;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        object-fit: cover;
        width: 100%;
        background: no-repeat center center / cover
      }
    }
  }
  .info-container {
    margin: 0 0 0 20px;
    .title {
      word-wrap: break-word;
    }
  }
}
</style>