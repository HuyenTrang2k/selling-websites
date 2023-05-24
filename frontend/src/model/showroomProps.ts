export interface ShowroomProps {
    id: number;
    name: string;
    address: string;
    phone: string;
    center: {
      lat: number;
      lng: number;
    };
  }