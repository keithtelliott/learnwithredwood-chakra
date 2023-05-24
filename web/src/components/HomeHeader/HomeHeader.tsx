import { Box, Button, Flex, Image, Link } from '@chakra-ui/react'

import { Icon } from '../Icon/Icon'

interface HomeHeaderProps {
  // Props
}

const HomeHeader = ({}: HomeHeaderProps) => {
  return (
    <Flex justify="space-between">
      <Link href="/">
        <Image src="/images/logo.svg" alt="Rotten Ratings" />
      </Link>
      <Button
        rightIcon={<Icon name="hamburger" />}
        mt="0"
        mb="auto"
        // display="flex"
        // alignItems="center"
        // gap="0.5rem"
        _hover={{ color: 'lemonLime' }}
      >
        MENU
      </Button>
    </Flex>
  )
}

export { HomeHeader, HomeHeaderProps }
