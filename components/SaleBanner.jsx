import React from 'react';

export default function SaleBanner() {
  return (
    <div className="sale-banner-bg text-center text-base lg:text-[22px] font-extrabold px-[20px] lg:px-0 h-[76px] lg:h-[46px] mb-4 lg:mb-[35px] flex justify-center items-center">
      <div>
        <span className="text-[var(--color-fam-accent-cyan)] uppercase">🚀 Fresh Beginnings Sale: </span> <span> Extra 25% OFF, Limited Spots - start your journey today!</span>
      </div>
    </div>
  );
}