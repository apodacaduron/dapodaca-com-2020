<template>
<div class="container">
  <transition name="slide">
    <loading v-if="isLoading"></loading>
  </transition>
  <header-section></header-section>
  <software-section></software-section>
</div>

</template>

<script>
const Loading = () => import('@/components/Loading.vue')
const HeaderSection = () => import('@/components/HeaderSection.vue')
const SoftwareSection = () => import('@/components/SoftwareSection.vue')

export default {
  name: 'home',
  components: {
    Loading,
    HeaderSection,
    SoftwareSection,
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
