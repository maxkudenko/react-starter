import { Watch } from 'types/watchTypes'

export const getFilteredWatches = (
  watches: Watch[] | undefined,
  filterBy: string
) => {
  if (!watches) {
    return []
  }

  const filteredWatches = watches.filter((watch) => {
    return watch.model_name
      .toLowerCase()
      .includes(filterBy.trim().toLowerCase())
  })

  return filteredWatches
}
