<template>
  <div class="project-card" :style="`background: url(${require(`@/assets/projects/${data.image}`)}) no-repeat center center / cover;`" @click="redirectTo(data.url)">
    <div class="card-text-container">
      <h3>{{ data.title }}</h3>
      <p>{{ data.description }}</p>
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
  &:hover > .card-text-container {
    opacity: 1;
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
    box-sizing: content-box;
    h3 {
      font-size: 1.2rem;
    }
  }
}
</style>