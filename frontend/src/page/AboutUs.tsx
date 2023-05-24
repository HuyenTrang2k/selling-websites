import React from 'react';
import { useState, useEffect } from 'react';
import GoogleMaps from '../components/GoogleMaps';
import { listShowroom } from "../data";
import { ShowroomProps } from '../model/showroomProps';

const AboutUs = () => {
  const [location, setLocation] = useState<ShowroomProps | null>(null);
  const [filteredArray, setFilteredArray] = useState<ShowroomProps[]>([]);

  useEffect(() => {
    if (listShowroom.length > 0) {
      setLocation(listShowroom[0]);
      setFilteredArray(listShowroom);
    }
  }, []);

  const handleChooseShowroom = (showroom: ShowroomProps) => {
    setLocation(showroom);
  };

  const filterShowroom = (input: string) => {
    const value = input.toLowerCase();
    const filteredArray = listShowroom.filter(item => {
      const address = item.address.toLowerCase();
      return address.includes(value);
    });
    setFilteredArray(filteredArray);
  };

  return (
    <>
      <h1 className="m-4">About us</h1>
      <div className="p-4 border rounded">
        <div className="flex">
          <div className="w-full max-h-400px min-w-300px">
            <img className="w-full" src="src\assets\about-us.jpg" alt="About Us" />
          </div>
          <div className="p-10">
            <h1>Trang SHOP</h1>
            <div>
              Hệ thống Trang SHOP đã trở thành một trong những website chuyên bán lẻ các thiết bị
              di động có tên tuổi tại thị trường Việt Nam, với các chi nhánh tại TP.HCM, Đà Nẵng. Với khát khao mang tới
              sự hài lòng tuyệt đối cho khách hàng, phát triển thương hiệu bằng giá trị cốt lõi là niềm tin của khách hàng,
              công ty luôn cố gắng nỗ lực để cập nhật, phát triển không ngừng nghỉ.
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 my-6">
        <div>
          <h2>Showroom List</h2>
          <input
            className='bg-white bg-clip-padding-box border border-gray-200 rounded px-9 py-1 font-sans text-sm h-32px w-full min-w-450px box-border'
            type='text'
            placeholder='Search showroom'
            onKeyUp={(event) => filterShowroom(event.currentTarget.value)}
          />
          {filteredArray.map((s) => (
            <div
              key={s.id}
              className="m-4 p-2 border rounded cursor-pointer"
              onClick={() => handleChooseShowroom(s)}
            >
              <div style={{ fontWeight: 'bold' }}>
                {s.name} {s.address}
              </div>
              <div>{s.address}</div>
              <div className="flex text-sm gap-4">
                <a href={`tel:${s.phone}`}>Gọi ngay</a>
                <a
                  className="go-zalo"
                  href="https://zalo.me/2858385037676592618"
                  target="_blank"
                  rel="nofollow"
                >
                  <div style={{ margin: '0 5px 0 0' }}>
                    <img style={{ width: '12px' }} src="\src\assets\zalo.svg" alt="Zalo" />
                  </div>
                  Chat Zalo
                </a>
                <a
                  className="go-map"
                  href={`https://www.google.com/maps?saddr=${s.center.lat},${s.center.lng}&daddr=${s.center.lat},${s.center.lng}`}
                  target="_blank"
                  rel="nofollow"
                >
                  <div>
                    <img style={{ width: '12px' }} src="\src\assets\map.svg" alt="Map" />
                  </div>
                  Tìm đường đi
                </a>
              </div>
            </div>
          ))}
        </div>
        {location && <GoogleMaps location={location} />}
      </div>
    </>
  );
};

export default AboutUs;
