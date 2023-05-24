// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Poster> = (args) => {
//   return <Poster {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { StoryObj, ComponentMeta } from '@storybook/react'

import avatar from './images/movie-pic-avatar.jpg'
import { Poster, type PosterProps } from './Poster'

// export const generated = () => {
//   return <Poster alt="Avatar" src={avatar} />
// }

// Button.stories.ts|tsx

export default {
  title: 'Components/Poster',
  component: Poster,
} as ComponentMeta<typeof Poster>
// } as Meta<typeof Poster>

type Story = StoryObj<typeof Poster>

export const Avatar: Story = {
  args: {
    alt: 'Avatar',
    src: avatar,
  } as PosterProps,
}

export const AvatarSmall: Story = {
  args: {
    ...Avatar.args,
    size: 'small',
  },
}

export const AvatarSmallWithHeader: Story = {
  args: {
    ...AvatarSmall.args,
    heading: 'Avatar Header',
    subHeading: 'creative story of struggle',
  },
}
export const AvatarLarge: Story = {
  args: {
    ...Avatar.args,
    size: 'large',
  },
}

export const Chupa: Story = {
  args: {
    alt: 'Chupa',
    src: 'https://www.themoviedb.org/t/p/original/yrlnQl4rKVUKyc2X5NuhnplNOK2.jpg',
  },
}

export const ChupaSmall: Story = {
  args: {
    ...Chupa.args,
    size: 'small',
  },
}

export const ChupaLarge: Story = {
  args: {
    ...Chupa.args,
    size: 'large',
  },
}
