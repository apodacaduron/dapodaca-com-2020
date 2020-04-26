<template>
  <div class="project-card" :style="`background: url(${require(`@/assets/projects/${data.image}`)}) no-repeat center center / cover;`" @click="redirectTo(data.url)">
    <h2>{{ data.title }}</h2>
    <div class="card-text-container">
      <h3>{{ data.title }}</h3>
      <p>{{ data.description }}</p>
    </div>
    <div class="gradient">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    redirectTo (url) {
      if (url.includes('http')) {
        window.open(url, '_blank', 'noreferrer')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.project-card {
  height: 200px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  position: relative;
  filter: sepia(100%) hue-rotate(180deg) saturate(100%) brightness(90%);
  &:hover > .card-text-container {
    opacity: 1;
  }
  &:hover > h2 {
    opacity: 0;
  }
  h2 {
    position: absolute;
    color: white;
    bottom: 15px;
    left: 15px;
    font-size: 1.5rem;
    z-index: 2;
    transition: 0.2s all ease-in-out;
  }
  .gradient {
    background: linear-gradient(0deg, rgba($color: #071017, $alpha: 0.9), rgba($color: #071017, $alpha: 0));
    height: 60%;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 1;
  }
  .card-text-container {
    transition: 0.2s all ease-in-out;
    opacity: 0;
    background: rgba($color: #071017, $alpha: 0.9);
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    padding: 0 15px;
    z-index: 3;
    box-sizing: content-box;
    h3 {
      font-size: 1.2rem;
      z-index: 3;
    }
    p {
      z-index: 3;
    }
  }
}
</style>