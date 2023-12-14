import React from 'react';
import SVG from 'react-inlinesvg';

interface IAppButtonIcon
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: string;
}

export const AppButtonIcon = ({
  children,
  className,
  icon,
  ...props
}: IAppButtonIcon) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2.5 rounded-[32px] text-[16px] px-[40px] py-[12px] font-bold hover:drop-shadow-lg hover:cursor-pointer ${className}`}
      {...props}
    >
      <SVG src={icon} height={27} width={27} />
      {children}
    </button>
  );
};
