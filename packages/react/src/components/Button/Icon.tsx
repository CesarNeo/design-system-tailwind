import React, { ComponentProps, ElementType } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const buttonIcon = tv({
  base: 'w-4 h-4 stroke-current',
})

export type ButtonIconProps = ComponentProps<'svg'> &
  VariantProps<typeof buttonIcon> & {
    icon: ElementType
  }

const ButtonIcon = ({ icon: Icon, className }: ButtonIconProps) => {
  return <Icon className={buttonIcon({ className })} />
}

ButtonIcon.displayName = 'Button.Icon'

export default ButtonIcon
