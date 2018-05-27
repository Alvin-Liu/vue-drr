<template>
  <div id="app">
    <div class="container">
      <vue-drr 
        :x.sync="x"
        :y.sync="y"
        :angle.sync="angle"
        :active.sync="active"
        :w.sync="width"
        :h.sync="height"
        parent
        @dragging="handleDragging"
        @resizing="handleResizing"
        @rotating="handleRotating"
      >
        <p>x: {{ x }}, y: {{ y }}, angle: {{ angle }}, width: {{ width }}, height: {{ height }}</p>
      </vue-drr>
    </div>
  </div>
</template>

<script>
import vueDrr from './index.js'
export default {
  name: 'app',
  data: function () {
    return {
      active: true,
      width: 200,
      height: 200,
      x: 50,
      y: 50,
      angle: 30
    }
  },
  methods: {
    handleResizing: function (x, y, width, height) {
      console.log('x:' + x, 'y:' + y, 'w:' + width, 'h:' + height)
    },
    handleDragging: function (x, y) {
      console.log('x:' + x, 'y:' + y)
    },
    handleRotating: function (angle) {
      console.log('rotate:' + angle)
    }
  },
  components: {
    vueDrr
  }
}
</script>
<style lang="scss">
  .container {
    position: absolute;
    top: 30px;
    left: 60px;
    width: 500px; 
    height: 500px; 
    margin: 20px; 
    border: 1px solid red; 
  }
</style>
