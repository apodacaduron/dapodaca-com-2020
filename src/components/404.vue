<template>
  <section class="page_404">
    <div class="container">
      <h1 class="not-found-title no-margins">404</h1>
      <span class="subtitle">Still working on this, will be ready soon :)</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'notFound',
  components: {}
}
</script>

<style scoped>
.page_404 {
  width: 100%;
  height: 100vh;
  text-align: center;
  background: #071017;
  color: #ffffff;
}
.container {
  height: 80%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.not-found-title {
  font-size: 14rem;
}
@media screen and (max-width: 768px) {
  .not-found-title {
    font-size: 10rem;
  }
}
</style>
