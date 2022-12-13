import { Box } from '@chakra-ui/react'
import { useAtom } from 'jotai'

import { selectedRetailerIdAtom } from 'atoms/retailersAtoms'

const WatchList = () => {
  const [retailerId] = useAtom(selectedRetailerIdAtom)

  return (
    <Box w='70%' p='5'>
      Watch List <br />
      Retailer ID: {retailerId}
    </Box>
  )
}

export default WatchList
