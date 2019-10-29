import Vue from 'vue'
// import Foo from './source.vue'
import Bar from './normal.vue'

new Vue({
  el: '#app',
  // render: h => h(Foo)
  render: h => h(Bar)
})
