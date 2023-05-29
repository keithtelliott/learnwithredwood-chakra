import { Divider } from '@chakra-ui/react'

interface Props {
  // Add props here
}

const Ruler = ({}: Props) => {
  return <Divider borderBottomWidth={'8px'} borderBottomColor="black" p={1} />
}

export { Ruler, Props as RulerProps }
