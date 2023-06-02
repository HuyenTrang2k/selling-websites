import { ShowroomProps } from './model/showroomProps';

export const sliderItem = [
  [
    {
      id: 1,
      img: 'https://down-ws-vn.img.susercontent.com/vn-11134210-7qukw-lhg03bcdq9xd2a.webp',
      name: 'Pitsu Coma',
      description: 'Math Student',
      title: 'NEW!!!',
      desc: 'SHOP NOW. Sandisk',
      bg: 'f5fafd',
      cat: 'storage-device',
    },
    {
      id: 2,
      img: 'https://vn-test-11.slatic.net/shop/6899e5bd9600f5a61b01486e61167293.png',
      name: 'tp-link router',
      description: 'Router',
      title: 'NEW!!!',
      desc: 'tp-link router',
      bg: 'f5fafd',
      cat: 'router',
    },
  ],
  [
    {
      id: 3,
      img: "https://vn-test-11.slatic.net/shop/9ebe0c5be571b17ee01ba617bf526d07.png",
      name: 'camera',
      description: 'Camera',
      title: 'BLACK FRIDAY',
      desc: 'SALE UP TO 50% OFF',
      bg: 'f5fafd',
      cat: 'camera',
    },
    {
      id: 4,
      img: 'https://vn-test-11.slatic.net/shop/bf258c6991bfeae62e6465b88600b9eb.png',
      name: 'Camera',
      description: 'Author',
      title: 'NEW!!!',
      desc: 'SHOP NOW. Camera',
      bg: 'f5fafd',
      cat: 'camera',
    },
  ],
];

export const categories = [
  {
    id: 1,
    img: "https://t3.ftcdn.net/jpg/02/00/20/90/240_F_200209004_ZEy19OimfGMfq9YmVjWRQcZ3vh98XyVx.jpg",
    title: "Camera",
    cat: 'camera',
  },
  {
    id: 2,
    img: "https://ottawa.ctvnews.ca/polopoly_fs/1.5201227!/httpImage/image.png_gen/derivatives/landscape_960/image.png",
    title: "Router",
    cat: 'router',
  },
  {
    id: 3,
    img: "https://olbac.com/olbac-website/public/storage/8002/conversions/638e17ee8e65a_Lexar_SL660_Blaze_5-2-thumb.jpg",
    title: "Storage device",
    cat: 'storage-device',
  },
];
export const listShowroom: ShowroomProps[] = [
  {
    id: 1,
    name: 'Cửa hàng Di Động NHAT SHOP',
    address: "1141D Đường 3/2, Phường 6, Quận 11, Thành phố Hồ Chí Minh",
    phone: "1800.6018",
    center: {
      lat: 10.760501555237804,
      lng: 106.6541528323798
    }
  },
  {
    id: 2,
    name: 'Cửa hàng Di Động NHAT SHOP',
    address: "87A Đ. Kênh Tân Hóa, Tân Thới Hoà, Tân Phú, Thành phố Hồ Chí Minh",
    phone: "1800.6018",
    center: {
      lat: 10.769195377088245,
      lng: 106.63545792475279
    }
  },
  {
    id: 3,
    name: 'Cửa hàng Di Động NHAT SHOP ',
    address: "454 Đ. Cộng Hòa, Phường 13, Tân Bình, Thành phố Hồ Chí Minh",
    phone: "1800.6018",
    center: {
      lat: 10.802577081192261,
      lng: 106.64213337614835
    }
  }];

export const products = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    price: 999,
    createdAt: new Date("2021-09-14"),
    image: "https://via.placeholder.com/400x300"
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 799,
    createdAt: new Date("2021-01-29"),
    image: "https://via.placeholder.com/400x300"
  },
  {
    id: 3,
    name: "Google Pixel 6",
    price: 899,
    createdAt: new Date("2021-10-19"),
    image: "https://via.placeholder.com/400x300"
  },
  {
    id: 4,
    name: "OnePlus 9 Pro",
    price: 899,
    createdAt: new Date("2021-03-23"),
    image: "https://via.placeholder.com/400x300"
  },
  {
    id: 5,
    name: "Xiaomi Mi 11",
    price: 749,
    createdAt: new Date("2021-02-08"),
    image: "https://via.placeholder.com/400x300"
  }
];