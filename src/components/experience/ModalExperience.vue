<template>
<div id="modal">
  <a @click="$emit('close')">
    <v-icon name="x" baseClass="icon"></v-icon>
    <div class="modal-content">
      <h1 class="title">{{ data.title }}</h1>
      <div class="description">{{ data.description }}</div>
      <d-button-w @click="visitWebsite" v-if="data.url" text="Visit" padding="10px 60px"></d-button-w>
    </div>
  </a>
</div>
</template>

<script>
export default {
  name: 'ModalExperience',
  props: {
    data: {
      type: Object
    }
  },
  components: {
    DButtonW: () => import('@/components/form/DButtonW.vue')
  },
  methods: {
    visitWebsite () {
      window.open(this.data.url, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
#modal {
  z-index: 10;
  position: fixed;
  top: 0;
  overflow: hidden;
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100vh;
  background: rgba(7, 16, 23, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-content {
    max-width: 800px;
    padding: 0 50px;
    .title {
      color: white;
      font-size: 4rem;
      line-height: 3.8rem;
    }
    .description {
      color: white;
      font-size: 1.5rem;
      margin: 20px 0 20px 0;
    }
  }
  a {
    &:hover > .icon {
      transform: scale(1.1);
    }
    .icon {
      position: absolute;
      transition: 0.1s all ease-in-out;
      top: 20px;
      right: 20px;
      cursor: pointer;
      width: 40px;
      color: white;
    }
  }
}
@media screen and (max-width: 768px) {
  .modal-content {
    max-width: 800px;
    padding: 0 30px;
    .title {
      color: white;
      font-size: 3rem !important;
      line-height: 2.8rem;
    }
    .description {
      color: white;
      font-size: 1rem !important;
      margin: 20px 0 20px 0;
    }
  }
}
</style>