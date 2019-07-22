import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _3fcb4d8c = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _37ddb2c8 = () => interopDefault(import('../pages/Blog.vue' /* webpackChunkName: "pages/Blog" */))
const _691ef53c = () => interopDefault(import('../pages/2019/intro-to-chmod/index.vue' /* webpackChunkName: "pages/2019/intro-to-chmod/index" */))
const _5c9c24d8 = () => interopDefault(import('../pages/2019/why-arch-linux/index.vue' /* webpackChunkName: "pages/2019/why-arch-linux/index" */))
const _bedb02a8 = () => interopDefault(import('../pages/about/instantpost/index.vue' /* webpackChunkName: "pages/about/instantpost/index" */))
const _36a87a88 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _3fcb4d8c,
      name: "about"
    }, {
      path: "/Blog",
      component: _37ddb2c8,
      name: "Blog"
    }, {
      path: "/2019/intro-to-chmod",
      component: _691ef53c,
      name: "2019-intro-to-chmod"
    }, {
      path: "/2019/why-arch-linux",
      component: _5c9c24d8,
      name: "2019-why-arch-linux"
    }, {
      path: "/about/instantpost",
      component: _bedb02a8,
      name: "about-instantpost"
    }, {
      path: "/",
      component: _36a87a88,
      name: "index"
    }],

    fallback: false
  })
}
