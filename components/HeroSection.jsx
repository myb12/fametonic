import React from 'react';
import HeroText from './HeroText';
import GetStartedButton from './GetStartedButton';
import Copyright from './Copyright';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="container mx-auto lg:max-w-screen-lg relative flex justify-start text-[var(--color-fam-text-light)]">
      {/* <div className="absolute inset-0 z-0 bg-[var(--gradient-hero)]"></div> */}

      <div className="relative z-10 flex flex-col items-start w-[51%] mb-[82px]">
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
        className="object-cover absolute right-[-110px] top-[-57px]"
        // className="w-[66%] h-[100%] object-cover absolute right-[-110px] top-[-57px]"
      />
    </section>
  );
};

export default HeroSection;