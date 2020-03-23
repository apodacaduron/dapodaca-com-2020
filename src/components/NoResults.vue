<template>
  <div class="no-results">
    <img src="@/assets/no_results.svg" alt="No Results Found">
    <h3>No Results</h3>
    <span>I'm still working on this part of the website!</span>
  </div>
</template>

<script>
export default {
  name: 'NoResults',
}
</script>

<style lang="scss" scoped>
.no-results {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  img {
    width: 200px;
    margin: 0 0 15px 0;
  }
  h3 {
    font-size: 1.4rem;
  }
}
</style>