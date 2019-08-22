import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import RightIndex from '@/components/ContainerMain/rightmeun/index'
import RightMessage from '@/components/ContainerMain/rightmeun/message'
import RightReport from '@/components/ContainerMain/rightmeun/report'
import TestCamera from '@/components/testpoint/camera'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        // eslint-disable-next-line standard/object-curly-even-spacing
        { path: '/index/rightindex', name: 'rightindex', component: RightIndex},
        { path: '/', name: 'rightindex', component: RightIndex },
        // eslint-disable-next-line standard/object-curly-even-spacing
        { path: '/index/rightmessage', name: 'RightMessage', component: RightMessage},
        // eslint-disable-next-line standard/object-curly-even-spacing
        { path: '/index/report', name: 'RightReport', component: RightReport},
        // eslint-disable-next-line standard/object-curly-even-spacing
        { path: '/index/camera', name: 'Camera', component: TestCamera}
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
