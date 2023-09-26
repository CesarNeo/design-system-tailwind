import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const checkbox = tv({
  slots: {
    container:
      'w-6 h-6  appearance-none shrink-0 data-[state=checked]:bg-ignite300 data-[state=unchecked]:bg-gray900 rounded cursor-pointer overflow-hidden flex justify-center items-center border-2 border-gray900 focus:border-ignite300 transition-all',
    indicator:
      'text-white h-4 w-4 data-[state=checked]:animate-slide-in data-[state=unchecked]:animate-slide-out',
  },
})

export type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkbox>

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => {
  const { container, indicator } = checkbox({ className })

  return (
    <CheckboxPrimitive.Root ref={ref} className={container()} {...props}>
      <CheckboxPrimitive.Indicator className={indicator()} asChild>
        <Check />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName
