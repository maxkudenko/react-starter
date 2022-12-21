import { request } from './api'

export function fetchRetailers() {
  return request({ path: '/retailers', delay: 1000 })
}
