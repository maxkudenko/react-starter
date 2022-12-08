import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign='center' fontSize='xl'>
        <Grid minH='100vh'></Grid>
      </Box>
    </ChakraProvider>
  )
}
