import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';
import { sliderItem } from '../data';

const Slider = () => {
  return (
    <Carousel
      autoPlay={true}
      stopAutoPlayOnHover={true}
      animation='slide'
      indicators={false}
      duration={3000}
      interval={15000}
      className='my-4'
    >
      {sliderItem.map((item, i) =>
        item ? (
          <div key={i} className="h-[220px] w-full flex-1 flex justify-center items-center gap-3">
            <div className="p-2">
              <Link to={`/products/${item[0]?.cat}`}>
                <img src={item[0]?.img} className="h-[220px] w-full rounded-2xl" alt="Slider Image" />
              </Link>
            </div>
            <div className="p-2">
              <Link to={`/products/${item[1]?.cat}`}>
                <img src={item[1]?.img} className="h-[220px] w-full rounded-2xl" alt="Slider Image" />
              </Link>
            </div>
          </div>
        ) : null
      )}
    </Carousel>
  );
};

export default Slider;
