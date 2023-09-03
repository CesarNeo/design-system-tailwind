import type { ComponentProps, ElementType } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

import { fontSize } from 'tailwindcss/defaultTheme'

const SIZES: Record<keyof typeof fontSize, string> = {
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
  base: 'text-base',
  sm: 'text-sm',
  xs: 'text-xs',
}

const text = tv({
  base: 'font-roboto text-gray100',
  variants: {
    size: SIZES,
  },
  defaultVariants: {
    size: 'base',
  },
})

export type TextProps = {
  as?: ElementType
} & ComponentProps<'p'> &
  VariantProps<typeof text>

export function Text({
  as: Component = 'p',
  className,
  size,
  children,
  ...props
}: TextProps) {
  return (
    <Component {...props} className={text({ size, className })}>
      {children}
    </Component>
  )
}
