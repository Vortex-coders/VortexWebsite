import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '@Assets/images/logo.svg';
import Button from '../Button';
import { links } from '@Router/links';
import HeaderLink from './HeaderLink';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className='flex items-center justify-between w-full px-4 py-2 text-white bg-gradient-to-b from-full_black to-transparent'>
      <Link className='flex items-center font-bold text-2xl' to={'/'}>
        <img src={logo} alt='' className='w-18 h-16 mr-4' />
        <span>Vortex</span>
      </Link>
      <div className='flex items-center justify-between w-1/3'>
        {links.map((link, index) => (
          <HeaderLink key={index} {...link} />
        ))}
      </div>
      <div>
        <Button>{t('sign_in')}</Button>
      </div>
    </div>
  );
};

export default Header;
