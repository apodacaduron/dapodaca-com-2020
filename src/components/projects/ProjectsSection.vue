<template>
  <section id="projects">
    <div class="divider d-top"></div>
    <div class="title-container">
      <h4>Projects</h4>
      <h2>Recent Works</h2>
    </div>
    <div class="cards-container">
      <projects-table :tabs="tabs" :projects="projects"></projects-table>
    </div>
    <div class="divider d-bottom"></div>
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
        description: 'Website focused on creating and sharing color palettes for designers and developers, made with the MEVN stack.',
        url: '',
        image: 'personal/palette.jpg',
        type: 0
      },
      {
        title: 'Real State',
        description: 'Landing page with administrator dashboard to create posts about homes for sale and rent, made with Angular and Laravel.',
        url: '',
        image: 'personal/code1.jpg',
        type: 0
      },
      {
        title: 'Food Recipes',
        description: 'A mobile app to create, share, like and save food recipes, made with Ionic and Laravel',
        url: '',
        image: 'personal/phone.jpg',
        type: 0
      },
      {
        title: 'Flutter CRM',
        description: 'Complementary app of an existing CRM using it\'s REST Api service.',
        url: '',
        image: 'jobs/flutter.jpg',
        type: 1
      },
      {
        title: 'Electron COMPAQ Data Sync',
        description: 'Data sync from COMPAQ local database through an electron client to a crm on the cloud.',
        url: '',
        image: 'jobs/code2.jpg',
        type: 1
      },
      {
        title: 'Speed',
        description: 'Speed is an indoor cycling company where you can create an account, buy credits and book lessons with you favorite instructors.',
        url: 'https://speedcycle.mx',
        image: 'jobs/Speed.jpg',
        type: 1
      },
      {
        title: 'H20 Capital',
        description: 'An investments team landing page to showcase their service, team and contact.',
        url: 'https://www.h20capital.com/',
        image: 'jobs/graphs1.jpg',
        type: 1
      },
      {
        title: 'CRM Systems',
        description: 'Multiple CRM Systems with the goal of improving business relationships and profitability.',
        url: '',
        image: 'jobs/crm.jpg',
        type: 1
      },
      {
        title: 'ERP Systems',
        description: 'Focused on internal processes that are essential to a business, from inventory to customer management.',
        url: '',
        image: 'jobs/erp.jpg',
        type: 1
      },
    ]
  })
}
</script>

<style lang="scss" scoped>
  #projects {
    min-height: 550px;
    width: 100%;
    background: var(--light-gray);
    padding: 70px 20px 70px 20px;
    box-sizing: border-box;
    position: relative;
    .divider {
      width: 100%;
      position: absolute;
      height: 30px;
      left: 0;
      background: url('../../assets/divider.svg');
      background-size: auto 105%;
    }
    .d-top {
      top: 0;
      transform: rotate(180deg);
    }
    .d-bottom {
      bottom: 0;
    }
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