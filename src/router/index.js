import Vue from 'vue'
import Router from 'vue-router'
import BookPage from '@/components/pages/BookPage'
import BookList from '@/components/parts/BookList'
import RentalList from '@/components/parts/RentalList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookPage',
      redirect: '/booklist',
      component: BookPage,
      children: [
        {
          path: 'rentallist',
          component: RentalList
        },
        {
          path: 'booklist',
          component: BookList
        }
      ]
    }
  ]
})
