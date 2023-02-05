import React, { ReactNode } from 'react';

interface IButton {
  type?: 'solid' | 'outlined';
  children: ReactNode;
  onClick?: () => any;
}

const Button = ({ type = 'solid', onClick, children }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`${
        type === 'solid'
          ? 'bg-[#ffc853] text-[#1c1c1c] hover:bg-[#ffa353]'
          : 'bg-transparent text-[#f1f1f1] border-2'
      } border-[#ffc853] hover:border-[#ffa353] rounded-sm font-normal px-4 py-1 duration-300`}>
      {children}
    </button>
  );
};

export default Button;
