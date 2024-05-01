import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { cn } from 'lib/utils'

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {
    asChild?: boolean
  }

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : 'div'
    return (
      <Component
        className={cn('bg-post rounded-[0.625rem] transition-colors duration-300 border-2 border-transparent hover:border-label p-6', className)}
        {...props}
        ref={ref}
      />
    )
  }
)

Card.displayName = 'Card'
