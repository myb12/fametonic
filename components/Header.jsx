import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 

export default function Header() {
  return (
    <header className="container mx-auto mb-[57px] lg:max-w-screen-lg flex justify-end lg:justify-between items-center lg:items-start relative z-10 h-[46px] lg:h-[74px] pr-[29px] lg:pr-0 ">
        <Link href="/" passHref className="mr-[94px] lg:mr-0">
            <Image
                src="/images/fametonic-logo.svg"
                alt="Fametonic Logo"
                width={174}
                height={74}
                priority
                className="h-auto max-w-[108px] lg:max-w-[174px]"
                sizes="(max-width: 1023px) 108px"
            />
          </Link>

      <nav className="hidden md:flex space-x-[40px] items-center">
        <Link href="/#" passHref className="text-[var(--color-fam-nav)] text-lg font-semibold">
            About us
        </Link>
        <Link href="/#" passHref className="text-[var(--color-fam-nav)] text-lg font-semibold">
            Contact
        </Link>
      </nav>

      <button className="md:hidden text-white focus:outline-none">
            <div className="w-[20px] h-[2px] bg-white rounded-lg relative z-10 mb-1"></div>
            <div className="w-[20px] h-[2px] bg-white rounded-lg relative z-10 mb-1"></div>
            <div className="w-[20px] h-[2px] bg-white rounded-lg relative z-10 mb-1"></div>
      </button>
    </header>
  );
}