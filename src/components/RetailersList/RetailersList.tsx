import { Box } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useQuery } from 'react-query'

import { fetchRetailers } from 'api/retailersAPI'
import { selectedRetailerIdAtom } from 'atoms/retailerAtoms'
import RetailerCard from 'components/RetailerCard'
import { Retailer } from 'types/retailerTypes'

const RetailersList = () => {
  const [selectedRetailerId, setSelectedRetailerId] = useAtom(
    selectedRetailerIdAtom
  )

  const { data: retailers } = useQuery<Retailer[]>('retailers', fetchRetailers)

  useEffect(() => {
    if (retailers && !selectedRetailerId) {
      setSelectedRetailerId(retailers?.[0]?.id || '')
    }
  }, [retailers, selectedRetailerId])

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
