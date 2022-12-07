import { ChakraProvider, Box, theme, Grid } from '@chakra-ui/react'

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box textAlign='center' fontSize='xl'>
			<Grid minH='100vh'></Grid>
		</Box>
	</ChakraProvider>
)
