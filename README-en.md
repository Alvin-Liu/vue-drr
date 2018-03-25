
<h1 align="center">VueDRR</h1>

> A Vue2 component for draggable, resizable, rotateable elements.Based on and offering all features of [vue-draggable-resizable](https://github.com/mauricius/vue-draggable-resizable "vue-draggable-resizable")

ENGLISH | [中文](./README.md)

## Table of Contents

* [Demo](#demo)
* [Install and basic usage](#install-and-basic-usage)
  * [Props](#props)
  * [Events](#events)
* [License](#license)

### Demo

[Demo](https://alvin-liu.github.io/vue-drr/example/index.html)

---

## Install and basic usage

```bash
$ npm install --save vue-drr
```


Register the component

```js
import Vue from 'vue'
import VueDrr from 'vue-drr'

Vue.component('vue-drr', VueDrr)
```

You may now use the component in your markup

```vue
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
```

### Props

#### active
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

Determines if the component should be active or not. The prop reacts to changes and also can be used with the `sync`[modifier](https://vuejs.org/v2/guide/components.html#sync-Modifier) to keep the state in sync with the parent.

#### draggable
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

Defines it the component should be draggable or not.

#### resizable
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

Defines it the component should be resizable or not.

#### rotatable
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

Defines it the component should be rotatable or not.

#### w
Type: `Number`<br>
Required: `false`<br>
Default: `200`

Define the initial width of the element.

#### h
Type: `Number`<br>
Required: `false`<br>
Default: `200`

Define the initial height of the element.

#### minw
Type: `Number`<br>
Required: `false`<br>
Default: `50`

Define the minimal width of the element.

#### minh
Type: `Number`<br>
Required: `false`<br>
Default: `50`

Define the minimal height of the element.

#### angle
Type: `Number`<br>
Required: `false`<br>
Default: `0`

Define the initial angle of the element

#### x
Type: `Number`<br>
Required: `false`<br>
Default: `0`

Define the initial x position of the element.

#### y
Type: `Number`<br>
Required: `false`<br>
Default: `0`

Define the initial y position of the element.

#### handles
Type: `Array`<br>
Required: `false`<br>
Default: `['n', 'e', 's', 'w', 'nw', 'ne', 'se', 'sw']`

#### axis
Type: `String`<br>
Required: `false`<br>
Default: `both`

Define the axis on which the element is draggable. Available values are `x`, `y` or `both`.

#### grid
Type: `Array`<br>
Required: `false`<br>
Default: `[1,1]`

Define the grid on which the element is snapped.

#### parent
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

Restricts the movement and the dimensions of the element to the parent.

---

### Events

#### activated

Required: `false`<br>
Parameters: `-`

Called whenever the component gets clicked, in order to show handles.

#### deactivated

Required: `false`<br>
Parameters: `-`

Called whenever the user clicks anywhere outside the component, in order to deactivate it.

#### resizing

Required: `false`<br>
Parameters:
* `left` the X position of the element
* `top` the Y position of the element
* `width` the width of the element
* `height` the height of the element

Called whenever the component gets resized.

#### resizestop

Required: `false`<br>
Parameters:
* `left` the X position of the element
* `top` the Y position of the element
* `width` the width of the element
* `height` the height of the element

Called whenever the component stops getting resized.

#### dragging

Required: `false`<br>
Parameters:
* `left` the X position of the element
* `top` the Y position of the element

Called whenever the component gets dragged.

#### dragstop

Required: `false`<br>
Parameters:
* `left` the X position of the element
* `top` the Y position of the element

Called whenever the component stops getting dragged.

#### rotating

Required: `false`<br>
Parameters:
* `angle` the angle of the element

Called whenever the component gets rotated.

#### rotatestop

Required: `false`<br>
Parameters:
* `angle` the angle of the element

Called whenever the component stops getting rotated.

## License

[MIT license](LICENSE)
