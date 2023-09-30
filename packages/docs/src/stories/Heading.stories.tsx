import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@cesarneo/react'
import { Title, Description, Stories } from '@storybook/blocks'

type Story = StoryObj<HeadingProps>

const sizes: HeadingProps['size'][] = [
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
]

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Heading',
    size: 'lg',
  },
  argTypes: {
    size: {
      options: sizes,
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            Por padrão o component Heading sempre sera `h2` e o tamanho `lg`,
            mas você pode alterar o elemento e o tamanho, usando as props `as` e
            `size`.
          </Description>
          <Stories />
        </>
      ),
    },
  },
} as Meta<HeadingProps>

export default meta

export const Primary: Story = {}

export const Custom: Story = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: 'xl',
  },
}
