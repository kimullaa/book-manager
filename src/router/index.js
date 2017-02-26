import Vue from 'vue'
import Router from 'vue-router'
import BookPage from '@/components/pages/BookPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookPage',
      component: BookPage
    }
  ]
})
