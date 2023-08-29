import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const box = tv({
  base: 'p-4 bg-gray800 rounded-md border border-gray600',
})

export type BoxProps = ComponentProps<'div'> & VariantProps<typeof box>

export function Box({ className, ...props }: BoxProps) {
  return <div {...props} className={box({ className })} />
}
