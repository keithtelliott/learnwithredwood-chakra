// See https://storybook.js.org/docs/react/writing-stories/args.

import type { StoryObj, ComponentMeta } from '@storybook/react'

import { Slider, type SliderProps } from './Slider'
import { slides } from './Slider.mocks'

export default {
  title: 'Components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>

type Story = StoryObj<typeof Slider>

export const Primary: Story = {
  args: {
    label: 'Most Popular',
    slideSize: 'small',
    viewAllLink: '/movies',
    slides: slides,
  } as SliderProps,
}

export const Medium: Story = {
  args: {
    ...Primary.args,
    slideSize: 'medium',
  } as SliderProps,
}

export const Large: Story = {
  args: {
    ...Primary.args,
    slideSize: 'large',
  } as SliderProps,
}
