import { useState, useEffect } from 'react';
import './newProduct.css';
import {
  addProduct,
  getCategories,
  addListProduct,
} from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

export default function NewProduct() {
  // change name page
  document.title = 'New Product';
  const [inputs, setInputs] = useState({});
  const categories = useSelector((state) => state.category.categories);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = await addProduct(inputs, dispatch);
    if (product.data) {
      window.location.replace('/product/' + product.data.id);
    } else {
      console.log('error');
    }
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getCategories(dispatch);
  }, [dispatch]);
  useEffect(() => {
    setProducts(data);
  }, []);
  const data = [
    {
      name: 'Camera IP 360 Độ 1080P IMOU Ranger 2C TA22CP',
      price: '27.95',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/307175/camera-ip-360-do-1080p-imou-ranger-2c-ta22cp-thumb-600x600.jpg',
      description: 'Camera IP 360 Độ 1080P IMOU Ranger 2C TA22CP',
      quantity: 100,
    },
    {
      name: 'Camera IP 360 Độ 1080P IMOU A2 A22EP',
      price: '29.67',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/307173/camera-ip-360-do-1080p-imou-a2-a22ep-thumb-5-600x600.jpg',
      description: 'Camera IP 360 Độ 1080P IMOU A2 A22EP',
      quantity: 100,
    },
    {
      name: 'Camera IP 360 Độ 1536P TP-Link Tapo C210',
      price: '27.95',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/242566/camera-ip-360-do-3mp-tp-link-tapo-c210-030822-051551-600x600.jpg',
      description: 'Camera IP 360 Độ 1536P TP-Link Tapo C210',
      quantity: 100,
    },
    {
      name: 'Camera IP Ngoài Trời 3MP TP-link Tapo C310',
      price: '38.70',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/236573/camera-giam-sat-ngoai-troi-3mp-tp-link-tapo-c310-030822-045845-600x600.jpg',
      description: 'Camera IP Ngoài Trời 3MP TP-link Tapo C310',
      quantity: 100,
    },
    {
      name: 'Camera IP 360 Độ 1080P TP-Link Tapo TC70',
      price: '27.95',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/235820/camera-ip-360-do-1080p-tp-link-tapo-tc70-trang-030822-044525-600x600.jpg',
      description: 'Camera IP 360 Độ 1080P TP-Link Tapo TC70',
      quantity: 100,
    },
    {
      name: 'Camera IP Ngoài Trời 4MP TP-Link Tapo C320WS',
      price: '50.31',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/278311/camera-ip-ngoai-troi-4mp-tp-link-tapo-c320ws-trang-thumb-600x600.jpg',
      description: 'Camera IP Ngoài Trời 4MP TP-Link Tapo C320WS',
      quantity: 100,
    },
    {
      name: 'Camera IP 360 Độ 1080P Ezviz C6N',
      price: '29.67',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/285250/camera-ip-360-do-1080p-ezviz-c6n-trang-thumb-600x600.jpg',
      description: 'Camera IP 360 Độ 1080P Ezviz C6N',
      quantity: 100,
    },
    {
      name: 'Camera IP Ngoài Trời 3MP TP-Link Tapo TC65',
      price: '43.00',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/307989/camera-ip-ngoai-troi-3mp-tp-link-tapo-tc65-thumb-600x600.jpg',
      description: 'Camera IP Ngoài Trời 3MP TP-Link Tapo TC65',
      quantity: 100,
    },
    {
      name: 'Camera IP Ngoài Trời 1080P IMOU Bullet 2C F22P',
      price: '42.57',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/307179/camera-ip-ngoai-troi-1080p-imou-bullet-2c-f22p-thumb-600x600.jpg',
      description: 'Camera IP Ngoài Trời 1080P IMOU Bullet 2C F22P',
      quantity: 100,
    },
    {
      name: 'Camera IP Ngoài Trời 4MP IMOU Bullet 2E F42FP',
      price: '55.90',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/307177/camera-ip-ngoai-troi-4mp-imou-bullet-2e-f42fp-thumb-5-600x600.jpg',
      description: 'Camera IP Ngoài Trời 4MP IMOU Bullet 2E F42FP',
      quantity: 100,
    },
    {
      name: 'Camera IP 360 Độ 3K IMOU Rex 2D GK2DP',
      price: '55.47',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/307176/camera-ip-360-do-3k-imou-rex-2d-gk2dp-thumb-600x600.jpg',
      description: 'Camera IP 360 Độ 3K IMOU Rex 2D GK2DP',
      quantity: 100,
    },
    {
      name: 'Camera IP 360 Độ 2K Pro Xiaomi Mi Home C400',
      price: '72.67',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/305559/camera-ip-mi-home-360-do-2k-pro-xiaomi-c400-trang-thumb-1-600x600.jpg',
      description: 'Camera IP 360 Độ 2K Pro Xiaomi Mi Home C400',
      quantity: 100,
    },
    {
      name: 'Camera IP 360 Độ 2K Xiaomi Mi Home C300',
      price: '59.77',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/305558/camera-ip-mi-home-360-do-2k-xiaomi-c300-trang-thumb-1-600x600.jpg',
      description: 'Camera IP 360 Độ 2K Xiaomi Mi Home C300',
      quantity: 100,
    },
    {
      name: 'Camera IP 360 Độ 1080P Xiaomi Mi Home C200',
      price: '36.55',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/305555/camera-ip-mi-home-360-do-1080p-xiaomi-c200-trang-thumb-1-600x600.jpg',
      description: 'Camera IP 360 Độ 1080P Xiaomi Mi Home C200',
      quantity: 100,
    },
    {
      name: 'Camera IP Ngoài Trời 360 Độ 4MP Ezviz C8W',
      price: '89.87',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/286138/camera-ip-ngoai-troi-360-do-4mp-ezviz-c8w-trang-den-thumb-600x600.jpg',
      description: 'Camera IP Ngoài Trời 360 Độ 4MP Ezviz C8W',
      quantity: 100,
    },
    {
      name: 'Camera IP Ngoài Trời 3MP Ezviz C3TN',
      price: '68.37',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/285251/camera-ip-ngoai-troi-3mp-ezviz-c3tn-trang-thumb-600x600.jpg',
      description: 'Camera IP Ngoài Trời 3MP Ezviz C3TN',
      quantity: 100,
    },
    {
      name: 'Webcam 480P A4Tech PK-635G',
      price: '9.68',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/253257/webcam-480p-a4tech-pk-635g-bac-211021-081743-600x600.jpg',
      description: 'Webcam 480P A4Tech PK-635G',
      quantity: 100,
    },
    {
      name: 'Webcam 480P A4Tech PK-710G',
      price: '11.83',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/253161/webcam-480p-a4tech-pk-710g-den-030822-053442-600x600.jpg',
      description: 'Webcam 480P A4Tech PK-710G',
      quantity: 100,
    },
    {
      name: 'Camera IP 360 Độ 2K Pro Xiaomi Mi Home BHR4193GL',
      price: '64.07',
      category: '647869111ff3f41d06592dd3',
      image:
        'https://cdn.tgdd.vn/Products/Images/4728/242192/ip-mi-home-360-do-2k-pro-xiaomi-bhr4193gl-030822-050259-600x600.jpg',
      description: 'Camera IP 360 Độ 2K Pro Xiaomi Mi Home BHR4193GL',
      quantity: 100,
    },
  ];
  return (
    <div className='newProduct'>
      <h1 className='addProductTitle'>Create a New Product</h1>
      <form className='addProductForm' onSubmit={handleSubmit}>
        <div className='addProductItem'>
          <label>Name</label>
          <input
            name='name'
            type='text'
            placeholder='name product...'
            onChange={handleChange}
            required
          />
        </div>
        <div className='addProductItem'>
          <label>Image</label>
          <input
            type='text'
            id='file'
            name='image'
            placeholder='image link...'
            onChange={handleChange}
            required
          />
        </div>
        <div className='addProductItem'>
          <label>Description</label>
          <input
            name='description'
            type='text'
            placeholder='description...'
            onChange={handleChange}
            required
          />
        </div>
        <div className='addProductItem'>
          <label>Price</label>
          <input
            name='price'
            type='number'
            placeholder='price product...'
            onChange={handleChange}
            required
          />
        </div>
        <div className='addProductItem'>
          <label>Categories</label>
          <select
            style={{ padding: '10px' }}
            name='category'
            onChange={handleChange}
            required
          >
            <option value='' hidden>
              {' '}
              PLEASE CHOOSE CATEGORY
            </option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id} defaultChecked>
                {cat.name}
              </option>
            ))}
            ;
          </select>
        </div>

        <div className='addProductItem'>
          <label>Quantity</label>
          <input
            name='quantity'
            type='number'
            placeholder='Quantity product'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button className='productAddButton'>Create</button>
          <button
            className='productAddButton'
            onClick={async () => {
              const product = await addListProduct(data, dispatch);
            }}
          >
            create list
          </button>
        </div>
      </form>
    </div>
  );
}
