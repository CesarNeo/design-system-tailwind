import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@cesarneo/react'
import { Title, Stories } from '@storybook/blocks'

type Story = StoryObj<AvatarProps>

const meta = {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/cesarneo.png',
    alt: 'Cesar Emmanuel',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    alt: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />

          <Stories />
        </>
      ),
    },
  },
} as Meta<AvatarProps>

export default meta

export const Primary: Story = {}

export const Fallback: Story = {
  args: {
    src: undefined,
    fallback: 'CE',
  },
}
