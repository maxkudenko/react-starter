import { Box } from '@chakra-ui/react'
import { useSetAtom } from 'jotai'
import { useQuery } from 'react-query'

import { selectedRetailerIdAtom } from 'atoms/retailersAtoms'
import RetailerCard from 'components/RetailerCard'
import { Retailer } from 'types/retailerTypes'

const RetailersList = () => {
  const setSelectedRetailerId = useSetAtom(selectedRetailerIdAtom)

  const { data: retailers } = useQuery<Retailer[]>('retailers', async () => {
    const response = await fetch('http://localhost:3001/retailers')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })

  return (
    <Box w="30%" p="5" cursor="pointer">
      {retailers &&
        retailers.map((retailer) => (
          <RetailerCard
            retailer={retailer}
            key={retailer.id}
            onCardClick={setSelectedRetailerId}
          />
        ))}
    </Box>
  )
}

export default RetailersList
