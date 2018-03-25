
<h1 align="center">VueDRR</h1>

> 一个可以拖动、拉伸、旋转的Vue2 组件,基于 [vue-draggable-resizable](https://github.com/mauricius/vue-draggable-resizable "vue-draggable-resizable")，并优化了部分细节，增加了旋转

中文 | [ENGLISH](./README-en.md)

## 目录

* [Demo](#demo)
* [安装和基本用法](#安装和基本用法)
  * [属性](#属性)
  * [方法](#方法)
* [License](#license)

### Demo

[Demo](https://alvin-liu.github.io/vue-drr/example/index.html)

---

## 安装和基本用法

```bash
$ npm install --save vue-drr
```


注册组件

```js
import Vue from 'vue'
import VueDrr from 'vue-drr'

Vue.component('vue-drr', VueDrr)
```

简单例子

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

### 属性

#### active
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

定义组件选中状态，状态更新时，属性值同步变化

#### draggable
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

定义组件是否可以拖动

#### resizable
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

定义组件是否可以拉伸

#### rotatable
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

定义组件是否可以旋转

#### w
Type: `Number`<br>
Required: `false`<br>
Default: `200`

定义元素初始宽度

#### h
Type: `Number`<br>
Required: `false`<br>
Default: `200`

定义元素初始高度

#### minw
Type: `Number`<br>
Required: `false`<br>
Default: `50`

定义元素最小宽度

#### minh
Type: `Number`<br>
Required: `false`<br>
Default: `50`

定义元素最小高度

#### angle
Type: `Number`<br>
Required: `false`<br>
Default: `0`

定义元素初始角度

#### x
Type: `Number`<br>
Required: `false`<br>
Default: `0`

定义元素初始水平位置

#### y
Type: `Number`<br>
Required: `false`<br>
Default: `0`

定义元素初始竖直位置

#### handles
Type: `Array`<br>
Required: `false`<br>
Default: `['n', 'e', 's', 'w', 'nw', 'ne', 'se', 'sw']`

#### axis
Type: `String`<br>
Required: `false`<br>
Default: `both`

定义元素在水平、竖直，或者两个方向上拖动

#### grid
Type: `Array`<br>
Required: `false`<br>
Default: `[1,1]`

定义元素拖动网格

#### parent
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

限制元素的移动和维度

---

### 方法

#### activated

Required: `false`<br>
参数: `-`

组件上按下鼠标触发

#### deactivated

Required: `false`<br>
参数: `-`

组件外按下鼠标触发

#### resizing

Required: `false`<br>
参数:
* `left` 水平方向位置
* `top` 竖直方向位置
* `width` 元素宽度
* `height` 元素高度

组件拉伸时触发

#### resizestop

Required: `false`<br>
参数:
* `left` 水平方向位置
* `top` 竖直方向位置
* `width` 元素宽度
* `height` 元素高度

组件拉伸停止时触发

#### dragging

Required: `false`<br>
参数:
* `left` 水平方向位置
* `top` 竖直方向位置

组件拖动时触发

#### dragstop

Required: `false`<br>
参数:
* `left` 水平方向位置
* `top` 竖直方向位置

组件拖动停止时触发

#### rotating

Required: `false`<br>
参数:
* `angle` 旋转角度

组件旋转时触发

#### rotatestop

Required: `false`<br>
参数:
* `angle` 旋转角度

组件旋转停止时触发

## License

[MIT license](LICENSE)
