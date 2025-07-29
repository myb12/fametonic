import React from 'react';
import HeroText from './HeroText';
import GetStartedButton from './GetStartedButton';
import Copyright from './Copyright';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="container mx-auto lg:max-w-screen-lg relative flex flex-col lg:flex-row items-center justify-start text-[var(--color-fam-text-light)]">
      <div className="relative z-10 flex flex-col items-start lg:w-[51%] mb-[40px] lg:mb-[82px] mt-[-64px] lg:mt-0 order-2 lg:order-1 px-[20px] lg:px-0">
            <HeroText />
             <div className="flex flex-col">
                <div className="order-2 lg:order-1">
                  <GetStartedButton text="Get Started" />
                  <p className="mt-[10px] text-xs text-center w-full lg:w-[313px]" >1-minute quiz for personalized Insights</p>
                </div>
                <div className="order-1 lg:order-2 w-[80%] lg:w-auto mx-auto lg:mx-0">
                  <p className="mt-0 lg:mt-[30px] mb-[19px] lg:mb-3 text-xs text-[var(--color-fam-text-gray)] text-center lg:text-left font-medium">By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
                  <Copyright year={new Date().getFullYear()} companyName="Fametonic" />
                </div>
             </div>
      </div>
      <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/images/Influe_mobile_banner.png"
            alt="Influe Desktop Banner"
          />
          <Image
            src="/images/Influe_mobile_banner_phone.png"
            alt="Influe Mobile Banner"
            width={666}
            height={679}
            priority
            className="object-cover lg:absolute lg:right-[-110px] lg:top-[-80px] order-1 lg:order-2 lg:w-[666px]"
          />
      </picture>
    </section>
  );
};

export default HeroSection;