<template>
  <div id="app">
    <div style="height: 500px; width: 500px; margin: 20px; border: 1px solid red; position: relative;">
      <vue-drr :x="50" :y="50" :angle="30" :w="100" :h="100" :parent="true">
        <p>Component</p>
      </vue-drr>
    </div>
  </div>
</template>

<script>
import VueDrr from './components/vue-drr'

export default {
  name: 'app',
  components: {
    'vue-drr': VueDrr
  }
}
</script>
