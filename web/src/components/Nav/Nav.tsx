import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react'

import { Icon } from '../Icon/Icon'
import { Poster } from '../Poster/Poster'
import { Ruler } from '../Ruler/Ruler'
import { slides as data } from '../Slider/Slider.mocks'

interface NavProps {
  handleClose: () => void
  // Props
}

const Nav = ({ handleClose }: NavProps) => {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"`}
      gridTemplateRows={'50px 1fr'}
      gridTemplateColumns={'1fr 3fr'}
      height="100vh"
      width="100vw"
      gap="1"
      background={'almostBlack'}
      backgroundImage={`url('/images/flowers.png')`}
      backgroundPosition="left bottom"
      backgroundRepeat="no-repeat"
    >
      <GridItem pl="2" area={'header'}>
        <Flex justifyContent="flex-end">
          <Button
            onClick={handleClose}
            colorScheme="blackAlpha"
            fontWeight="medium"
            textTransform="uppercase"
            _hover={{ color: 'lemonLime' }}
            rightIcon={<Icon name="Close" size={48} />}
          >
            Close
          </Button>
        </Flex>
        <Ruler />
      </GridItem>
      <GridItem pl="2" area={'nav'}>
        <Box
          // as="nav"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          // h="full"
          h="500px"
        >
          <Link variant={'navStyle'} href="#">
            Home
          </Link>
          <Link variant={'navStyle'} href="#">
            Play Lists
          </Link>
          <Link variant={'navStyle'} href="#">
            Watch List
          </Link>
          <Spacer />
          <Link variant={'navStyle'} href="#">
            Settings
          </Link>
          <Link variant={'navStyle'} href="#">
            Log Out
          </Link>
        </Box>
      </GridItem>
      <GridItem pl="2" area={'main'}>
        <Box>
          <Text mb={2} color="white" fontSize="lg" fontWeight="bold">
            Recently Viewed
          </Text>
          <Flex flexWrap="wrap" gap={5}>
            {data &&
              data.map((item, index) => (
                <Poster
                  key={index}
                  size="small"
                  src={item.src}
                  alt={item.alt}
                />
              ))}
          </Flex>
          <Ruler />
        </Box>
      </GridItem>
    </Grid>
  )
}

export { Nav, NavProps }
