import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from '../components/Hello'

const You = () => import(/* webpackChunkName: "you" */ '../components/You')

Vue.use(VueRouter)

const routes = [{
  path: '/hello',
  component: Hello
}, {
  path: '/you',
  component: You
}]

export default new VueRouter({
  routes
})
