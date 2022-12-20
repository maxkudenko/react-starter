import { Box, Flex, Text } from '@chakra-ui/react'
import { useAtomValue } from 'jotai'

import { selectedRetailerIdAtom } from 'atoms/retailerAtoms'
import { Retailer } from 'types/retailerTypes'

interface RetailerProps {
  retailer: Retailer
  onCardClick: (retailerId: string) => void
}

const RetailerCard = (props: RetailerProps) => {
  const { retailer, onCardClick } = props
  const selectedRetailerId = useAtomValue(selectedRetailerIdAtom)

  const handleCardClick = () => {
    onCardClick(retailer.id)
  }

  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      w={'100%'}
      p={8}
      m={1}
      border={'1px'}
      borderColor={'gray.200'}
      onClick={handleCardClick}
      bgColor={selectedRetailerId === retailer.id ? 'gray.100' : 'white'}
    >
      {retailer.name}
      <Box>
        <Text fontSize={'2xs'} color={'gray.600'}>
          {retailer.watch_count} watches <br />
          {retailer.country}
        </Text>
      </Box>
    </Flex>
  )
}

export default RetailerCard
