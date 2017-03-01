import Vue from 'vue'
import Router from 'vue-router'
import BookPage from '@/components/pages/BookPage'
import BookList from '@/components/parts/BookList'
import RentalList from '@/components/parts/RentalList'
import UserManagementPage from '@/components/pages/UserManagementPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/book/booklist'
    },
    {
      path: '/system/user',
      name: UserManagementPage,
      component: UserManagementPage
    },
    {
      path: '/book',
      name: 'BookPage',
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
