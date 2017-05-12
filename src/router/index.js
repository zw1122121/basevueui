import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import User from '@/components/User'
import BasicForm from '@/components/BasicForm'
import BasicBadge from '@/components/BasicBadge'
import BasicPagination from '@/components/BasicPagination'
import BasicTooltip from '@/components/BasicTooltip'
import BasicDialog from '@/components/BasicDialog'
import BasicSlider from '@/components/BasicSlider'
import BasicCarousel from '@/components/BasicCarousel'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },{
      path : '/user',
      component: User
    },{
      path: '/basic-form',
      component: BasicForm
    },{
      path: '/basic-badge',
      component: BasicBadge
    },{
      path: '/basic-pagination',
      component: BasicPagination
    },{
      path: '/basic-tooltip',
      component: BasicTooltip
    },{
      path: '/basic-dialog',
      component: BasicDialog
    },{
      path: '/basic-slider',
      component: BasicSlider
    },{
      path: '/basic-carousel',
      component: BasicCarousel
    }
  ]
})
