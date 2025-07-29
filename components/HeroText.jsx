import React from 'react';

const HeroText = () => {

  const contentArray = [
      "Start growing your influence right away—no waiting required!",
      "Create viral TikToks and Reels step by step with easy-to-follow lessons",
      "Use a Personal AI Worker to boost your content",
      "Learn from expert-led courses designed for aspiring influencers"
  ];

  return (
    <div className="flex flex-col items-start text-start max-w-2xl px-4 md:px-0">
      <h1 className="text-[var(--color-fam-text-light)] text-[35px] font-bold leading-tight">
        Want to Turn Social Media Into a Profitable Career
      </h1>
      <h1 className="text-[var(--color-fam-accent-cyan)] text-shadow-[0_4px_4px_var(--color-fam-primary)] text-[35px] font-bold leading-tight mb-4">
        Discover your way to success with Fametonic:
      </h1>
      <ul className="text-[var(--color-fam-text-light)] text-base mb-[30px] list-none p-0">
        {
          contentArray.map((item, index) => <li key={index} className="flex items-center mb-[13px] last:mb-0">
            <span className="mr-[10px]">✨</span>
            <span>{item}</span>
          </li>)
          }
      </ul>
    </div>
  );
};

export default HeroText;