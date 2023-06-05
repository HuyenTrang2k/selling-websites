import { useState } from 'react';
import axios from 'axios';
import React from 'react';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleForgotPassword = () => {
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    axios
      .post('http://localhost:8000/v1/auth/forgot-password', { email })
      .then((res) => {
        setIsLoading(false);
        setSuccessMessage(res.data.message);
        alert('Please check your email!')
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data);
      });
  };

  return (
    <div className='bg-white w-2/3 min-h-[50vh] flex mt-10 justify-center'>
      <div className='max-w-md p-6 flex flex-col w-full'>
        <h2 className='text-2xl font-bold text-center mb-4'>Forgot Password</h2>

        {successMessage && (
          <p className='text-green-500 text-center mb-4'>{successMessage}</p>
        )}

        <div className='flex flex-col justify-center'>
          <input
            type='email'
            className='p-2 border rounded w-full mb-4'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={handleForgotPassword}
            className='text-black px-4 py-2 rounded w-2/4 mx-auto'
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Reset Password'}
          </button>
        </div>

        {error && <p className='text-red-500 text-center mt-4'>{error}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
