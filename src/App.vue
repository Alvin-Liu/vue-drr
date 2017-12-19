<template>
  <div id="app">
    <div style="height: 500px; width: 500px; margin: 20px; border: 1px solid red; position: relative;">
      <vue-drr 
        :x="x" 
        :y="y" 
        :angle="angle" 
        :w="width" 
        :h="height" 
        :parent="true" 
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
export default {
  name: 'app',
  data: function () {
    return {
      width: 200,
      height: 200,
      x: 50,
      y: 50,
      angle: 30
    }
  },
  methods: {
    handleResizing: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    handleDragging: function (x, y) {
      this.x = x
      this.y = y
    },
    handleRotating: function (angle) {
      this.angle = angle
    }
  }
}
</script>
