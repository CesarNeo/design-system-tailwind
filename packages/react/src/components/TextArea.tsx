import { ComponentProps, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const textarea = tv({
  base: 'bg-gray900 py-3 px-4 rounded border-2 border-gray900 focus:border-ignite300 outline-none disabled:opacity-50 disabled:cursor-not-allowed placeholder-gray400 font-roboto text-sm text-white font-normal resize-y min-h-[5rem]',
})

export type TextAreaProps = ComponentProps<'textarea'> &
  VariantProps<typeof textarea>

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return <textarea className={textarea({ className })} ref={ref} {...props} />
  },
)

TextArea.displayName = 'TextArea'
