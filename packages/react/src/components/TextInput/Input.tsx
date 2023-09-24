import { ComponentProps, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const input = tv({
  base: 'disabled:cursor-not-allowed font-roboto text-sm font-normal text-white bg-transparent border-none w-full outline-none placeholder:text-gray400',
})

type InputProps = ComponentProps<'input'> & VariantProps<typeof input>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return <input className={input({ className })} ref={ref} {...props} />
  },
)

Input.displayName = 'TextInput.Input'

export default Input
