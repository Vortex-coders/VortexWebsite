import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface IDropdown {
  hidden: boolean;
  links: { name: string; path: string }[];
}

const Dropdown = ({ hidden, links }: IDropdown) => {
  const { t } = useTranslation();
  return (
    <div
      className={`flex flex-col items-center rounded-b-sm bg-[#1c1c1c] w-48 absolute mt-6 border-t-4 hover:border-t-2 duration-300 border-[#ffc853] ${
        hidden ? 'hidden' : 'block'
      } `}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className='w-full hover:bg-[#2c2c2c] p-2 text-center duration-300'>
          {t(link.name)}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
