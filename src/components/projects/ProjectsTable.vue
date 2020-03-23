<template>
  <div id="projects-table">
    <div class="projects-tabs">
      <div class="projects-tabs-titles">
        <div class="btn-tabs" v-for="(item, index) in tabs" :class="{ selectedTab: index === selectedTab }" :key="index" @click="selectTab(index)">{{ item.title }}</div>
      </div>
      <div class="projects-tab-content" v-if="projectsFiltered.length > 0">
        <project-card v-for="(item, index) in projectsFiltered" :key="index" :data="item"></project-card>
      </div>
      <no-results v-if="projectsFiltered.length < 1"></no-results>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsTable',
  components: {
    ProjectCard: () => import('@/components/projects/ProjectCard.vue'),
    NoResults: () => import('@/components/NoResults.vue')
  },
  props: {
    tabs: {
      type: Array
    },
    projects: {
      type: Array
    }
  },
  computed: {
    projectsFiltered() {
      return this.projects.filter(e => e.type === this.selectedTab)
    }
  },
  data: () => ({
    selectedTab: 0
  }),
  methods: {
    selectTab(index) {
      this.selectedTab = index
    }
  }
}
</script>

<style lang="scss" scoped>
#projects-table {
  .projects-tabs {
    .projects-tabs-titles {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 20px 0;
      .btn-tabs {
        padding: 8px 15px;
        color: #071017;
        transition: 0.2s all ease-in-out;
        border-radius: 2px;
        cursor: pointer;
        user-select: none;
        margin: 0 10px 0 0;
        &:hover {
          background: rgba(0, 0, 0, 0.05);
        }
      }
      .selectedTab {
        background: rgba(0, 0, 0, 0.1);
      }
    }
    .projects-tab-content {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
      grid-gap: 30px;
      max-width: 960px;
      margin: 0 auto 30px;
    }
  }
}
</style>