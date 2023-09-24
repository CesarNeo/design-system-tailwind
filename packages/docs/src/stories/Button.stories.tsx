import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@cesarneo/react'
import { Title, Stories } from '@storybook/blocks'
import { ArrowRight } from 'lucide-react'

type Story = StoryObj<typeof Button.Root>

const meta = {
  title: 'Form/Button',
  component: Button.Root,
  tags: ['autodocs'],
  args: {
    children: 'Button',
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
