import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { logoutUser } from '../redux/apiRequest';

const MenuProfile = () => {
  const user = useSelector((state: RootState) => state.auth.login.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    logoutUser(dispatch,navigate);
    navigate('/login');
  };
  return (
    <Menu as='div' className='relative ml-3'>
      <div>
        <Menu.Button className='flex rounded-full border-0 text-sm'>
          <span className='sr-only'>Open user menu</span>
          <img
            className='h-10 w-10 rounded-full'
            src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg'
            alt=''
          />
        </Menu.Button>
      </div>
      <Transition
        as={React.Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          {user ? (
            <>
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
                  <div
                    onClick={handleLogout}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                    )}
                  >
                    Sign out
                  </div>
                )}
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    to='/login'
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    Sign in
                  </NavLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    to='/register'
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    Sing up
                  </NavLink>
                )}
              </Menu.Item>
            </>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuProfile;
