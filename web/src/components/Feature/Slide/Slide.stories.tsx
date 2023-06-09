// See https://storybook.js.org/docs/react/writing-stories/args.

import type { StoryObj, ComponentMeta } from '@storybook/react'

import { Slide, type SlideProps } from './Slide'

export default {
  title: 'Components/Slide',
  component: Slide,
} as ComponentMeta<typeof Slide>

type Story = StoryObj<typeof Slide>

export const Primary: Story = {
  args: {
    image:
      'https://www.themoviedb.org/t/p/original/lcTuggU70y6pt6x13Rv1Ffjs93K.jpg',
    title: 'Money Heist: Korea - Joint Economic Area ',
    percentage: 89,
  } as SlideProps,
}
