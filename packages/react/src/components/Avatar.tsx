import { ComponentProps } from 'react'

import * as AvatarRadix from '@radix-ui/react-avatar'
import { VariantProps, tv } from 'tailwind-variants'

const avatar = tv({
  base: 'rounded-full h-12 w-12 overflow-hidden flex items-center justify-center object-cover bg-gray500 text-white font-roboto',
})

export type AvatarProps = ComponentProps<typeof AvatarRadix.Image> &
  VariantProps<typeof avatar> & {
    fallback: string
  }

export const Avatar = ({ fallback, className, ...props }: AvatarProps) => {
  return (
    <AvatarRadix.Root className={avatar({ className })}>
      <AvatarRadix.Image {...props} />
      <AvatarRadix.AvatarFallback delayMs={600}>
        {fallback}
      </AvatarRadix.AvatarFallback>
    </AvatarRadix.Root>
  )
}
