import type { ComponentProps, ElementType } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const SIZES = {
  '9xl': 'text-9xl',
  '8xl': 'text-8xl',
  '7xl': 'text-7xl',
  '6xl': 'text-6xl',
  '5xl': 'text-5xl',
  '4xl': 'text-4xl',
  '3xl': 'text-3xl',
  '2xl': 'text-2xl',
  xl: 'text-xl',
  lg: 'text-lg',
}

const heading = tv({
  base: 'font-roboto text-gray100 font-bold',
  variants: {
    size: SIZES,
  },
  defaultVariants: {
    size: 'lg',
  },
})

export type HeadingProps = {
  as?: ElementType
} & ComponentProps<'h2'> &
  VariantProps<typeof heading>

export function Heading({
  as: Component = 'h2',
  className,
  size,
  children,
  ...props
}: HeadingProps) {
  return (
    <Component {...props} className={heading({ size, className })}>
      {children}
    </Component>
  )
}
