import Link from 'next/link';
import { DrawerMenu } from '@/components/layout/drawer-menu';
// Removed MountainIcon import

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Removed MountainIcon */}
          <span className="font-bold text-lg">Shaik Rahil Basha</span>
        </Link>
        <nav className="hidden flex-1 items-center justify-end space-x-4 md:flex">
          {/* Desktop navigation links (optional - handled by drawer for consistency) */}
        </nav>
        <div className="ml-auto flex items-center"> {/* Simplified structure */}
          <DrawerMenu />
        </div>
      </div>
    </header>
  );
}
