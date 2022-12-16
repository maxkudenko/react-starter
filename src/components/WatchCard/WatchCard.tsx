import { Box, Flex, Text } from '@chakra-ui/react'

import { Watch } from 'types/watchTypes'

interface RetailerProps {
  watch: Watch
}

const WatchCard = (props: RetailerProps) => {
  const { watch } = props
  return (
    <Flex
      alignItems={'center'}
      w={'100%'}
      p={8}
      m={1}
      border='1px'
      borderColor='gray.200'
    >
      {watch.model_name}
      <Box ml={4}>
        <Text fontSize={'2xs'} color={'gray.600'}>
          case material: {watch.case_material} <br />
          case diametr: {watch.case_diametr}
        </Text>
      </Box>
    </Flex>
  )
}

export default WatchCard
