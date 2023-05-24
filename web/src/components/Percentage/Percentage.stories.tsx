// See https://storybook.js.org/docs/react/writing-stories/args.

import type { StoryObj, ComponentMeta } from '@storybook/react'

import { Percentage, type PercentageProps } from './Percentage'

export default {
  title: 'Components/Percentage',
  component: Percentage,
} as ComponentMeta<typeof Percentage>

type Story = StoryObj<typeof Percentage>

export const Generated: Story = {
  args: { percentage: 66 } as PercentageProps,
}

export const NoRing: Story = {
  args: { ...Generated.args, showRing: false } as PercentageProps,
}

export const Small: Story = {
  args: {
    ...Generated.args,
    showRing: false,
    size: 'small',
  } as PercentageProps,
}

export const Medium: Story = {
  args: {
    ...Small.args,
    size: 'medium',
  } as PercentageProps,
}

export const Large: Story = {
  args: {
    ...Small.args,
    size: 'large',
  } as PercentageProps,
}

export const XLarge: Story = {
  args: {
    ...Small.args,
    size: 'xlarge',
  } as PercentageProps,
}

export const LowRating: Story = {
  args: {
    ...Small.args,
    showRing: true,
    size: 'medium',
    percentage: 30,
  } as PercentageProps,
}

export const MidRating: Story = {
  args: {
    ...LowRating.args,
    percentage: 60,
  } as PercentageProps,
}

export const HighRating: Story = {
  args: {
    ...LowRating.args,
    percentage: 90,
  } as PercentageProps,
}
