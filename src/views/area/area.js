import Vue from './node_modules/vue'
import area from './area.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(area)
}).$mount('#app')
