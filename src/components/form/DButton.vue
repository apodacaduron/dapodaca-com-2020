<template>
    <div>
        <button class="d-button slide-btn">{{ text }}</button>
    </div>
</template>

<script>
export default {
    name: 'DButton',
    props: {
        text: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
.d-button {
  border: 1px solid #071017;
  border-radius: 2px;
  padding: 10px 20px;
  color: #071017;
}
.d-button:hover {
  color: white;
}
.slide-btn {
  text-align: center;
  cursor: pointer;
  user-select: none;
  background: linear-gradient(to right, #071017 50%, rgba(0, 0, 0, 0) 50%);
  background-size: 210% 100%;
  background-position: right bottom;
  transition: all .3s ease-out;
}
.slide-btn-alt {
  text-align: center;
  cursor: pointer;
  user-select: none;
  background: linear-gradient(to right, #ffffff 50%, rgba(0, 0, 0, 0) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .3s ease-out;
}
.slide-btn:hover, .slide-btn-alt:hover {
  background-position: left bottom;
}
</style>