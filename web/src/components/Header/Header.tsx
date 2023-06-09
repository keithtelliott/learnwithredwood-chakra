import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Link,
  useDisclosure,
  useTheme,
} from '@chakra-ui/react'

import { Icon } from '../Icon/Icon'
import { Nav } from '../Nav'

interface HeaderProps {
  // Props
}

const Header = ({}: HeaderProps) => {
  const theme = useTheme()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    // <Flex
    //   as="header"
    //   display="flex"
    //   justify="space-between"
    //   background={'black'}
    //   mx={4}
    //   my={2}
    //   padding={2}
    // >
    <>
      <Box
        pos="fixed"
        insetX="0"
        top="0"
        w="full"
        bg="eerieBlack"
        h="5.25rem"
        maxW={theme.maxWidth.pageWidth} // "1280px"
        mx="auto"
        px={{ base: 4, xl: 0 }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/">
          <Image src="/images/logo--horizontal.svg" alt="Rotten Ratings" />
        </Link>
        <Button
          onClick={onOpen}
          colorScheme="blackAlpha"
          rightIcon={<Icon name="hamburger" />}
          // mx={'auto'}
          // mt="0"
          // mb="auto"
          display="flex"
          alignItems="center"
          gap="0.5rem"
          _hover={{ color: 'lemonLime' }}
        >
          MENU
        </Button>
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose} size="full">
        {/* <DrawerOverlay />
          // KTE, 6/9/2023:  DrawerOverlay greys-out the screen not covered by the drawer.
          //   It is not needed here because the drawer is full-screen.
        */}
        <DrawerContent>
          <DrawerBody>
            <Nav handleClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export { Header, HeaderProps }
