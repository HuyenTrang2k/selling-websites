import { useState } from 'react';
import React from 'react';
import { registerUser } from '../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const res = registerUser(dispatch, { username, email, password });
      setTimeout(async () => {
        setIsLoading(false);
        if (await res) {
          navigate(`/verify/${email}`);
        }
        else {
          setErr(res as unknown as string);
        }
      }, 1000);
    }
  };

  return (
    <div className='flex flex-1 flex-col min-h-screen bg-login2 bg-cover text-white w-screen justify-center '>
      <div className='flex rounded-2xl shadow-lg p-5 items-center justify-center h-full flex-row gap-5 '>
        <div className='w-[90%] h-[90%] bg-login flex bg-cover flex-col sm:flex-row rounded-2xl '>
          <div className='flex flex-1 lg:flex-[0.5] text-3xl h-30 text-center justify-center items-center'>
            <p className='mt-4'> Wellcom to Trang shop</p>
          </div>
          <div className='flex-1 lg:w-1/2 sm:w-2/3 px-8 md:px-16 w-full max-w-2xl rounded-2xl py-7 items-center align-items-center '>
            <h2 className='my-4 font-bold text-2xl text-center'>Register</h2>

            <form action='' className='flex flex-col gap-4 text-black'>
              {err ? <span className="text-red-500 font-bold text-center">{err}</span> : null}
              <input
                className='p-2 mt-8 sm:mt-1 rounded-xl border'
                type='text'
                name='username'
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className='p-2 mt-8 sm:mt-1 rounded-xl border'
                type='email'
                name='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className='p-2 rounded-xl border w-full'
                type='password'
                name='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className='p-2 rounded-xl border w-full'
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                onClick={handleClick}
                className='bg-[#26db6b] rounded-xl text-white py-2 hover:scale-105 duration-300'
              >
                Register
              </button>
            </form>

            <div className='mt-6 grid grid-cols-3 items-center text-gray-400'>
              <hr className='border-gray-400' />
              <p className='text-center text-sm'>OR</p>
              <hr className='border-gray-400' />
            </div>

            <button className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]'>
              <img className='mr-3' width='25px' src='src\assets\google.svg' />
              Register with Google
            </button>

            <div className='mt-5 text-xs border-b border-[#ffffff] py-4 text-[#ffffff]'>
              <Link to ='/forgot-password'>Forgot your password?</Link>
            </div>

            <div className='mt-3 text-xs flex justify-between items-center text-[#ffffff]'>
              <p>Already have an account?</p>
              <button className='py-2 px-5 bg-white border text-gray-700 rounded-xl hover:scale-110 duration-300'
                onClick={() => navigate('/login')}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
