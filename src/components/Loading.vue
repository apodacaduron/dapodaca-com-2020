<template>

<div class="container d-center">
	<spinner></spinner>
</div>

</template>

<script>
const Spinner = () => import('@/components/Spinner.vue')

export default {
  name: 'loading',
  components: {
		Spinner
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
	user-select: none;
	background: #071017;
	position: fixed;
	z-index: 99;
}
</style>
