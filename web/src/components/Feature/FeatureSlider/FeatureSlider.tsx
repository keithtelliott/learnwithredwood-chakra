import { useState } from 'react'

import { Box, Button, chakra, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'

import { useInterval } from 'src/hooks/useInterval'

import { Slide } from '../Slide'
import { SlideProps } from '../Slide/Slide'

interface FeatureSliderProps {
  features: SlideProps[]
  // Add props here
}

const FeatureSlider = ({ features }: FeatureSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const ChakraMotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  })

  const gotoSlide = (slideNumber: number): void => {
    setCurrentSlide(slideNumber)
  }

  const nextSlide = () => {
    const totalSlides = features.length - 1
    if (currentSlide >= totalSlides) setCurrentSlide(0)
    else setCurrentSlide((prevValue) => prevValue + 1)
  }

  useInterval(() => {
    nextSlide()
  }, 10000)

  if (features)
    return (
      <>
        <Box mb={3}>
          <ChakraMotionBox
            key={`slide-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: '5', type: 'spring' }}
          >
            <Slide {...features[currentSlide]} />
          </ChakraMotionBox>
        </Box>
        <Box float="right" display="flex" gap={3}>
          {features.map((feature, index: number) => (
            <Button
              data-testid={`slideNav-${index}`}
              // data-testid={
              //   currentSlide === index
              //     ? `slideNav-${index}-isCurrentSlide`
              //     : `slideNav-${index}-isNotCurrentSlide`
              // }
              key={index}
              h="2"
              w="16"
              cursor="pointer"
              bg={currentSlide === index ? 'tamarillo' : 'montana'}
              onClick={() => {
                gotoSlide(index)
              }}
            />
          ))}
        </Box>
      </>
    )
  else return null
}

export { FeatureSlider, FeatureSliderProps }
