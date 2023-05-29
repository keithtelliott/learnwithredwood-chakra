// See https://storybook.js.org/docs/react/writing-stories/args.

import type { StoryObj, ComponentMeta } from '@storybook/react'

import { Ruler, type RulerProps } from './Ruler'

export default {
  title: 'Components/Ruler',
  component: Ruler,
} as ComponentMeta<typeof Ruler>

type Story = StoryObj<typeof Ruler>

export const Generated: Story = {
  args: {} as RulerProps,
}
