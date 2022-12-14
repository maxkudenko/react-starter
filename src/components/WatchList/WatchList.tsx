import { Box } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { useQuery } from 'react-query'

import { selectedRetailerIdAtom } from 'atoms/retailersAtoms'
import WatchCard from 'components/WatchCard'
import { Watch } from 'types/watchTypes'

const WatchList = () => {
  const [retailerId] = useAtom(selectedRetailerIdAtom)

  const { data: watches } = useQuery(['watches', retailerId], async () => {
    const response = await fetch(`http://localhost:3001/watches?retailer_id=${retailerId}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })

  return (
    <Box w='70%' p='5'>
      {watches && watches.map((watch: Watch) => <WatchCard watch={watch} key={watch.id} />)}
    </Box>
  )
}

export default WatchList
