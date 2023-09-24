import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput } from '@cesarneo/react'
import { Title, Stories } from '@storybook/blocks'

type Story = StoryObj<typeof TextInput.Root>

const meta = {
  title: 'Form/Text Input',
  component: TextInput.Root,
  tags: ['autodocs'],
  args: {
    children: <TextInput.Input />,
  },
  decorators: [
    (StoryComponent) => (
      <Box className="flex flex-col gap-2">
        <Text size="sm">E-mail</Text>
        {StoryComponent()}
      </Box>
    ),
  ],
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
} as Meta<typeof TextInput.Root>

export default meta

export const Primary: Story = {
  args: {
    children: <TextInput.Input placeholder="placeholder..." />,
  },
}

export const WithPrefix: Story = {
  args: {
    children: (
      <>
        <TextInput.Prefix>https://</TextInput.Prefix>
        <TextInput.Input />
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    children: <TextInput.Input disabled />,
  },
}
