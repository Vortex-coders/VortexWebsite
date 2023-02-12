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
      className={`px-4 py-1 font-normal border-gold hover:border-orange rounded-sm duration-300 ${
        type === 'solid'
          ? 'text-black bg-gold  hover:bg-orange'
          : 'text-white bg-transparent border-2'
      } `}>
      {children}
    </button>
  );
};

export default Button;
