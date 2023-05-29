// See https://storybook.js.org/docs/react/writing-stories/args.

import type { StoryObj, ComponentMeta } from '@storybook/react'

import { Nav, type NavProps } from './Nav'

export default {
  title: 'Components/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>

type Story = StoryObj<typeof Nav>

export const Generated: Story = {
  args: {} as NavProps,
}
