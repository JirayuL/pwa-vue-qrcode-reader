import Vue from 'vue'
import Router from 'vue-router'
import qrReader from '@/components/qrReader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'qrReader',
      component: qrReader
    }
  ]
})
