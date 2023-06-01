import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Toast from '../components/Toast';
import Spinner from '../components/Spinner';

const ContactSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
  fullname: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
});
const Contact = () => {
  const user = useSelector((state: RootState) => state.auth.login.currentUser)
  const [isSending, setIsending] = useState(false);
  const [showToast, setShowToasts] = useState(false);
  const [msg, setMsg] = useState('');

  const onSubmit = (values, { resetForm }) => {
    setIsending(true);
    axios.post(`http://localhost:8000/v1/mail/contact`, {
      data: values
    })
      .then((res) => {
        setShowToasts(true)
        if (res.status === 200) {
          setMsg(res.data.message);
        } else {
          setMsg(res.data.message);
        }
      })
      .catch((error) => {
        // Handle error if necessary
      })
      .finally(() => {
        setIsending(false);
        resetForm();
      });
  };
  const handleClose = () => {
    setShowToasts(false);
    setMsg('');
  };

  return (<>
    {showToast ? <Toast message={msg} onClose={handleClose}></Toast> : null}
    {isSending ? <Spinner /> : null}
    <div className='px-10'>
      <h1 className='m-5 text-3xl font-bold text-center'>Contact us</h1>
      <div className='flex gap-8 min-h-[650px] flex-row text-left border border-gray-300 rounded-lg mb-5'>
        <div className='p-5 flex-1'>
          <h3 className='text-xl font-semibold'>Contact Infomation</h3>
          <div
            className='bg-no-repeat bg-left-top pl-14 py-2.5 border-b border-gray-300 text-gray-700'
            style={{
              backgroundImage:
                'url(//cdn.tgdd.vn/mwgcart/mwg-site/ContentMwg/images/other/icon-contact-info-quote.png)',
            }}
          >
            Tìm kiếm siêu thị Trang SHOP? Vui lòng truy cập trang "Giới thiệu về
            chúng tôi" của chúng tôi tại{' '}
            <Link to='/about-us' className='text-blue-600 underline'>
              đây
            </Link>{' '}
            để xem bản đồ và địa chỉ của các siêu thị của chúng tôi trên toàn
            quốc.
          </div>
          <div className='flex justify-center my-4 lg:my-8 gap-10 flex-wrap'>
            <div className='py-2.5 w-2/3'>
              <h3 className='font-semibold'>Trang SHOP</h3>
              <p>Address: Cộng Hòa, Phường 13, Tân Bình, TP.HCM</p>
              <p>
                Phone:{' '}
                <span className='text-orange-600 font-bold'>1 234 56 78</span>
              </p>
              <p>
                Email:{' '}
                <span className='text-orange-600 font-bold'>
                  contact@Trangshop.dev
                </span>
              </p>
            </div>
            <img
              src='/src/assets/contact.png'
              className='w-1/2 bg-[#a9b8fa] max-w-xs max-h-xs lg:max-w-lg lg:max-h-md object-cover'
              alt='Contact'
            />
          </div>
        </div>
        <div className='w-full p-5 flex-1'>
          <h3 className='text-xl font-semibold'>Contact Form</h3>
          <div
            className='bg-no-repeat bg-left-top pl-14 py-2.5 border-b border-gray-300 text-gray-700 mb-4 lg:mb-8'
            style={{
              backgroundImage:
                'url(//cdn.tgdd.vn/mwgcart/mwg-site/ContentMwg/images/other/icon-contact-info-quote.png)',
            }}
          >
            Vui lòng điền vào biểu mẫu nếu bạn có bất kỳ phản hồi hoặc yêu cầu
            nào.
            <br />
            Thank you.
          </div>
          <Formik
            initialValues={{
              title: '',
              content: '',
              fullname: '',
              email: '',
              phone: '',
            }}
            validationSchema={ContactSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className='flex flex-col border border-gray-300 rounded-md mb-5 p-3.5 justify-center'>
                <div className='flex flex-row gap-5 my-2.5 justify-center items-center'>
                  <span className='float-left ml-4 pr-1.5 w-[100px]'>
                    Title*
                  </span>
                  <div className='flex-1 flex flex-col'>
                    <Field
                      placeholder='Title'
                      name='title'
                      className='flex-1 min-w-[40%] p-2.5'
                    />
                    <ErrorMessage
                      name='title'
                      component='span'
                      className='text-red-600 text-sm'
                    />
                  </div>
                </div>
                <div className='flex flex-row gap-5 my-2.5 justify-center items-center'>
                  <span className='float-left ml-4 pr-1.5 w-[100px]'>
                    Content*
                  </span>
                  <div className='flex-1 flex flex-col'>
                    <Field
                      placeholder='Content'
                      name='content'
                      as='textarea'
                      className='h-[100px] p-2.5 flex-1 min-w-[40%]'
                    />
                    <ErrorMessage
                      name='content'
                      component='span'
                      className='text-red-600 text-sm'
                    />
                  </div>
                </div>
                <div className='flex flex-row gap-5 my-2.5 justify-center items-center'>
                  <span className='float-left ml-4 pr-1.5 w-[100px]'>
                    Full name*
                  </span>
                  <div className='flex-1 flex flex-col'>
                    <Field
                      placeholder='Full name'
                      name='fullname'
                      className='flex-1 min-w-[40%] p-2.5'
                    />
                    <ErrorMessage
                      name='fullname'
                      component='span'
                      className='text-red-600 text-sm'
                    />
                  </div>
                </div>
                <div className='flex flex-row gap-5 my-2.5 justify-center items-center'>
                  <span className='float-left ml-4 pr-1.5 w-[100px]'>
                    Email*
                  </span>{' '}
                  <div className='flex-1 flex flex-col'>
                    <Field
                      placeholder='Email'
                      type='email'
                      name='email'
                      className='flex-1 min-w-[40%] p-2.5'
                    />
                    <ErrorMessage
                      name='email'
                      component='span'
                      className='text-red-600 text-sm'
                    />
                  </div>
                </div>
                <div className='flex flex-row gap-5 my-2.5 justify-center items-center'>
                  <span className='float-left ml-4 pr-1.5 w-[100px]'>
                    Phone*
                  </span>
                  <div className='flex-1 flex flex-col'>
                    <Field
                      placeholder='Phone'
                      type='phone'
                      name='phone'
                      className='flex-1 min-w-[40%] p-2.5'
                    />
                    <ErrorMessage
                      name='phone'
                      component='span'
                      className='text-red-600 text-sm'
                    />
                  </div>
                </div>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`w-[40%] px-4 py-2 font-semibold text-sm  text-white rounded-full shadow-sm ${isSubmitting
                    ? 'cursor-not-allowed bg-gray-500'
                    : 'bg-cyan-500'
                    } mx-auto`}
                >
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div></>
  );
};
export default Contact;
