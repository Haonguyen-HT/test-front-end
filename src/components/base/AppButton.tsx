import React from 'react';

export const AppButton = ({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2.5 rounded-[32px] text-[16px] px-[40px] py-[12px] font-bold hover:drop-shadow-lg hover:cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
