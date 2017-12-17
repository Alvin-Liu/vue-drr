export { default } from './components/vue-drr'

import VueDrr from './components/vue-drr'

function plugin (Vue) {
  Vue.component('vue-drr', VueDrr)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'

// Export all components too
export {
  VueDrr,
  version
}
