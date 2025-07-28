import React from 'react';
import HeroText from './HeroText';
import GetStartedButton from './GetStartedButton';
import Copyright from './Copyright';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="container mx-auto lg:max-w-screen-lg relative flex justify-start min-h-screen text-[var(--color-fam-text-light)] p-4">
      {/* <div className="absolute inset-0 z-0 bg-[var(--gradient-hero)]"></div> */}

      <div className="relative z-10 flex flex-col items-start w-[54%]">
            <HeroText />
            <GetStartedButton text="Get Started" />
            <Copyright year={new Date().getFullYear()} companyName="Fametonic" />
      </div>
      <Image
        src="/images/Influe_mobile_banner.png"
        alt="Influe Mobile Banner"
        width={666}
        height={679}
        priority
        className="w-[66%] h-[100%] object-contain absolute right-[-110px] top-0"
      />
    </section>
  );
};

export default HeroSection;