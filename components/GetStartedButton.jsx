import React from 'react';

const GetStartedButton = ({ text = 'Get Started'}) => {
  const buttonClasses = `
    bg-[var(--color-fam-primary)]
    text-[var(--color-fam-text-light)]
    font-bold
    p-2
    rounded-[10px]
    text-xl
    shadow-[2px_2px_10px_0_var(--color-fam-accent-cyan)]
    text-center   
    cursor-pointer
    flex
    items-center
    justify-center
    space-x-[10px]
    w-[313px]
    max-w-[313px]
  `;

  return (
    <div>
        <div className="w-[313px] max-w-[313px]">
            <button className={buttonClasses}>
                <span>{text}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M7.19238 6.26465C7.60266 6.67918 7.60225 7.33287 7.19141 7.74707L2.29102 12.6875C1.87768 13.1039 1.22189 13.104 0.808594 12.6875C0.607462 12.4847 0.50002 12.2157 0.5 11.9512L0.5 11.7451L0.538086 11.707C0.551454 11.6485 0.568204 11.5907 0.591797 11.5352C0.644656 11.4108 0.722378 11.2983 0.819336 11.2041L4.97949 7L0.818359 2.7959L0.819336 2.79492C0.408805 2.3804 0.4084 1.72679 0.819336 1.3125C1.23271 0.895833 1.88939 0.895784 2.30273 1.3125L2.30273 1.31348L7.19238 6.26465Z" fill="white" stroke="white"/>
                </svg>
            </button>
            <p className="mt-[10px] text-xs text-center">1-minute quiz for personalized Insights</p>
        </div>
        <p className="mt-[30px] mb-3 text-xs text-[var(--color-fam-text-gray)]">By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
    </div>
  );
};

export default GetStartedButton;