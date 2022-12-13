import { Box } from '@chakra-ui/react'
import { useAtom, useSetAtom } from 'jotai'

import { retailersAtom, selectedRetailerIdAtom } from 'atoms/retailersAtoms'
import Retailer from 'components/RetailerCard'

const RetailersList = () => {
  const setRetailerId = useSetAtom(selectedRetailerIdAtom)
  const [retailers] = useAtom(retailersAtom)

  return (
    <Box w='30%' p='5' cursor='pointer'>
      {retailers.map((retailer) => (
        <Retailer retailer={retailer} key={retailer.id} onCardClick={setRetailerId} />
      ))}
    </Box>
  )
}

export default RetailersList
