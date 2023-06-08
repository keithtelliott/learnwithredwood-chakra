import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Link,
  useDisclosure,
} from '@chakra-ui/react'

import { Icon } from '../Icon/Icon'
import { Nav } from '../Nav'

interface HomeHeaderProps {
  // Props
}

const HomeHeader = ({}: HomeHeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex justify="space-between">
        <Link href="/">
          <Image src="/images/logo.svg" alt="Rotten Ratings" />
        </Link>
        <Button
          colorScheme="blackAlpha"
          // onClick={handleClick}
          onClick={onOpen}
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
      <Drawer onClose={onClose} isOpen={isOpen} size={'full'}>
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerCloseButton /> */}
          {/* <DrawerHeader>{` drawer contents header`}</DrawerHeader> */}
          <DrawerBody>
            <Nav handleClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export { HomeHeader, HomeHeaderProps }
