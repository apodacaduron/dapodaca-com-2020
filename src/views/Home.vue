<template>
<div class="container">
  <transition name="slide">
    <loading v-if="isLoading"></loading>
  </transition>
  <header-section></header-section>
  <software-section></software-section>
  <projects-section></projects-section>
</div>

</template>

<script>
export default {
  name: 'home',
  components: {
    Loading: () => import('@/components/Loading.vue'),
    HeaderSection: () => import('@/components/HeaderSection.vue'),
    SoftwareSection: () => import('@/components/SoftwareSection.vue'),
    ProjectsSection: () => import('@/components/projects/ProjectsSection.vue'),
  },
  data: () => ({
    isLoading: true
  }),
  mounted () {
    this.isLoadingSplash()
  },
  methods: {
    isLoadingSplash () {
      document.onreadystatechange = () => { 
        if (document.readyState == "complete") { 
            this.isLoading = false
        } 
      }
    }
  }
}
</script>

<style scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(0, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}
</style>
