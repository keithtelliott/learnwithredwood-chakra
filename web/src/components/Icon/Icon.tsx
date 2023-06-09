import { AddList } from './AddList'
import { Arrow } from './Arrow'
import { Bookmark } from './Bookmark'
import { Close } from './Close'
import { Hamburger } from './Hamburger'
import { Hide } from './Hide'
import { Search } from './Search'
import { Show } from './Show'
import { Star } from './Star'
import { WatchLater } from './WatchLater'

interface Props {
  name: string
  size?: number
}

const Icon = ({ name, size = 24 }: Props) => {
  switch (name.toLowerCase()) {
    case 'addlist':
      return <AddList size={size} />
    case 'arrow':
      return <Arrow size={size} />
    case 'bookmark':
      return <Bookmark size={size} />
    case 'close':
      return <Close size={size} />
    case 'hamburger':
      return <Hamburger />
    case 'hide':
      return <Hide size={size} />
    case 'search':
      return <Search size={size} />
    case 'show':
      return <Show size={size} />
    case 'star':
      return <Star size={size} />
    case 'watchlater':
      return <WatchLater size={size} />
    default:
      return <div />
  }
}

export { Icon, Props as IconProps }
