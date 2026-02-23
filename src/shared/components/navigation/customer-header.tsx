'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, CalendarDays, User, UserCircle } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils'; //
import { businessName } from '@/shared/constants/business';

const navItems = [
  { label: 'Início', href: '/home', icon: Home },
  { label: 'Reservas', href: '/my-bookings', icon: CalendarDays },
];

export const CustomerHeader = () => {
  const pathname = usePathname();

  return (
    <header className="top-0 z-50 w-full border-b backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <div>
            <span className="text-xl font-bold">{businessName[0]}</span>
            <span className="text-primary text-xl font-bold">{businessName[1]}</span>
          </div>

          <nav className="hidden items-center justify-center gap-6 md:flex">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'hover:text-primary text-sm font-medium transition-colors',
                  pathname === href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/profile">
              <UserCircle className="size-6" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
