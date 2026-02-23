import { CustomerHeader } from '@/shared/components/navigation/customer-header';
import { MobileNav } from '@/shared/components/navigation/mobile-nav';

export default function CustomerProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <CustomerHeader />

      <main className="flex-1 pb-20 md:pb-0">
        <div className="p-4">{children}</div>
      </main>

      <MobileNav className="md:hidden" />
    </div>
  );
}
