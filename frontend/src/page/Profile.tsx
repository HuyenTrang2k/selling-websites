import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { UserProps } from '../model/userProps';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Spinner from '../components/Spinner';
import { updateProfile } from '../redux/apiRequest';
import Toast from '../components/Toast';

function Profile() {
    const ContactSchema = Yup.object().shape({
        username: Yup.string().required('Required'),
        email: Yup.string(),
        phone: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
    });
    const dispatch = useDispatch();
    const [user, setUser] = useState<UserProps | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    let currentUser = useSelector((state: RootState) => state.auth.login.currentUser);
    const { _id } = currentUser;

    const handleUpdate = async (values) => {
        setLoading(true);
        const { username, email, phone, address } = values;
        const newUser = {
            username,
            email: user?.email,
            phone,
            address,
        };
        const res = await updateProfile(dispatch, newUser, currentUser);
        if (res === true) {
            setSuccess(true)
            setLoading(false);
        }
        else {
            setLoading(false);
        }
    };
    const handleCloseToast = () => {
        setSuccess(false);
    };
    useEffect(() => {
        console.log(currentUser)
        setUser(currentUser);
    }, [currentUser]);

    return (
        <div className='flex flex-col flex-1 w-full text-center mb-10 mt-4 min-h-[70vh]'>
            {loading ? (
                <Spinner />
            ) : null}
            {success && (
                <Toast
                    message="Update successful"
                    onClose={handleCloseToast}
                />
            )}
            <h1 className='m-4 text-3xl font-bold'>Profile</h1>
            <div className='flex '>
                <div className='px-10 flex-1  justify-center flex'>
                    <div className='flex w-2/3 flex-col mt-4'>
                        <div className='flex text-center gap-4'>
                            <img
                                src={
                                    'https://th.bing.com/th/id/OIP.VwOipFm0fDDr_KOzoyrgVwAAAA?w=159&h=176&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                                }
                                alt=''
                                className='w-10 h-10 rounded-full object-cover'
                            />
                            <div className='flex flex-col ml-4 justify-center'>
                                <span className='font-semibold'>{user?.username}</span>
                                <span className='font-light'>
                                    Role: {user?.admin ? 'Admin' : 'User'}
                                </span>
                            </div>
                        </div>
                        <div className='text-left flex flex-col gap-4'>
                            <span className='text-sm font-semibold text-gray-500'>
                                Account Details
                            </span>
                            <div className='flex items-center text-gray-700'>
                                <PermIdentityIcon className='userShowIcon' />
                                <span className='ml-3'>{user?.username}</span>
                            </div>
                            <div className='userShowInfo flex items-center text-gray-700'>
                                <CalendarTodayIcon className='userShowIcon' />
                                <span className='ml-3'>
                                    {user?.createdAt
                                        ? new Date(user?.createdAt).toDateString()
                                        : null}
                                </span>
                            </div>
                            <span className='userShowTitle text-sm font-semibold text-gray-500'>
                                Contact Details
                            </span>
                            <div className='userShowInfo flex items-center text-gray-700'>
                                <PhoneAndroidIcon className='userShowIcon' />
                                <span className='ml-3'>
                                    {user?.phone ? user?.phone : 'No phone number'}
                                </span>
                            </div>
                            <div className='userShowInfo flex items-center text-gray-700'>
                                <MailOutlineIcon className='userShowIcon' />
                                <span className='ml-3'>{user?.email}</span>
                            </div>
                            <div className='userShowInfo flex items-center text-gray-700'>
                                <LocationSearchingIcon className='userShowIcon' />
                                <span className='ml-3'>
                                    {user?.address ? user.address : 'No address'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex flex-col'>
                    <span className='text-xl font-semibold'>Edit</span>
                    <Formik
                        initialValues={{
                            username: user?.username || '',
                            email: user?.email || '',
                            phone: user?.phone || '',
                            address: user?.address || '',
                        }}
                        validationSchema={ContactSchema}
                        onSubmit={handleUpdate}
                    >
                        {({ isSubmitting }) => (
                            <Form className='flex flex-col border-none rounded-md mb-5 p-3.5 justify-center '>
                                <div className='flex flex-row gap-5 my-2.5 justify-center items-center'>
                                    <span className='float-left ml-4 pr-1.5 w-[100px]'>
                                        Email*
                                    </span>
                                    <div className='flex-1 flex flex-col'>
                                        <Field
                                            placeholder={user?.email}
                                            type='email'
                                            name='email'
                                            className='flex-1 min-w-[40%] p-2.5'
                                            value={user?.email || ''}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-row gap-5 my-2.5 justify-center items-center'>
                                    <span className='float-left ml-4 pr-1.5 w-[100px]'>
                                        Username*
                                    </span>
                                    <div className='flex-1 flex flex-col'>
                                        <Field
                                            placeholder={user?.username}
                                            name='username'
                                            className='flex-1 min-w-[40%] p-2.5'
                                        />
                                        <ErrorMessage
                                            name='username'
                                            component='span'
                                            className='text-red-600 text-sm text-left'
                                        />
                                    </div>
                                </div>

                                <div className='flex flex-row gap-5 my-2.5 justify-center items-center'>
                                    <span className='float-left ml-4 pr-1.5 w-[100px]'>
                                        Phone*
                                    </span>
                                    <div className='flex-1 flex flex-col'>
                                        <Field
                                            type='phone'
                                            name='phone'
                                            className='flex-1 min-w-[40%] p-2.5'
                                            placeholder={user?.phone}
                                        />
                                        <ErrorMessage
                                            name='phone'
                                            component='span'
                                            className='text-red-600 text-sm text-left'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-row gap-5 my-2.5 justify-center items-center'>
                                    <span className='float-left ml-4 pr-1.5 w-[100px]'>
                                        Address*
                                    </span>
                                    <div className='flex-1 flex flex-col'>
                                        <Field
                                            placeholder={user?.address}
                                            name='address'
                                            className='flex-1 min-w-[40%] p-2.5'
                                        />
                                        <ErrorMessage
                                            name='address'
                                            component='span'
                                            className='text-red-600 text-sm text-left'
                                        />
                                    </div>
                                </div>
                                <button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className={`w-[40%] mt-4 px-4 py-2 font-semibold text-sm  text-white rounded-full shadow-sm ${isSubmitting
                                        ? 'cursor-not-allowed bg-gray-500'
                                        : 'bg-cyan-500'
                                        } mx-auto`}
                                >
                                    {isSubmitting ? <Spinner /> : 'Update'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Profile;


