// See https://storybook.js.org/docs/react/writing-stories/args.

import type { StoryObj, ComponentMeta } from '@storybook/react'

import { PercentSign, type PercentSignProps } from './PercentSign'

export default {
  title: 'Components/PercentSign',
  component: PercentSign,
} as ComponentMeta<typeof PercentSign>

type Story = StoryObj<typeof PercentSign>

export const Generated: Story = {
  args: { color: 'orange' } as PercentSignProps,
}

export const Xlarge: Story = {
  args: { size: 'xlarge' } as PercentSignProps,
}
