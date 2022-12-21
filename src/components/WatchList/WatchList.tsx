import { Box, Text } from '@chakra-ui/react'
import { useAtom, useAtomValue } from 'jotai'
import { useMemo } from 'react'
import { useQuery } from 'react-query'

import { fetchWatches } from 'api/watchesAPI'
import { filtersAtom } from 'atoms/filterAtoms'
import { selectedRetailerIdAtom } from 'atoms/retailerAtoms'
import Input from 'components/Input'
import WatchCard from 'components/WatchCard'
import { Watch } from 'types/watchTypes'
import { getFilteredWatches } from 'utils/filtersUtils'

const WatchList = () => {
  const retailerId = useAtomValue(selectedRetailerIdAtom)
  const [filters, setFilters] = useAtom(filtersAtom)

  const { data: watches } = useQuery<Watch[]>(
    ['watches', retailerId],
    () => fetchWatches(retailerId),
    {
      enabled: !!retailerId
    }
  )

  const filteredWatches = useMemo(
    () => getFilteredWatches(watches, filters.searchFilter),
    [watches, filters.searchFilter]
  )

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      searchFilter: event.target.value
    })
  }

  const hasFilteredWatches = filteredWatches.length >= 1

  if (!watches) return null

  return (
    <Box w="70%" p="5">
      <Input
        placeholder="Filter watches by name"
        size={'sm'}
        onChange={handleInputChange}
        value={filters.searchFilter}
      />
      {!hasFilteredWatches && <Text my={2}>No Results</Text>}
      {hasFilteredWatches &&
        filteredWatches.map((watch) => (
          <WatchCard watch={watch} key={watch.id} />
        ))}
    </Box>
  )
}

export default WatchList
