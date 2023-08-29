import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@cesarneo/react'
import { Title, Description, Stories } from '@storybook/blocks'

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Heading',
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

export const Primary: StoryObj<HeadingProps> = {}

export const Custom: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: 'xl',
  },
}
