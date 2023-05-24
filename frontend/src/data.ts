import { ShowroomProps } from './model/showroomProps';

export const sliderItem = [
  [
    {
      id: 1,
      img: 'https://cdn.tgdd.vn/2023/01/banner/1200-300-1200x300-1.webp',
      name: 'Aya Bouchiha',
      description: 'Full Stack Web Developer',
      title: 'BLACK FRIDAY',
      desc: 'SALE UP TO 90% OFF',
      bg: 'f5fafd',
      cat: 'watch',
    },
    {
      id: 2,
      img: 'https://cdn.tgdd.vn/2022/12/banner/800-200-800x200-97.webp',
      name: 'Aya Bouchiha',
      description: 'Full Stack Web Developer',
      title: 'NEW!!!',
      desc: 'NOW IPHONE 14 IS AVAILABLE',
      bg: 'f5fafd',
      cat: 'laptop',
    },
  ],
  [
    {
      id: 3,
      img: 'https://cdn.tgdd.vn/2022/12/banner/720-220-720x220-264.webp',
      name: 'John Doe',
      description: 'Author',
      title: 'NEW!!!',
      desc: 'SHOP NOW. APPLE WATCH SERIES 6',
      bg: 'f5fafd',
      cat: 'smartphone',
    },
    {
      id: 4,
      img: 'https://cdn.tgdd.vn/2022/12/banner/reno8-tet-720-220-720x220.webp',
      name: 'Pitsu Coma',
      description: 'Math Student',
      title: 'NEW!!!',
      desc: 'SHOP NOW. APPLE WATCH SERIES 6',
      bg: 'f5fafd',
      cat: 'smartphone',
    },
  ],
];

export const categories = [
  {
    id: 1,
    img: "https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/27/638077302825230698_desk-html-banner.png",
    title: "SMART PHONE",
    cat: 'smartphone',
  },
  {
    id: 2,
    img: "https://cdn.tgdd.vn/Files/2021/11/18/1398727/macm1max_1280x720-800-resize.jpg",
    title: "LAPTOP",
    cat: 'laptop',
  },
  {
    id: 3,
    img: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/7/1090265/Screen-Shot-2022-09--02.jpg",
    title: "SMART WATCH",
    cat: 'watch',
  },
];
export const listShowroom : ShowroomProps[] = [
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