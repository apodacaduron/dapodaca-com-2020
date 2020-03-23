<template>
  <section id="projects-container">
    <div class="title-container">
      <h4>Projects</h4>
      <h2>Recent Works</h2>
    </div>
    <div class="cards-container">
      <projects-table :tabs="tabs" :projects="projects"></projects-table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  components: {
    ProjectsTable: () => import('@/components/projects/ProjectsTable.vue')
  },
  data: () => ({
    tabs: [
      {
        title: 'Personal'
      },
      {
        title: 'Job'
      },
    ],
    projects: [
      {
        title: 'Ultra Colors',
        description: 'Website focused on creating and sharing color palettes for designers and developers.',
        url: '',
        type: 0
      },
      {
        title: 'Speed',
        description: 'Speed is an indoor cycling company where you can create an account, buy credits and book lessons with you favorite instructors.',
        url: 'https://speedcycle.mx',
        image: 'Jobs/Speed.jpg',
        type: 1
      },
      {
        title: 'H20 Capital',
        description: 'An investments team landing page to showcase their service, team and contact.',
        url: 'https://www.h20capital.com/',
        image: 'Jobs/Speed.jpg',
        type: 1
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
  #projects-container {
    min-height: 600px;
    width: 100%;
    background: var(--light-gray);
    padding: 70px 20px 70px 20px;
    box-sizing: border-box;
    .title-container {
      text-align: center;
      margin: 0 0 20px 0;
      h4 {
        font-size: 1.4rem;
        font-weight: lighter;
      }
      h2 {
        font-size: 2.4rem;
      }
    }
    .cards-container {
      margin: 0 auto;
      max-width: 1000px;
    }
  }
</style>