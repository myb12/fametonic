import React from 'react';

const HeroText = () => {

  const contentArray = [
      "Start growing your influence right away—no waiting required!",
      "Create viral TikToks and Reels step by step with easy-to-follow lessons",
      "Use a Personal AI Worker to boost your content",
      "Learn from expert-led courses designed for aspiring influencers"
  ];

  return (
    <>
      <h1 className="text-center lg:text-start text-[var(--color-fam-text-light)] text-[25px] lg:text-[35px] font-extrabold lg:font-bold leading-tight">
        Want to Turn Social Media Into a Profitable Career
      </h1>
      <h1 className="text-center lg:text-start text-[var(--color-fam-accent-cyan)] text-shadow-[0_4px_4px_var(--color-fam-primary)] text-[25px] lg:text-[35px] font-extrabold lg:font-bold leading-tight mb-[22px] lg:mb-4">
        Discover your way to success with Fametonic:
      </h1>
      <ul className="text-[var(--color-fam-text-light)] text-start text-base mb-[22px] lg:mb-[30px] list-none p-0">
        {
          contentArray.map((item, index) => <li key={index} className="flex items-center mb-[10px] lg:mb-[13px] last:mb-0 font-normal first:font-medium lg:first:font-semibold lg:font-semibold">
            <span className="mr-[10px]">✨</span>
            <span>{item}</span>
          </li>)
          }
      </ul>
    </>
  );
};

export default HeroText;