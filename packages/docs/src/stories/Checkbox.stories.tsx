import type { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@cesarneo/react'

type Story = StoryObj<CheckboxProps>

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (StoryComponent) => (
      <Box>
        <Text as="label" size="sm" className="flex gap-2 items-center">
          {StoryComponent()}
          Aceite os termos
        </Text>
      </Box>
    ),
  ],
} as Meta<Story>

export const Primary: StoryObj<Story> = {}
