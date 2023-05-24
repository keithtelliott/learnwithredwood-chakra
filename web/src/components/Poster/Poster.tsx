import { Box, Heading, Image, Text } from '@chakra-ui/react'

type PosterProps = {
  alt: string
  heading?: string
  size?: 'small' | 'medium' | 'large'
  src: string
  subHeading?: string
}

const Poster = ({
  alt,
  heading,
  size = 'medium',
  src,
  subHeading,
}: PosterProps) => {
  // const htmlSize = size === 'lg' ? '440px' : size === 'md' ? '340px' : '240px'

  return (
    <Box>
      <Image
        src={src}
        alt={alt}
        borderRadius="2xl"
        h={size === 'small' ? '60' : size === 'medium' ? '310px' : '460px'}
        w={size === 'small' ? '40' : size === 'medium' ? '224px' : '300px'}
        // htmlHeight={`
        // ${size === 'small' && '240'}
        // ${size === 'medium' && '310'}
        // ${size === 'large' && '460'}
        // `}
        // htmlWidth={`
        // ${size === 'small' && '160'}
        // ${size === 'medium' && '224'}
        // ${size === 'large' && '300'}
        // `}
        objectFit="cover"
        shadow={'dark-lg'}
        marginBottom={3}
      />
      {heading && (
        <Heading size={'md'} paddingLeft={5}>
          {heading}
        </Heading>
      )}
      {subHeading && (
        <Text color="brand.100" paddingLeft={5}>
          {subHeading}
        </Text>
      )}
    </Box>
  )
}

export { Poster, PosterProps }
