import { Box, Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box w={'100%'} textAlign='center' bgColor={'gray.100'}>
      <Text as='h1' fontSize={32}>
        Header
      </Text>
    </Box>
  )
}

export default Header
