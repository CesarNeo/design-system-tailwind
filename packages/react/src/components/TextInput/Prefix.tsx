import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const prefix = tv({
  base: 'font-roboto text-sm text-gray400 font-normal',
})

export type PrefixProps = ComponentProps<'span'> & VariantProps<typeof prefix>

const Prefix = ({ className, ...props }: PrefixProps) => {
  return <span {...props} className={prefix({ className })} />
}

export default Prefix
