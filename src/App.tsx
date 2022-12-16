import { Box, ChakraProvider, extendTheme, Flex } from '@chakra-ui/react'
import { useAtomValue } from 'jotai'
import { QueryClient, QueryClientProvider } from 'react-query'

import { selectedRetailerIdAtom } from 'atoms/retailersAtoms'
import Header from 'components/Header'
import RetailersList from 'components/RetailersList'
import WatchList from 'components/WatchList'
import { customTheme } from 'styles/theme'

const queryClient = new QueryClient()

const theme = extendTheme(customTheme)

export const App = () => {
  const selectedretailerId = useAtomValue(selectedRetailerIdAtom)

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Box minH="100vh">
          <Header />
          <Flex>
            <RetailersList />
            {selectedretailerId && <WatchList />}
          </Flex>
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
