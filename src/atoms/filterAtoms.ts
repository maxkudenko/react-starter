import { atom } from 'jotai'

export const filtersAtom = atom<{ searchFilter: string }>({
  searchFilter: ''
})
