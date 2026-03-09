'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, CalendarDays, User } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

const navItems = [
  { label: 'Início', href: '/home', icon: Home },
  { label: 'Reservas', href: '/my-bookings', icon: CalendarDays },
];

export function MobileNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        'bg-background fixed right-0 bottom-0 left-0 z-50 w-full border-t p-4 md:hidden',
        className
      )}
    >
      <ul className="flex h-14 items-center justify-evenly">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'flex flex-col items-center gap-1 transition-colors',
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                )}
              >
                <Icon className="size-6" strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
