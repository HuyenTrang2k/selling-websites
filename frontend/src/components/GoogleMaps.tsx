import { FC } from 'react';
import GoogleMapReact from 'google-map-react';
import React from 'react';
import { ShowroomProps } from '../model/showroomProps';
interface GoogleMapsProps {
  location: ShowroomProps | null;
}

const GooogleMapWrapper = ({ children }) => (
  <div className='w-full p-8 relative'>{children}</div>
);

const defaultProps = {
  center: {
    lat: 10.760554554121498,
    lng: 106.65415099195408,
  },
  zoom: 13,
};

const Position = ({ children }) => (
  <div className='top-30 left-30 z-10 absolute max-w-250 bg-white p-10 shadow-md rounded-md text-sm'>
    {children}
  </div>
);

const Text = ({ children }) => <span>{children}</span>;

interface MarkerProps {
  icon: JSX.Element;
  lat: number;
  lng: number;
  width: string;
}

const Marker: FC<MarkerProps> = ({ icon, lat, lng, width }) => (
  <div style={{ width }}>{icon}</div>
);
interface GoogleMapsProps {
  location: ShowroomProps | null;
}

const GoogleMaps: FC<GoogleMapsProps> = ({ location }) => {
  return (
    <>
      <GooogleMapWrapper>
        <Position>
          <Text>{location?.address}</Text>
        </Position>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_API_MAPS_KEY,
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={location?.center}
        >
          {location ? (
            <Marker
              width={'30px'}
              lat={location?.center?.lat}
              lng={location?.center?.lng}
              icon={
                <i
                  className='fa-sharp fa-solid fa-location-dot'
                  style={{
                    color: '#e30000',
                    fontSize: '30px',
                    top: 0,
                    left: 0,
                  }}
                ></i>
              }
            ></Marker>
          ) : null}
        </GoogleMapReact>
      </GooogleMapWrapper>
    </>
  );
};

export default GoogleMaps;
