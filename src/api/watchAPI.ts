import { request } from './baseAPI'

export function fetchWatches(retailerId: string) {
  return request({ path: '/watches', queryParams: { retailer_id: retailerId } })
}
