import { Box, ChakraProvider, extendTheme, Flex } from '@chakra-ui/react'
import { useAtomValue } from 'jotai'
import { QueryClient, QueryClientProvider } from 'react-query'

import { selectedRetailerIdAtom } from 'atoms/retailerAtoms'
import GlobalLoadingIndicator from 'components/GlobalLoadingIndicator'
import Header from 'components/Header'
import RetailersList from 'components/RetailersList'
import WatchList from 'components/WatchList'
import { customTheme } from 'styles/theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 1000
    }
  }
})

const theme = extendTheme(customTheme)

export const App = () => {
  const selectedretailerId = useAtomValue(selectedRetailerIdAtom)

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Box minH="100vh" pos={'relative'}>
          <Header />
          <Flex>
            <RetailersList />
            {selectedretailerId && <WatchList />}
          </Flex>
          <GlobalLoadingIndicator />
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
