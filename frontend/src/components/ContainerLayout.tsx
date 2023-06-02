import React from 'react';
import { useLayoutEffect, useState } from 'react';
import Announcement from './Announcement';
import Footer from './Footer';
import Navbar from './Navbar';
import PineTree from './PineTreeDecor';
import StickySidebar from './StickySidebar';
import { Outlet } from 'react-router-dom';

function ContainerLayout({ children }) {
  const [containerWidth, setContainerWidth] = useState('max-w-2xl');
  const [showBanner, setShowBanner] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 1560) {
        setContainerWidth('max-w-7xl');
        setShowBanner(true);
      } else if (windowWidth >= 1440) {
        setContainerWidth('max-w-6xl');
        setShowBanner(true);
      } else if (windowWidth >= 1280) {
        setContainerWidth('max-w-5xl');
        setShowBanner(true);
      } else if (windowWidth >= 1024) {
        setShowBanner(false);
        setContainerWidth('max-w-4xl');
      } else if (windowWidth >= 768) {
        setShowBanner(false);
        setContainerWidth('max-w-3xl');
      } else {
        setShowBanner(false);
        setContainerWidth('max-w-2xl');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${containerWidth} mx-auto `}
    >
      <Announcement />
      <Navbar />
      <Outlet />
      {showBanner && (
        <>
          <StickySidebar />
          <PineTree />
        </>
      )}
      <Footer />
    </div>
  );
}

export default ContainerLayout;
