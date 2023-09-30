import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@cesarneo/react'

type Story = StoryObj<TextProps>

const sizes: TextProps['size'][] = [
  '9xl',
  '8xl',
  '7xl',
  '6xl',
  '5xl',
  '4xl',
  '3xl',
  '2xl',
  'xl',
  'lg',
  'base',
  'sm',
  'xs',
]

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti architecto suscipit. Necessitatibus dolorum consectetur enim repudiandae sed consequatur provident deleniti hic accusantium debitis? Enim sapiente vitae labore doloremque delectus?',
    size: 'base',
  },
  argTypes: {
    size: {
      options: sizes,
      control: {
        type: 'select',
      },
    },
  },
} as Meta<TextProps>

export const Primary: Story = {}

export const Strong: Story = {
  args: {
    children: 'Strong',
    as: 'strong',
    size: 'xl',
  },
}
