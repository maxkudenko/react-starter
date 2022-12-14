import { Box, ChakraProvider, Flex, theme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Header from 'components/Header'
import RetailersList from 'components/RetailersList'
import WatchList from 'components/WatchList'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Box minH='100vh'>
          <Header />
          <Flex>
            <RetailersList />
            <WatchList />
          </Flex>
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
