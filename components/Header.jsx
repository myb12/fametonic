import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 

export default function Header() {
  return (
    <header className="container mx-auto lg:max-w-screen-lg flex justify-between items-start relative z-10 h-[74px]">
      <div className="flex items-center">
        <Link href="/" passHref>
            <Image
                src="/images/fametonic-logo.svg"
                alt="Fametonic Logo"
                width={174}
                height={74}
                priority
                className="h-auto"
            />
          </Link>
      </div>

      <nav className="hidden md:flex space-x-[40px] items-center">
        <Link href="/#" passHref className="text-[var(--color-fam-nav)] text-lg font-semibold">
            About us
        </Link>
        <Link href="/#" passHref className="text-[var(--color-fam-nav)] text-lg font-semibold">
            Contact
        </Link>
      </nav>

      <button className="md:hidden text-white focus:outline-none">
        <svg className="w-8 h-8" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336"></path></svg>
      </button>
    </header>
  );
}