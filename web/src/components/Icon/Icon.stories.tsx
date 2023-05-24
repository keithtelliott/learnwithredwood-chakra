// See https://storybook.js.org/docs/react/writing-stories/args.

import type { StoryObj, ComponentMeta } from '@storybook/react'

import { Icon, type IconProps } from './Icon'

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

type Story = StoryObj<typeof Icon>

export const Arrow: Story = {
  args: { name: 'Arrow' } as IconProps,
}

export const AddList: Story = {
  args: { name: 'AddList' } as IconProps,
}

export const Bookmark: Story = {
  args: { name: 'Bookmark' } as IconProps,
}

export const Close: Story = {
  args: { name: 'Close' } as IconProps,
}

export const Hamburger: Story = {
  args: { name: 'Hamburger' } as IconProps,
}

export const Hide: Story = {
  args: { name: 'Hide' } as IconProps,
}

export const Search: Story = {
  args: { name: 'Search' } as IconProps,
}

export const Show: Story = {
  args: { name: 'Show' } as IconProps,
}

export const Star: Story = {
  args: { name: 'Star' } as IconProps,
}
