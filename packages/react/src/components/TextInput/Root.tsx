import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const root = tv({
  base: 'bg-gray900 py-3 px-4 rounded border-2 border-gray900 flex items-baseline focus-within:border-ignite300 [&:has(input:disabled)]:opacity-50 [&:has(input:disabled)]:cursor-not-allowed',
})

export type RootProps = ComponentProps<'div'> & VariantProps<typeof root>

const Root = ({ className, ...props }: RootProps) => {
  return <div {...props} className={root({ className })} />
}

Root.displayName = 'TextInput.Root'

export default Root
