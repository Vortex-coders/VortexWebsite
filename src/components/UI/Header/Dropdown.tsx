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
      className={`absolute flex flex-col items-center w-48 mt-6 bg-black border-gold border-t-4 hover:border-t-2  rounded-b-sm ${
        hidden ? 'hidden' : 'block animate-dropdown_fade'
      }`}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className='w-full p-2 text-center hover:bg-light_black hover:py-3 duration-300'>
          {t(link.name)}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
