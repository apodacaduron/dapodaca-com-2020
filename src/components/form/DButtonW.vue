<template>
    <div>
        <button :style="`padding: ${padding}; width: ${width};`" class="d-button slide-btn" @click="$emit('click')">{{ text }}</button>
    </div>
</template>

<script>
export default {
    name: 'DButtonW',
    props: {
        text: {
            type: String
        },
        padding: {
            type: String,
            default: '10px 20px'
        },
        width: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
.d-button {
  border: 1px solid white;
  border-radius: 2px;
  color: white;
}
.d-button:hover {
  color: #071017;
}
.slide-btn {
  text-align: center;
  cursor: pointer;
  user-select: none;
  background: linear-gradient(to right, white 50%, rgba(0, 0, 0, 0) 50%);
  background-size: 210% 100%;
  background-position: right bottom;
  transition: all .3s ease-out;
}
.slide-btn-alt {
  text-align: center;
  cursor: pointer;
  user-select: none;
  background: linear-gradient(to right, #071017 50%, rgba(0, 0, 0, 0) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .3s ease-out;
}
.slide-btn:hover, .slide-btn-alt:hover {
  background-position: left bottom;
}
</style>