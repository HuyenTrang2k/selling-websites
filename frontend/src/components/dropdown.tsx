import React, { useState } from 'react';
import { DropdownProps } from '../model/dropdownProps';
const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSelect = (selectedValue: number) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <button
          type='button'
          onClick={() => toggleOpen()}
          className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          id='menu-button'
          aria-expanded='true'
          aria-haspopup='true'
        >
          Items: {value}
        </button>
      </div>
      {isOpen && (
        <div
          className='absolute right-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          style={{bottom: '2.5rem'}}
        >
          {options.map((option) => (
            <div className='py-1' role='none' key={option}>
              <a
                href='#'
                className='text-gray-700 block px-4 py-2 text-sm  hover:bg-blue-500 hover:text-white'
                role='menuitem'
                id='menu-item-0'
                onClick={() => handleSelect(option)}
              >
                {option}
              </a>
            </div>
          ))}
        </div>
      )}
    </>
    // </div>
  );
};

export default Dropdown;
