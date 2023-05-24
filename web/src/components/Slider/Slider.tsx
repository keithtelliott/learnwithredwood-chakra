import { Box, Flex, Heading, Link, useTheme } from '@chakra-ui/react'

import { Poster, type PosterProps } from '../Poster/Poster'

interface SliderProps {
  label: string
  slides: PosterProps[]
  slideSize?: 'small' | 'medium' | 'large'
  viewAllLink?: string
}

const Slider = ({ label, slides, slideSize, viewAllLink }: SliderProps) => {
  const theme = useTheme()
  return (
    <>
      <Flex
        maxWidth={theme.maxWidth.pageWidth} // "1300px"
        mx="auto"
        alignItems="flex-end"
        justifyContent="space-between"
        pb="2"
      >
        <Heading>{label}</Heading>
        {viewAllLink && <Link href={viewAllLink}>View All</Link>}
      </Flex>
      <Box
        display="flex"
        overflowX="scroll"
        whiteSpace="nowrap"
        pl={{ base: '2', md: 'calc((100% - 1300px) / 2)' }}
      >
        {slides &&
          slides.map((slide, index: number) => (
            <Box key={index} mr="5" flexShrink={0}>
              <Poster
                alt={slide.alt}
                src={slide.src}
                subHeading={slide.subHeading}
                size={slideSize}
              />
            </Box>
          ))}
      </Box>
    </>
  )
}

export { Slider, SliderProps }
