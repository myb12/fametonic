import React from 'react';

const HeroText = () => {
  return (
    <div className="flex flex-col items-start text-start max-w-2xl px-4 md:px-0">
      <h1 className="text-[var(--color-fam-text-light)] text-[35px] font-extrabold leading-tight">
        Want to Turn Social Media Into a Profitable Career
      </h1>
      <h1 className="text-[var(--color-fam-accent-cyan)] text-shadow-[0_4px_4px_#FC004E] text-[35px] font-extrabold leading-tight mb-4">
        Discover your way to success with Fametonic:
      </h1>
      <ul className="text-[var(--color-fam-text-light)] text-base mb-12 list-none p-0">
        <li className="mb-[13px]">
          <span className=" mr-3">✨ Start growing your influence right away—no waiting required!</span>
        </li>
        <li className="mb-[13px]">
          <span className=" mr-3">✨ Create viral TikToks and Reels step by step with easy-to-follow lessons</span>
        </li>
        <li className="mb-[13px]">
          <span className=" mr-3">✨ Use a Personal AI Worker to boost your content</span>
        </li>
        <li className="mb-[13px]">
          <span className=" mr-3">✨ Learn from expert-led courses designed for aspiring influencers</span>
        </li>
      </ul>
    </div>
  );
};

export default HeroText;