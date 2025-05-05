'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import * as React from "react";

export function DrawerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };


  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:ml-4">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="mb-6">
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4">
           <SheetClose asChild>
            <Link href="#hero" className="text-lg font-medium transition-colors hover:text-primary" onClick={handleLinkClick}>Home</Link>
           </SheetClose>
          <SheetClose asChild>
            <Link href="#about" className="text-lg font-medium transition-colors hover:text-primary" onClick={handleLinkClick}>About & Education</Link>
          </SheetClose>
           <SheetClose asChild>
            <Link href="#internship" className="text-lg font-medium transition-colors hover:text-primary" onClick={handleLinkClick}>Internship</Link>
          </SheetClose>
          <SheetClose asChild>
             <Link href="#projects" className="text-lg font-medium transition-colors hover:text-primary" onClick={handleLinkClick}>Projects</Link>
          </SheetClose>
          <SheetClose asChild>
             <Link href="#extracurricular" className="text-lg font-medium transition-colors hover:text-primary" onClick={handleLinkClick}>Activities</Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
