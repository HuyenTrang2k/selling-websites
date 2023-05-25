import React from 'react';

function StickySidebar() {
  return (
    <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-center z-[-1]">
      <a
        data-cate="0"
        data-place="1865"
        href="https://www.thegioididong.com/mua-online-gia-re"
        className="banner-left absolute left-[calc(((100vw - 1200px)/2) - 105px)]"
      >
        <img
          className="block max-w-full h-auto"
          style={{ cursor: 'pointer' }}
          src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/Trai-80x271.png"
          alt="Liễn Trái"
        />
      </a>
      <a
        data-cate="0"
        data-place="1866"
        href="https://www.thegioididong.com/mua-online-gia-re"
        className="banner-right absolute right-[calc(((100vw - 1200px)/2) - 105px)] top-195 w-89 z-50"
      >
        <img
          className="block max-w-full h-auto"
          style={{ cursor: 'pointer' }}
          src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/Phai-80x271.png"
          alt="Liễn Phải"
        />
      </a>
    </div>
  );
}

export default StickySidebar;
