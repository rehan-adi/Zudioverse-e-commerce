import React from 'react';
import { TbArrowBigUpLines } from 'react-icons/tb';

function GoToTopButton() {
  const gotoButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className='lf:flex hidden justify-end mr-10 mb-3  lg:mt-3 animate-bounce'>
      <div className='flex justify-center items-center'>
        <button className='bg-black text-center text-white hover:opacity-80 w-10 h-10 rounded-full' onClick={gotoButton}>
          <div className='flex items-center justify-center'>
            <TbArrowBigUpLines />
          </div>
        </button>
      </div>
    </div>
  );
}

export default GoToTopButton;
