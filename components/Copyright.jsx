import React from 'react';

const Copyright = ({ year = new Date().getFullYear(), companyName = 'Fametonic' }) => {
  return (
    <div className="text-center lg:text-left text-[var(--color-fam-text-gray)] text-[10px] z-10 mb-8 lg:mb-0 font-medium">
        {companyName} {year} &copy;All rights reserved.
    </div>
  );
};

export default Copyright;