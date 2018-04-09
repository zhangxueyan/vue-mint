import Vue from 'vue'
import Router from 'vue-router'
import Loadmore from '@/components/Loadmore'
import Assembly from '@/components/Assembly'
import Lazyload from '@/components/Lazyload'
import Range from '@/components/Range'
import Tabbar from '@/components/Tabbar'
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/'
  },
  {
  	path: '/more',
  	name: 'Loadmore',
  	component: Loadmore
  },
  {
  	path: '/swipe',
  	name: 'Assembly',
  	component: Assembly
  },
  {
    path: '/lazy',
    name: 'Lazyload',
    component: Lazyload
  },
  {
    path: '/range',
    name: 'Range',
    component: Range
  },
  {
    path: '/tabbar',
    name: 'tabbar',
    component: Tabbar
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: Navbar
  },
  {
    path: '/search',
    name: 'search',
    component:Search
  }
  ]
})
