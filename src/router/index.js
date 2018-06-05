import Vue from 'vue'
import Router from 'vue-router'
import QrReader from '@/components/QrReader'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/qr-scanner',
      name: 'qrReader',
      component: QrReader
    }
  ]
})
