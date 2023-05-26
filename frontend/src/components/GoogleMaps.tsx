import { FC } from 'react';
import GoogleMapReact from 'google-map-react';
import React from 'react';
import { ShowroomProps } from '../model/showroomProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface GoogleMapsProps {
  location: ShowroomProps | null;
}

const GooogleMapWrapper = ({ children }) => (
  <div className='w-full p-8 h-[450px] md:h-auto md:min-w-[30rem] md:min-h-[30rem] '>{children}</div>
);

const defaultProps = {
  center: {
    lat: 10.760554554121498,
    lng: 106.65415099195408,
  },
  zoom: 13,
};

const Position = ({ children }) => (
  <div className='top-30 left-30 z-10 absolute max-w-250 bg-white p-4 max-w-[20rem] max-h-[30rem] shadow-md text-sm'>
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
  const apiKey = process.env.VITE_APP_API_KEY;

  return (
    <>
      <GooogleMapWrapper>
        <Position>
          <Text>{location?.address}</Text>
        </Position>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: apiKey
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
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{ color: '#e30000', fontSize: '30px' }}
                />
              }
            ></Marker>
          ) : null}
        </GoogleMapReact>
      </GooogleMapWrapper>
    </>
  );
};

export default GoogleMaps;