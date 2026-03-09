import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils';

const timeSlotVariants = cva(
  'relative flex w-full items-center justify-center rounded-md py-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 disabled:pointer-events-none',
  {
    variants: {
      status: {
        available: 'border border-green-500 bg-transparent text-white hover:bg-green-500/10',
        selected: 'border border-transparent bg-[#a3e635] text-black', // Verde neon aproximado do design
        booked: 'cursor-not-allowed border border-transparent bg-neutral-800 text-neutral-500',
      },
    },
    defaultVariants: {
      status: 'available',
    },
  }
);

export interface TimeSlotButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof timeSlotVariants> {
  asChild?: boolean;
}

export const TimeSlotButton = ({
  className,
  status,
  asChild = false,
  ...props
}: TimeSlotButtonProps): React.ReactElement => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(timeSlotVariants({ status, className }))}
      disabled={status === 'booked' || props.disabled}
      {...props}
    />
  );
};
