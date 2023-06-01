import React, { useState, useEffect } from 'react';

const Toast = ({ message, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <div
      className={`flex flex-row fixed gap-3 justify-between items-center  top-20 w-[250px] right-0 mt-4 mr-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 ${show ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
    >
      <span>{message}</span>
      <button
        className="flex items-center justify-center w-[20px] h-[20px] text-sm text-white bg-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
        onClick={handleClose}
        style={{ padding: '4px', borderRadius: '0px' }}
      >
        <span className="text-center">x</span>
      </button>


    </div>

  );
};

export default Toast;
