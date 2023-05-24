import { useState } from 'react'

import { IconButton as ChakraIconButton } from '@chakra-ui/react'

import { Icon, type IconProps } from '../Icon/Icon'

interface Props extends IconProps {
  toggled?: boolean
  handleClick: () => void
}

const IconButton = ({
  handleClick,
  name,
  size = 24,
  toggled = false,
}: Props) => {
  const [isToggled, setIsToggled] = useState<boolean>(toggled)

  const toggleClick = () => {
    setIsToggled((prevValue) => !prevValue)
    handleClick()
  }

  return (
    <>
      <ChakraIconButton
        data-testid={isToggled ? `${name}Toggled` : `${name}NotToggled`}
        variant={isToggled ? 'isToggled' : 'isNotToggled'}
        onClick={toggleClick}
        aria-label={name}
        isRound={true}
        icon={<Icon name={name} size={size} />}
      />
    </>
  )
}

export { IconButton, Props as IconButtonProps }
