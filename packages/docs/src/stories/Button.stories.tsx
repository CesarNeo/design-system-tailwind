import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@cesarneo/react'
import { Title, Stories } from '@storybook/blocks'
import { ArrowRight } from 'lucide-react'
import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<typeof Button.Root>

type Story = StoryObj<ButtonProps>

const variants: ButtonProps['variant'][] = ['primary', 'secondary', 'tertiary']
const sizes: ButtonProps['size'][] = ['sm', 'md']

const meta = {
  title: 'Form/Button',
  component: Button.Root,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: variants,
      control: {
        type: 'select',
      },
    },
    size: {
      options: sizes,
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
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
} as Meta<typeof Button.Root>

export default meta

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Button
        <Button.Icon icon={ArrowRight} />
      </>
    ),
  },
}
