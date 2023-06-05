import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const handleResetPassword = () => {
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    axios
      .post('http://localhost:8000/v1/auth/reset-password', { token, password })
      .then((res) => {
        setIsLoading(false);
        setSuccessMessage(res.data.message);
        navigate('/login')
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data);
      });
  };

  return (
    <div className='bg-white w-2/3 min-h-[50vh] flex mt-10 justify-center'>
      <div className='max-w-md p-6 flex flex-col w-full'>
        <h2 className='text-2xl font-bold text-center mb-4'>Reset Password</h2>

        {successMessage && (
          <p className='text-green-500 text-center mb-4'>{successMessage}</p>
        )}

        <div className='flex flex-col justify-center'>

          <input
            type='password'
            className='p-2 border rounded w-full mb-4'
            placeholder='New Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type='password'
            className='p-2 border rounded w-full mb-4'
            placeholder='Confirm New Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            onClick={handleResetPassword}
            className='text-black px-4 py-2 rounded w-2/4 mx-auto'
            disabled={isLoading}
          >
            {isLoading ? 'Resetting...' : 'Reset Password'}
          </button>
        </div>

        {error && <p className='text-red-500 text-center mt-4'>{error}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
