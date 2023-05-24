// See https://storybook.js.org/docs/react/writing-stories/args.

import type { StoryObj, ComponentMeta } from '@storybook/react'

import { Header, type HeaderProps } from './Header'

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>

type Story = StoryObj<typeof Header>

export const Generated: Story = {
  args: {} as HeaderProps,
}
