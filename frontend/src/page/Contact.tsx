import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import React from 'react';

const ContactSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
  fullname: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
});

const Contact = () => {
  const [isSending, setIsending] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsending(true);
    alert('Thank you for your contact information!');
    setIsending(false);
  };

  return (
    <>
      <h1 className='m-5 text-3xl font-bold'>Contact us</h1>
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
            <Link to='/about' className='text-blue-600 underline'>
              đây
            </Link>{' '}
            để xem bản đồ và địa chỉ của các siêu thị của chúng tôi trên toàn
            quốc.
          </div>
          <div className='py-2.5'>
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
        </div>
        <div className='w-full p-5 flex-1'>
          <h3 className='text-xl font-semibold'>Contact Form</h3>
          <div
            className='bg-no-repeat bg-left-top pl-14 py-2.5 border-b border-gray-300 text-gray-700'
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
                  <span className='float-left text-right pr-1.5 w-[100px]'>
                    Title*
                  </span>
                  <div className='flex-1 flex flex-col'>
                    <Field
                      placeholder='title'
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
                  <span className='float-left text-right pr-1.5 w-[100px]'>
                    Content*
                  </span>
                  <div className='flex-1 flex flex-col'>
                    <Field
                      placeholder='content'
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
                  <span className='float-left text-right pr-1.5 w-[100px]'>
                    Full name*
                  </span>
                  <div className='flex-1 flex flex-col'>
                    <Field
                      placeholder='fullname'
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
                  <span className='float-left text-right pr-1.5 w-[100px]'>
                    Email*
                  </span>{' '}
                  <div className='flex-1 flex flex-col'>
                    <Field
                      placeholder='email'
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
                  <span className='float-left text-right pr-1.5 w-[100px]'>
                    Phone*
                  </span>
                  <div className='flex-1 flex flex-col'>
                    <Field
                      placeholder='phone'
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
                  className={`w-[40%] px-4 py-2 font-semibold text-sm  text-white rounded-full shadow-sm ${
                    isSubmitting ? 'cursor-not-allowed bg-gray-500' : 'bg-cyan-500'
                  } mx-auto`}
                >
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default Contact;
