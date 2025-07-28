import React from 'react';

const Copyright = ({ year = new Date().getFullYear(), companyName = 'Fametonic' }) => {
  return (
    <div className="text-center text-[var(--color-fam-text-gray)] text-sm z-10">
      &copy; {year} {companyName}. All rights reserved.
    </div>
  );
};

export default Copyright;