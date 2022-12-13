import { atom } from 'jotai'

import { Retailer } from 'types/retailersTypes'

export const selectedRetailerIdAtom = atom<number | null>(null)

export const retailersAtom = atom<Retailer[]>([
  { name: 'Retailer 1', id: 1 },
  { name: 'Retailer 2', id: 2 },
  { name: 'Retailer 3', id: 3 }
])
