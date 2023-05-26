import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigation = [
    { name: 'Home', link: '/', current: currentPath === '/' },
    {
      name: 'Products',
      link: '/products',
      current: currentPath === '/products',
    },
    { name: 'Team', link: '/login', current: currentPath === '/login' },
    {
      name: 'About us',
      link: '/about-us',
      current: currentPath === '/about-us',
    },
    { name: 'Contact', link: '/contact', current: currentPath === '/contact' },
  ];

  const navigate = useNavigate();
  const handleNavLinkClick = (item) => {
    item.current = true;
    navigate(item.link);
  };
  return (
    <Disclosure as='nav' className='bg-white w-full'>
      {({ open }) => (
        <>
          <div className='mx-autopx-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 flex-row items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex items-center md:justify-items-center justify-items-start flex-grow'>
                <div className='flex flex-grow lg:flex-grow-0 justify-items-center md:justify-items-center'>
                  <img
                    className='flex h-8 lg:hidden flex-grow md:flex-grow-0'
                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                    alt='Trang Shop'
                  />
                  <img
                    className='hidden h-8 w-auto lg:flex mx-4'
                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                    alt='Trang Shop'
                  />
                </div>
                <div className='hidden sm:ml-6 sm:block align-center  flex-grow md:flex justify-center'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <NavLink
                      key={item.name}
                      className={classNames(
                        item.current
                          ? 'bg-gray-600 text-white' // Màu nền vàng và màu chữ trắng cho phần tử hiện tại
                          : 'text-black hover:bg-gray-800 hover:text-white', // Màu chữ xám và màu nền xám nổi khi di chuột qua
                        'rounded-md px-3 py-2 text-sm font-medium '
                      )}
                      aria-current={item.current ? 'page' : undefined}
                      to={item.link}
                    >
                      {item.name}
                    </NavLink>
                    
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto'>
                {/* <button
                  type='button'
                  className='rounded-md bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button> */}

                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='flex rounded-full border-0 text-sm'>
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-12 w-12 rounded-full'
                        src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg'
                        alt=''
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to='/profile'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to='/setting'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to='signout'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </NavLink>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          {/* Menu mobile */}
          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  onClick={() => handleNavLinkClick(item)}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
