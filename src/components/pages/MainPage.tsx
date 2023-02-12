import React, { useState } from 'react';
import { useEffect } from 'react';

const text = ' MINDUSTRY V7 SERVER ';

const MainPage = () => {
  const [typedText, setTypedText] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypedText(text.slice(0, typedText.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [typedText]);
  return (
    <div className='flex flex-col justify-center items-center w-full mt-14'>
      <span className='mt-28 font-[Voyager] text-white text-7xl animate-logo_fade'>
        <span className='text-gold'>{'<'}</span>
        <span> V O R T E X </span>
        <span className='text-gold'>{'>'}</span>
      </span>
      <span className='mt-8 font-[Voyager] text-gray text-4xl'>
        <span className='text-gold'>{'='}</span>
        <span className='after:content-["|"] after:animate-blink'>
          {typedText}
        </span>
        <span className='text-gold'>{'='}</span>
      </span>
    </div>
  );
};

export default MainPage;
