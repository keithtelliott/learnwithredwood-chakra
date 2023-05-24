import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { Box, Flex } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

import { IconButton } from '../../IconButton'
import { Percentage } from '../../Percentage'

interface SlideProps {
  image: string
  percentage: number
  title: string
}

const ChakraMotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

const Slide = ({ image, percentage, title }: SlideProps) => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1.5, staggerChildren: 0.2, delayChildren: 0 },
    },
  }

  return (
    <Box
      data-testid="slide"
      minH="425px"
      w="full"
      rounded="xl"
      bgImage={`linear-gradient(90deg, #000000 6.62%, rgba(0, 0, 0, 0) 71.78%), url(${image})`}
      bgSize="cover"
      bgPosition="center center"
      pl="12"
      pt="12"
    >
      <Flex minH="350px" flexDir="column" justify="space-between">
        <ChakraMotionBox
          variants={variants}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 2, type: 'spring' }}
          // as={Heading} // KTE, 5/21/2023:  I found that I cannout use the "as" prop with ChakraMotionBox
          mb={4}
          maxW="500px"
          fontFamily={'sansSerif'}
          fontSize="5xl"
          fontWeight="bold"
          lineHeight={1.0}
          color="white"
        >
          {title}
        </ChakraMotionBox>

        <ChakraMotionBox
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Flex mb="1" gap="3">
            <ChakraMotionBox variants={variants} transition={{ duration: 1 }}>
              <IconButton handleClick={() => {}} name="bookmark" />
            </ChakraMotionBox>
            <ChakraMotionBox variants={variants} transition={{ duration: 1 }}>
              <IconButton handleClick={() => {}} name="watchLater" />
            </ChakraMotionBox>
            <ChakraMotionBox variants={variants} transition={{ duration: 1 }}>
              <IconButton handleClick={() => {}} name="addList" />
            </ChakraMotionBox>
          </Flex>
        </ChakraMotionBox>
        <ChakraMotionBox
          variants={variants}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 2, type: 'spring', delay: 0.6 }}
        >
          <Percentage percentage={percentage} showRing={false} size="medium" />
        </ChakraMotionBox>
      </Flex>
    </Box>
  )
}

export { Slide, SlideProps }
