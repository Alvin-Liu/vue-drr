import VueDrr from './vue-drr.vue'

const vuedrr = {
  install(Vue, options) {
    Vue.component(VueDrr.name, VueDrr)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vuedrr);
}

export default vuedrr
