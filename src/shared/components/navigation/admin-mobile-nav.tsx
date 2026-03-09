'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, CalendarDays } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Agenda', href: '/agenda', icon: CalendarDays },
];

export const AdminMobileNav = ({ className }: { className?: string }): React.ReactElement => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        'fixed right-0 bottom-0 left-0 z-50 w-full border-t border-zinc-800 bg-zinc-900 p-4 md:hidden',
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
                  isActive ? 'text-[#a3e635]' : 'text-neutral-400 hover:text-neutral-200'
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
};
