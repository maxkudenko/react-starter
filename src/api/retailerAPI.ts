import { request } from './baseAPI'

export function fetchRetailers() {
  return request({ path: '/retailers' })
}
