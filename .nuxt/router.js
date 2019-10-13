import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3c992309 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _7c490a58 = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _a331849e = () => interopDefault(import('../pages/2019/code-ethics/index.vue' /* webpackChunkName: "pages/2019/code-ethics/index" */))
const _30663357 = () => interopDefault(import('../pages/2019/exploring-cpp/index.vue' /* webpackChunkName: "pages/2019/exploring-cpp/index" */))
const _624678f1 = () => interopDefault(import('../pages/2019/intro-to-chmod/index.vue' /* webpackChunkName: "pages/2019/intro-to-chmod/index" */))
const _191bcf32 = () => interopDefault(import('../pages/2019/why-arch-linux/index.vue' /* webpackChunkName: "pages/2019/why-arch-linux/index" */))
const _27c3ec0a = () => interopDefault(import('../pages/about/instantpost/index.vue' /* webpackChunkName: "pages/about/instantpost/index" */))
const _d984586a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3c992309,
    name: "about"
  }, {
    path: "/projects",
    component: _7c490a58,
    name: "projects"
  }, {
    path: "/2019/code-ethics",
    component: _a331849e,
    name: "2019-code-ethics"
  }, {
    path: "/2019/exploring-cpp",
    component: _30663357,
    name: "2019-exploring-cpp"
  }, {
    path: "/2019/intro-to-chmod",
    component: _624678f1,
    name: "2019-intro-to-chmod"
  }, {
    path: "/2019/why-arch-linux",
    component: _191bcf32,
    name: "2019-why-arch-linux"
  }, {
    path: "/about/instantpost",
    component: _27c3ec0a,
    name: "about-instantpost"
  }, {
    path: "/",
    component: _d984586a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
