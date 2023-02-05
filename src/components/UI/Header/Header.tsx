import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import Button from '../Button';
import { links } from '../../../router/links';
import HeaderLink from './HeaderLink';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className='w-full bg-gradient-to-b from-black to-transparent flex items-center justify-between px-4 py-2 text-[#f1f1f1]'>
      <Link className='flex items-center font-bold text-2xl' to={'/'}>
        <img src={logo} alt='' className='w-18 h-16 mr-4' />
        Vortex
      </Link>
      <div className='flex items-center justify-between font-normal text-[#f1f1f1c6] w-1/3'>
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
