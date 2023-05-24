// See https://storybook.js.org/docs/react/writing-stories/args.

import type { StoryObj, ComponentMeta } from '@storybook/react'

import { HomeHeader, type HomeHeaderProps } from './HomeHeader'

export default {
  title: 'Components/HomeHeader',
  component: HomeHeader,
} as ComponentMeta<typeof HomeHeader>

type Story = StoryObj<typeof HomeHeader>

export const Generated: Story = {
  args: {} as HomeHeaderProps,
}
