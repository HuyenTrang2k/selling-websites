import React from 'react';
import { Link } from 'react-router-dom';

function StickySidebar() {
  return (
    <div className='banner-wrapper text-center md:none'>
            <Link to='/products/laptop'
              data-cate='0'
              data-place='1865'
              className='fixed top-[12rem] w-[6rem]'
              style={{ right: '90vw' }}
            >
              <img
                className='block max-w-full h-auto'
                style={{ cursor: 'pointer' }}
                src='https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/Trai-80x271.png'
                alt='Liễn Trái'
              />
            </Link>
            <Link to='/products/smartphone'
              data-cate='0'
              data-place='1866'
              className='fixed top-[12rem] w-[6rem]'
              style={{ left: '90vw' }}
            >
              <img
                className='block max-w-full h-auto'
                style={{ cursor: 'pointer' }}
                src='https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/Phai-80x271.png'
                alt='Liễn Phải'
              />
            </Link>
          </div>
  );
}

export default StickySidebar;
