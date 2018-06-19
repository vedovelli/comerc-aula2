
import { bus } from './event-bus'
import { http } from './http'

export default function install (Vue) {
  Object.defineProperties(Vue.prototype, {
    '$bus': {
      get () {
        return bus
      }
    },
    '$http': {
      get () {
        return http
      }
    }
  })
}
