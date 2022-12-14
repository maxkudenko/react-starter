import { Box } from '@chakra-ui/react'

import { Watch } from 'types/watchTypes'

interface RetailerProps {
  watch: Watch
}

const WatchCard = (props: RetailerProps) => {
  return (
    <Box w={'100%'} p={8} m={1} border='1px' borderColor='gray.200'>
      {props.watch.model_name}
    </Box>
  )
}

export default WatchCard
