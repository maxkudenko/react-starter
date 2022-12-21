import { Flex, Spinner } from '@chakra-ui/react'
import { useIsFetching } from 'react-query'

const GlobalLoadingIndicator = () => {
  const isFetching = useIsFetching()

  if (!isFetching) return null

  return (
    <Flex
      w="100vw"
      h="100vh"
      pos="absolute"
      top={0}
      left={0}
      zIndex={1}
      bgColor="rgba(0, 0, 0, 0.65)"
      transition="0.5s"
      overflowX="hidden"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner size="xl" color="white" />
    </Flex>
  )
}

export default GlobalLoadingIndicator
