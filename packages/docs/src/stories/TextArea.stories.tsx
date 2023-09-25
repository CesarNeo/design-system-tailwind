import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextAreaProps, TextArea, Text } from '@cesarneo/react'
import { Title, Stories } from '@storybook/blocks'

type Story = StoryObj<TextAreaProps>

const meta = {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (StoryComponent) => (
      <Box className="flex flex-col gap-2">
        <Text size="sm">Observações</Text>
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
} as Meta<TextAreaProps>

export default meta

export const Primary: Story = {
  args: {
    placeholder: 'placeholder...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
