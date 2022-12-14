import { Box } from '@chakra-ui/react'

import { Retailer } from 'types/retailerTypes'

interface RetailerProps {
  retailer: Retailer
  onCardClick: (retailerId: string) => void
}

const RetailerCard = (props: RetailerProps) => {
  const handleCardClick = () => {
    props.onCardClick(props.retailer.id)
  }

  return (
    <Box w={'100%'} p={8} m={1} border='1px' borderColor='gray.200' onClick={handleCardClick}>
      {props.retailer.name}
    </Box>
  )
}

export default RetailerCard
