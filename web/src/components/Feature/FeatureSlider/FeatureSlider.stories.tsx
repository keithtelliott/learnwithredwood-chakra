// See https://storybook.js.org/docs/react/writing-stories/args.

import type { StoryObj, ComponentMeta } from '@storybook/react'

import { FeatureSlider, type FeatureSliderProps } from './FeatureSlider'
import { data } from './FeatureSlider.mock'

export default {
  title: 'Components/FeatureSlider',
  component: FeatureSlider,
} as ComponentMeta<typeof FeatureSlider>

type Story = StoryObj<typeof FeatureSlider>

export const Generated: Story = {
  args: { features: data } as FeatureSliderProps,
}
