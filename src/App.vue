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
.slide-btn {
  text-align: center;
  cursor: pointer;
  user-select: none;
  background: linear-gradient(to right, black 50%, rgba(0, 0, 0, 0) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .3s ease-out;
}

.slide-btn:hover {
  background-position: left bottom;
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
.m-center {
    margin: 0 auto;
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
.title {
  font-size: 8rem;
  line-height: 8rem;
}
.subtitle {
  display: block;
  font-size: 1.6rem;
}
.text {
  display: block;
  font-size: 1rem;
}
.text-center {
  text-align: center;
}
@media screen and (max-width: 1366px) {
  .title {
    font-size: 7rem;
    line-height: 7rem;
  }
  .subtitle {
    display: block;
    font-size: 1.4rem;
  }
}
@media screen and (max-width: 910px) {
  .title {
    font-size: 5rem;
    line-height: 5rem;
  }
  .subtitle {
    display: block;
    font-size: 1.2rem;
  }
}
</style>
