import React from 'react';

export default function SaleBanner() {
  return (
    <div className="sale-banner-bg text-center text-[22px] font-extrabold py-2 px-4 h-[46px] mb-[35px] flex justify-center items-center">
      <span className="text-[var(--color-fam-accent-cyan)] uppercase">🚀 Fresh Beginnings Sale: </span> <span className="ml-1"> Extra 25% OFF, Limited Spots - start your journey today!</span>
    </div>
  );
}