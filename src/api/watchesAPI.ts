import { request } from './api'

export function fetchWatches(retailerId: string) {
  return request({
    path: '/watches',
    queryParams: { retailer_id: retailerId },
    delay: 1000
  })
}
