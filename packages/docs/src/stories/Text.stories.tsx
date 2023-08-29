import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@cesarneo/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti architecto suscipit. Necessitatibus dolorum consectetur enim repudiandae sed consequatur provident deleniti hic accusantium debitis? Enim sapiente vitae labore doloremque delectus?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Strong: StoryObj<TextProps> = {
  args: {
    children: 'Strong',
    as: 'strong',
    size: 'xl',
  },
}
