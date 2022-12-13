import { Box, ChakraProvider, Flex, theme } from '@chakra-ui/react'

import Header from 'components/Header'
import RetailersList from 'components/RetailersList'
import WatchList from 'components/WatchList'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box minH='100vh'>
        <Header />
        <Flex>
          <RetailersList />
          <WatchList />
        </Flex>
      </Box>
    </ChakraProvider>
  )
}
