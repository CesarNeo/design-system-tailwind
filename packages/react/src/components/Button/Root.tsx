import { ComponentProps, ElementType } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const root = tv({
  base: 'rounded-md text-sm font-bold py-0 px-4 font-roboto text-center min-w-[7.5rem] flex items-center justify-center gap-2 cursor-pointer transition-all disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary:
        'bg-ignite500 text-white enabled:hover:bg-ignite300 disabled:bg-gray200',
      secondary:
        'text-ignite300 border-2 border-ignite500 enabled:hover:bg-ignite500 enabled:hover:text-white disabled:text-gray200 disabled:border-gray200',
      tertiary: 'text-gray100 enabled:hover:text-white disabled:text-gray600',
    },
    size: {
      sm: 'h-8',
      md: 'h-11',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type RootProps = ComponentProps<'button'> &
  VariantProps<typeof root> & {
    as?: ElementType
  }

const Root = ({
  as: Component = 'button',
  className,
  variant,
  size,
  ...props
}: RootProps) => {
  return <Component {...props} className={root({ className, variant, size })} />
}

Root.displayName = 'Button.Root'

export default Root
