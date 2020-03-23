<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300|Playfair+Display:700&display=swap');
:root {
  --light-gray: #F1F4FB;
  --dark: #071017;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Open sans', Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: #071017;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 10px;
  height: 5px;
  display: block
}
::-webkit-scrollbar-thumb {
  background: #e2e2e2;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  &:hover {
    background: rgb(196, 201, 211)
  }
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1, h2, h3 {
  font-family: 'Playfair Display', serif;
}
h1, h2, h3, h4 {
  margin: 0;
}
.uppercase {
  text-transform: uppercase;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
.no-margins {
  margin: 0;
}
.d-center {
    display: flex;
    align-items: center;
    justify-content: center;
}
.d-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.text {
  display: block;
  font-size: 1rem;
}
.text-center {
  text-align: center;
}
.display-block {
  display: block;
}

</style>
