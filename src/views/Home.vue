<template>
<div class="container">
  <transition name="slide">
    <loading v-if="isLoading"></loading>
  </transition>
  <header-section></header-section>
  <profile-section></profile-section>
  <projects-section></projects-section>
  <skills-section></skills-section>
  <experience-section></experience-section>
  <education-section></education-section>
  <footer-section></footer-section>
</div>

</template>

<script>
export default {
  name: 'home',
  components: {
    Loading: () => import('@/components/Loading.vue'),
    HeaderSection: () => import('@/components/HeaderSection.vue'),
    ProfileSection: () => import('@/components/profile/ProfileSection.vue'),
    ProjectsSection: () => import('@/components/projects/ProjectsSection.vue'),
    SkillsSection: () => import('@/components/skills/SkillsSection.vue'),
    ExperienceSection: () => import('@/components/experience/ExperienceSection.vue'),
    EducationSection: () => import('@/components/education/EducationSection.vue'),
    FooterSection: () => import('@/components/footer/FooterSection.vue'),
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
