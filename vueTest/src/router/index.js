import Vue from 'vue'
import Router from 'vue-router'
import addListItem from '@/components/addListItem'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import list from '@/components/list'
import {MdLayout, MdApp, MdToolbar, MdButton, MdIcon, MdContent, MdField, MdList, MdDialog, MdLayout} from 'vue-material/dist/components'  
Vue.use(Router)
Vue.use(MdApp)
Vue.use(MdToolbar)
Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdContent)
Vue.use(MdField)
Vue.use(MdList)
Vue.use(MdDialog)
Vue.use(MdLayout)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'addListItem',
      component: addListItem
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
