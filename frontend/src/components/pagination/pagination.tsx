import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Dropdown from '../dropdown';
import './pagination.css';

type PaginationProps = {
  currentPage: number;
  onPageChange: ({ selected }: { selected: number }) => void;
  onSizeChange: (value: number) => void;
  pageCount: number;
  pageSize: number;
};

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  onSizeChange,
  pageCount,
  pageSize,
  currentPage,
}) => {
  const [curPage, setCurPage] = useState(currentPage);

  useEffect(() => {
    if (currentPage > pageCount) {
      setCurPage(1);
      onPageChange({ selected: 0 });
    }
  }, [currentPage, pageCount, onPageChange]);

  const handlePageClick = (data: { selected: number }) => {
    const selectedPage = data.selected + 1;
    setCurPage(selectedPage);
    onPageChange(data);
  };

  const handleSizeChange = (value: number) => {
      onSizeChange(value);
      setCurPage(1);
  };
  

  const options = [10, 20, 30];
  return (
    <>
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        previousLinkClassName={'previous_page'}
        nextLinkClassName={'next_page'}
        disabledClassName={'disabled'}
        activeClassName={'active'}
        forcePage={curPage - 1}
      />
      <div className='relative inline-block text-left mt-2'>
        <Dropdown
          options={options}
          value={pageSize}
          onChange={(value)=>{handleSizeChange(value)}}
        />
      </div>
    </>
  );
};

export default Pagination;
