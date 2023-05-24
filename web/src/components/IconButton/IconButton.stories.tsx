// See https://storybook.js.org/docs/react/writing-stories/args.

import type { StoryObj, ComponentMeta } from '@storybook/react'

import { IconButton, type IconButtonProps } from './IconButton'

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

type Story = StoryObj<typeof IconButton>

export const ToggleOff: Story = {
  args: { name: 'Arrow' } as IconButtonProps,
}

export const ToggleOn: Story = {
  args: { name: 'Arrow', toggled: true } as IconButtonProps,
}
