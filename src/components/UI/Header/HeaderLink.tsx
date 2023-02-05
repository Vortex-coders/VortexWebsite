import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useOnHoverOutside } from '../../../hooks/useOnHoverOutside';
import { TLink } from '../../../router/links';
import Dropdown from './Dropdown';

const HeaderLink = ({ name, path, dropdownArray }: TLink) => {
  const { t } = useTranslation();
  const [hidden, setHidden] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOnHoverOutside(dropdownRef, () => setHidden(true));
  return (
    <div ref={dropdownRef} className='flex flex-col items-center'>
      <Link
        to={path}
        onMouseOver={() => setHidden(false)}
        className='hover:text-[#f1f1f1] duration-300'>
        {t(name)}
      </Link>
      <Dropdown links={dropdownArray} hidden={hidden} />
    </div>
  );
};

export default HeaderLink;
