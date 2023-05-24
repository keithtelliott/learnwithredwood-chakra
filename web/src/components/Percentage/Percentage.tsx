import { AbsoluteCenter, Box, HStack, Text } from '@chakra-ui/react'

import { PercentSign } from './PercentSign'

interface Props {
  percentage: number
  showRing?: boolean
  size?: 'small' | 'medium' | 'large' | 'xlarge'
}

const Percentage = ({ percentage, showRing = true, size = 'small' }: Props) => {
  /**
   * KTE, 4/26/2023:  This Chakra implementation works, but I'm sure there's a more-polished way to do it.
   * However, I'm calling it good for now...
   */

  const ringSizes = {
    small: 110,
    medium: 300,
    large: 0,
    xlarge: 0,
  }

  return (
    <Box
      position="relative"
      width={showRing && ringSizes[size] > 0 ? ringSizes[size] + 'px' : '100%'}
      height={showRing && ringSizes[size] > 0 ? ringSizes[size] + 'px' : '100%'}
      color={determineColor(percentage)}
    >
      {showRing && ringSizes[size] > 0 ? (
        <>
          <svg
            data-testid="ring"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/svg"
            width={ringSizes[size]}
            height={ringSizes[size]}
            viewBox={'0 0 230 230'}
          >
            <circle
              cx="115"
              cy="115"
              r="100"
              stroke="#393939"
              strokeWidth={8}
              fill="black"
            />
            <circle
              data-testid="percentageRing"
              cx="115"
              cy="115"
              r="100"
              strokeWidth={8}
              fill="none"
              // className="stroke-current" // KTE, 5/1/2023: This works if Tailwind is installed, but I'll use the following stroke color instead, which jives with Chakra
              stroke={determineColor(percentage)}
              strokeDasharray={`calc(628.32 * ${percentage} / 100) 628.32`}
              transform="rotate(-90) translate(-230)"
            />
          </svg>
          <AbsoluteCenter>
            <NumberAndSymbol
              percentage={percentage}
              size={size}
              color={determineColor(percentage)}
            />
          </AbsoluteCenter>
        </>
      ) : (
        <Box>
          <NumberAndSymbol
            percentage={percentage}
            size={size}
            color={determineColor(percentage)}
          />
        </Box>
      )}
    </Box>
  )
}

const determineColor = (percentage: number) => {
  if (percentage < 50) {
    return 'red'
  } else if (50 <= percentage && percentage < 70) {
    // return 'oriolesOrange'
    return 'orange' // Go-Do, KTE, 5/21/2023:  Work through Storybook issues with custom colors.  My hunch is that custom colors may work in the app, but at the moment they are no working in Storybook.
  } else {
    return 'green'
  }
}

const determineFontSize = (size: Props['size']) => {
  if (size === 'small') {
    return '5xl'
  } else if (size === 'medium') {
    return '9.25rem'
  } else if (size === 'large') {
    return '10rem'
  } else {
    return '16rem'
  }
}

const NumberAndSymbol = ({
  percentage,
  size,
  color,
}: {
  percentage: number
  size: Props['size']
  color: string
}) => (
  <HStack>
    <Text
      fontSize={determineFontSize(size)}
      fontFamily="modern"
    >{`${percentage}`}</Text>
    <Box position="relative" top="-3">
      <PercentSign size={size} color={color} />
    </Box>
  </HStack>
)

export { Percentage, Props as PercentageProps }
